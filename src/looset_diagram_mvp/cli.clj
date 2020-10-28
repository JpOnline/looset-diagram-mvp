(ns looset-diagram-mvp.cli
  (:require
    [clojure.string :as string]
    [clojure.tools.cli]
    [looset-diagram-mvp.cbs-to-graph :as cbs-to-graph]

    [clojure.test :refer :all]
    [clojure.pprint :refer [pprint]]
    )
  (:gen-class))

;; (def cbs-to-graph-options)

(def cli-options
  [;; First three strings describe a short-option, long-option with optional
   ;; example argument description, and a description. All three are optional
   ;; and positional.
   
   ["-H" "--hostname HOST" "Remote host"
    ;; :default (str "jp default")
    ;; Specify a string to output in the default column in the options summary
    ;; if the default value's string representation is very ugly
    :default-desc "localhost"
    #_#_:parse-fn #(str %)]
   ;; If no required argument description is given, the option is assumed to
   ;; be a boolean option defaulting to nil
   [nil "--detach" "Detach from controlling process"]
   ["-v" nil "Verbosity level; may be specified multiple times to increase value"
    ;; If no long-option is specified, an option :id must be given
    :id :verbosity
    :default 0
    ;; Use :update-fn to create non-idempotent options (:default is applied first)
    :update-fn inc]
   ["-f" "--file NAME" "File names to read"
    ;; :update-fn conj
    :multi true ; use :update-fn to combine multiple instance of -f/--file
    :default []
    ;; with :multi true, the :update-fn is passed both the existing parsed
    ;; value(s) and the new parsed value from each option
    ]
   ;; A boolean option that can explicitly be set to false
   ["-d" "--[no-]daemon" "Daemonize the process" :default true]
   ["-h" "--help"]])

(defn usage [options-summary]
  (->> ["Looset diagram automatically generates a graph of dependencies by analyzing the Code Blocks of your project."
        ""
        "Usage: lein run <path-to-project> [options]"
        ""
        "Options:"
        options-summary
        ]
       (string/join \newline)))

(defn error-msg [errors]
  (str "The following errors occurred while parsing your command:\n\n"
       (string/join \newline errors)))

(defn validate-args
  "Validate command line arguments. Either return a map indicating the program
  should exit (with a error message, and optional ok status), or a map
  indicating the action the program should take and the options provided."
  [args]
  (let [{:keys [options arguments errors summary] :as args-opt} (clojure.tools.cli/parse-opts args cbs-to-graph-options)]
    (cond
      (:help options) ; help => exit OK with usage summary
      {:exit-message (usage summary) :ok? true}

      errors ; errors => exit with description of errors
      {:exit-message (error-msg errors)}

      (:files-to-analyze-default options)
      {:action "analyze"}

      (> (count arguments) 0)
      {:action (first arguments) :options options}

      :else ; failed custom validation => exit with usage summary
      {:exit-message (usage summary)})))

(defn exit [status msg]
  (println msg)
  (System/exit status))

(defn -main [& args]
  (let [{:keys [action options exit-message ok?]} (validate-args args)]
    (if exit-message
      (exit (if ok? 0 1) exit-message)
      (case action
        "gen-interface-file" (cbs-to-graph/-main)
        "analyze" (cbs-to-graph/-main)
        ))))

(def cbs-to-graph-options
  [["-g" "--use-gitignore" "Analyze files specified in a git repository."]
   ["-d" "--files-to-analyze-default" "Ignore file paths and use the interface-files/files-to-analyze.edn."]
   ["-h" "--help" "Show this help and exit."]
   ])

(deftest files-to-analyze-test
  (testing "parse-opts"
    (is (= true
           (:files-to-analyze-default (:options (clojure.tools.cli/parse-opts ["--files-to-analyze-default"] cbs-to-graph-options))))))
  (testing "validate-args"
    (is (= "analyze"
           (:action (validate-args ["--files-to-analyze-default"])))))
  (testing "main"
    ;; Arrange
    (require '[clojure.java.shell :as shell])
    (shell/sh "mv" "interface-files/files-to-analyze.edn" "interface-files/files-to-analyze.edn.changed-while-testing")
    (shell/sh "mv" "src/looset_diagram_mvp/ui/initial_state.cljs" "src/looset_diagram_mvp/ui/initial_state.cljs.changed-while-testing")
    (spit "interface-files/files-to-analyze.edn" [{:indentation-level-to-search 0 :file-path "test/source-code-examples/cbs_to_graph.clj"}
                                                  {:indentation-level-to-search 0 :file-path "test/source-code-examples/code_blocks.clj"}])
    ;; Test
    (-main "--files-to-analyze-default")

    ;; Assert
    (is (= (slurp "src/looset_diagram_mvp/ui/initial_state.cljs")
           (slurp "test/file-results/files-to-analyze-test")))

    ;; Clean up
    (shell/sh "mv" "interface-files/files-to-analyze.edn.changed-while-testing" "interface-files/files-to-analyze.edn")
    (shell/sh "mv" "src/looset_diagram_mvp/ui/initial_state.cljs.changed-while-testing" "src/looset_diagram_mvp/ui/initial_state.cljs")))

(deftest choose-file-test
  (is (= 1
         (pprint (clojure.tools.cli/parse-opts ["." "--use-gitignore"] cbs-to-graph-options)) ;; Analyze looset-diagram-mvp itself
         (pprint (clojure.tools.cli/parse-opts ["../projects-example/Articulate/"] cbs-to-graph-options))
         (pprint (clojure.tools.cli/parse-opts ["../projects-example/Articulate/" "--file-extensions" "c|cpp"] cbs-to-graph-options)) ;; Analyze the given file extensions, e.g. c|cpp|asm
         (pprint (clojure.tools.cli/parse-opts ["../projects-example/mapbox-gl-draw/src" "../projects-example/mapbox-gl-draw/test"] cbs-to-graph-options)) ;; Analyze files only from these dirs
         (pprint (clojure.tools.cli/parse-opts ["../projects-example/mapbox-gl-draw/src" "../projects-example/mapbox-gl-draw/test" "--use-gitignore"] cbs-to-graph-options)) ;; It will analyze the whole git project
         (pprint (clojure.tools.cli/parse-opts ["gen-interface-files-to-analyze ../projects-example/Articulate/"] cbs-to-graph-options)) ;; Do not analyze, only spit in interface-files/files-to-analyze.edn
         (pprint (clojure.tools.cli/parse-opts ["gen-interface-files-to-analyze ../projects-example/Articulate/" --indentation-level-to-search 4] cbs-to-graph-options))
         (pprint (clojure.tools.cli/parse-opts ["--files-to-analyze-default"] cbs-to-graph-options)) ;; Ignore file paths and use the interface-files/files-to-analyze.edn
         (pprint (clojure.tools.cli/parse-opts ["--files-to-analyze" "interface-files/files-to-analyze.edn"] cbs-to-graph-options)) ;; Ignore file paths and use the given file to specify which files to analyze
         )))

(deftest gen-interface-file-test
  (-main "gen-interface-file" "../projects-example/draw-map-shape")
  )

(deftest use-gitignore-test
  (is (= true
         (:use-gitignore (:options (clojure.tools.cli/parse-opts ["--use-gitignore"] cbs-to-graph-options)))
         ))
  (is (= nil
         (:use-gitignore (:options (clojure.tools.cli/parse-opts [] cbs-to-graph-options)))
         ))
  (is (= ["."]
         (:arguments (clojure.tools.cli/parse-opts ["." "--use-gitignore"] cbs-to-graph-options))
         ))
  #_(is (= nil
         (print (validate-args ["." "--use-gitignore"]))
         ))
  )

(deftest file-path-argument-test
  (is (= nil
       (pprint (validate-args ["../projects-example/Articulate/"]))
       ))
  )

(deftest interface-files-test
  (is (= nil
        (pprint (clojure.tools.cli/parse-opts ["--files-to-analyze-default"] cbs-to-graph-options)) ;; Ignore file paths and use the interface-files/files-to-analyze.edn
        ))
  )


