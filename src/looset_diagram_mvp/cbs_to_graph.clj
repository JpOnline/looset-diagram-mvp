(ns looset-diagram-mvp.cbs-to-graph
  (:require
    [clojure.set]
    [looset-diagram-mvp.code-blocks :as code-blocks]
    [looset-diagram-mvp.core :as lexical-analyzer]
    [looset-diagram-mvp.util :as util]

    [clojure.test :refer :all]
    [clojure.pprint :refer [pprint]]
    ))

(defn file-info-with-code-blocks [{:keys [file-path] :as info}]
  (-> file-path
      slurp
      lexical-analyzer/generate-token-list
      (select-keys [:token-list :token-occurrencies])
      (merge info)
      code-blocks/identifier
      last
      (select-keys [:code-blocks :file-path])))

;; It's better to use with-file-path to avoid duplicated keys
(defn file-code-blocks-with-file-path [{:keys [file-path] :as info}]
  (->> info
      file-info-with-code-blocks
      :code-blocks
      (map (fn [[k v]] {(str file-path "<>" k) v}))
      (apply merge)
      (assoc {} :code-blocks)))

;; It's still a copy of merge-with, I need to change it accordanly.
#_(defn merge-with-key-changer
  "Like merge-with, but instead of changing the value, it changes the key."
  [f & maps]
  (when (some identity maps)
    (let [merge-entry (fn [m e]
                        (let [k (key e) v (val e)]
                          (if (contains? m k)
                            (assoc m k (f (get m k) v))
                            (assoc m k v))))
          merge2 (fn [m1 m2]
                   (reduce1 merge-entry (or m1 {}) (seq m2)))]
      (reduce1 merge2 maps))))

(defn path-last-part [path]
  (if (re-find #"^.*<>" path)
    (clojure.string/replace path #"^.*<>" "")
    (->> path clojure.string/reverse (re-find #"^[^/]*") clojure.string/reverse)
    ))

(defn filter-cb-identifiers [code-blocks]
  (let [cb-identifiers (-> code-blocks
                           keys
                           (->> (map path-last-part))
                           set
                           (conj "DUPLICATED KEY!!"))]
    (apply merge (map (fn [[k v]] {k (set (filter cb-identifiers v))}) code-blocks))))

(defn code-block-to-dot-syntax [[identifier references]]
  (let [sq #(str "\""%"\"")]
    (str (sq identifier)" -> {"(clojure.string/join " " (map sq references))"}")))

(defn from-file-list [cb-identifier-fn file-list]
  (->> file-list
       (map cb-identifier-fn)
       (map :code-blocks)
       ;; (apply (partial merge-with (constantly #{"DUPLICATED KEY!!"}))) ;; Use merge-with-key-changer instead?
       (apply (partial merge-with clojure.set/union))
       (filter-cb-identifiers)
       (map code-block-to-dot-syntax)
       (clojure.string/join "\n")))

(def from-file-list-no-path (partial from-file-list file-info-with-code-blocks))

(def from-file-list-with-path (partial from-file-list file-code-blocks-with-file-path))

(defn file-list->graph [file-list]
  (->> file-list
       (map file-code-blocks-with-file-path)
       (map :code-blocks)
       ;; (apply (partial merge-with (constantly #{"DUPLICATED KEY!!"}))) ;; Use merge-with-key-changer instead?
       (apply (partial merge-with clojure.set/union))
       (filter-cb-identifiers)))

(defn graph->dot-syntax [graph]
  (->> graph
       (map code-block-to-dot-syntax)
       (clojure.string/join "\n")))

(defn clean-file-path [graph]
  (let [del-less (comp clojure.string/reverse #(re-find #"^[^/]*" %) clojure.string/reverse)
        del-more #(if (re-find #"^.*<>" %) (clojure.string/replace % #"^.*<>" "") (del-less %))
        freqs (frequencies (map del-more (keys graph)))
        clean (fn [val [k v]] (if (> (freqs (del-more k)) 1)
                                (conj val {(del-less k) v})
                                (conj val {(del-more k) v})))]
    (reduce clean {} graph)))

(defn close-graph [graph path-to-close]
  (let [origins-to-replace (filter #(clojure.string/starts-with? (first %) path-to-close) graph)
        dests-to-replace (set (map path-last-part (keys origins-to-replace)))
        unified-dest (->> origins-to-replace vals (apply clojure.set/union))
        dest-replacer (fn [[k v]] (if (empty? (clojure.set/intersection dests-to-replace v))
                                    {k v}
                                    {k (set (conj (remove dests-to-replace v) (path-last-part path-to-close)))}))]
    (->> graph
         (remove (set origins-to-replace))
         (map dest-replacer)
         (apply merge)
         (#(conj % {path-to-close unified-dest}))
         filter-cb-identifiers)))

(defn clear-whitespaces
  "Deletes whitespaces after a new line character (\n)
  It is used to enable correct indentation in tests."
  [s]
  (clojure.string/replace s #"\n\s*" "\n"))

(comment
  (:file-path (file-info-with-code-blocks {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js"}))
  (file-code-blocks-with-file-path {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js"})
  (file-info-with-code-blocks {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js"})
  (-> {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js"}
    (file-info-with-code-blocks)
    :code-blocks)
  (-> [{:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js" }
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js" }]
       (file-list->graph)
       (close-graph "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js")
       (close-graph "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js")
       clean-file-path
       graph->dot-syntax
       ;; (#(with-out-str (pprint %)))
       (->> (spit "tmp.txt"))
       )
  (-> "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onStop"
      clojure.string/reverse
      (->> (re-find #"^[^>]*><[^/]*/"))
      clojure.string/reverse
      )
  )

(deftest from-file-list-test
  (is (=
       (clear-whitespaces
         "\"onTap\" -> {\"clickOnVertex\" \"clickOnFeature\" \"clickAnywhere\"}
         \"onMouseOut\" -> {\"fireUpdate\"}
         \"startOnActiveFeature\" -> {\"stopExtendedInteractions\"}
         \"onDrag\" -> {\"dragMove\" \"whileBoxSelect\"}
         \"fireActionable\" -> {}
         \"dragMove\" -> {}
         \"onMouseMove\" -> {\"stopExtendedInteractions\"}
         \"fireUpdate\" -> {}
         \"clickOnVertex\" -> {}
         \"onKeyUp\" -> {}
         \"toDisplayFeatures\" -> {\"fireActionable\"}
         \"onMouseDown\" -> {\"startOnActiveFeature\" \"startBoxSelect\"}
         \"onSetup\" -> {\"fireActionable\"}
         \"startBoxSelect\" -> {\"stopExtendedInteractions\"}
         \"stopExtendedInteractions\" -> {}
         \"clickOnFeature\" -> {\"stopExtendedInteractions\"}
         \"getUniqueIds\" -> {}
         \"clickAnywhere\" -> {\"stopExtendedInteractions\"}
         \"onStop\" -> {}
         \"onMouseUp\" -> {\"fireUpdate\" \"stopExtendedInteractions\" \"getUniqueIds\"}
         \"onCombineFeatures\" -> {\"fireActionable\"}
         \"whileBoxSelect\" -> {}
         \"onTrash\" -> {\"fireActionable\"}
         \"onTouchStart\" -> {\"startOnActiveFeature\"}
         \"onUncombineFeatures\" -> {\"fireActionable\"}")
       (with-out-str
         (-> [{:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js" }
              {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js" }]
             from-file-list-no-path
             print))))
  (is (= (clear-whitespaces
           "\"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onStop\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>whileBoxSelect\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onTrash\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onStop\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onSetup\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>clickAnywhere\" -> {\"stopExtendedInteractions\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>fireUpdate\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onKeyUp\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onCombineFeatures\" -> {\"fireActionable\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onTrash\" -> {\"fireActionable\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onTouchStart\" -> {\"startOnActiveFeature\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>startBoxSelect\" -> {\"stopExtendedInteractions\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onUncombineFeatures\" -> {\"fireActionable\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onTap\" -> {\"clickOnVertex\" \"clickAnywhere\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onSetup\" -> {\"fireActionable\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>toDisplayFeatures\" -> {\"fireActionable\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onMouseUp\" -> {\"fireUpdate\" \"stopExtendedInteractions\" \"getUniqueIds\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>stopExtendedInteractions\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>dragMove\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>clickAnywhere\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>startOnActiveFeature\" -> {\"stopExtendedInteractions\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>clickOnFeature\" -> {\"stopExtendedInteractions\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>clickOnVertex\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onDrag\" -> {\"dragMove\" \"whileBoxSelect\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>getUniqueIds\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onTap\" -> {\"clickOnVertex\" \"clickOnFeature\" \"clickAnywhere\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onMouseMove\" -> {\"stopExtendedInteractions\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>fireActionable\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>toDisplayFeatures\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onMouseDown\" -> {\"startOnActiveFeature\" \"startBoxSelect\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onMouseMove\" -> {}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onMouseOut\" -> {\"fireUpdate\"}
           \"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>clickOnVertex\" -> {}")
       (with-out-str
         (-> [{:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js" }
              {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js" }]
             from-file-list-with-path
             print))))
  (is (= {"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onStop"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>whileBoxSelect"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onTrash"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onStop"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onSetup"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>clickAnywhere"
          #{"stopExtendedInteractions"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>fireUpdate"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onKeyUp"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onCombineFeatures"
          #{"fireActionable"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onTrash"
          #{"fireActionable"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onTouchStart"
          #{"startOnActiveFeature"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>startBoxSelect"
          #{"stopExtendedInteractions"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onUncombineFeatures"
          #{"fireActionable"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onTap"
          #{"clickOnVertex" "clickAnywhere"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onSetup"
          #{"fireActionable"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>toDisplayFeatures"
          #{"fireActionable"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onMouseUp"
          #{"fireUpdate" "stopExtendedInteractions" "getUniqueIds"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>stopExtendedInteractions"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>dragMove"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>clickAnywhere"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>startOnActiveFeature"
          #{"stopExtendedInteractions"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>clickOnFeature"
          #{"stopExtendedInteractions"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>clickOnVertex"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onDrag"
          #{"dragMove" "whileBoxSelect"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>getUniqueIds"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onTap"
          #{"clickOnVertex" "clickOnFeature" "clickAnywhere"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onMouseMove"
          #{"stopExtendedInteractions"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>fireActionable"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>toDisplayFeatures"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onMouseDown"
          #{"startOnActiveFeature" "startBoxSelect"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onMouseMove"
          #{},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onMouseOut"
          #{"fireUpdate"},
          "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>clickOnVertex"
          #{}}
         (->> [{:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js" }
               {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js" }]
              (file-list->graph))))
  (is (= {"draw_polygon.js<>onStop" #{},
          "simple_select.js<>onStop" #{},
          "onTouchStart" #{"startOnActiveFeature"}}
         (clean-file-path {"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onStop"
                           #{},
                           "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onStop"
                           #{},
                           "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onTouchStart"
                           #{"startOnActiveFeature"}})))
  (is (= {"onStop" #{},
          "simple_select.js" #{"startOnActiveFeature"},
          }
         (clean-file-path {"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onStop"
                           #{},
                           "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js"
                           #{"startOnActiveFeature"}})
         )))

(deftest close-graph-test
  (is (= {"/src/fa.js" #{"cc"}
          "/src/fb.js<>cc" #{}}
         (-> {"/src/fa.js<>ca" #{"cc"}
              "/src/fa.js<>cb" #{"cc"}
              "/src/fb.js<>cc" #{}}
             (close-graph "/src/fa.js"))))
  (is (= {"/src/fa.js" #{"cc"}
          "/src/fb.js<>cc" #{}}
         (-> {"/src/fa.js<>ca" #{"cc"}
              "/src/fa.js<>cb" #{"cc"}
              "/src/fa.js<>cd" #{"cb"}
              "/src/fb.js<>cc" #{}}
             (close-graph "/src/fa.js"))))
  (is (= {"/src/fa.js" #{"cc"}
          "/src/fb.js<>cc" #{"fa.js"}}
         (-> {"/src/fa.js<>ca" #{"cc"}
              "/src/fa.js<>cb" #{"cc"}
              "/src/fa.js<>cd" #{"cb"}
              "/src/fb.js<>cc" #{"cb"}}
             (close-graph "/src/fa.js")
             ;; clean-file-path
             ;; graph->dot-syntax
             ;; print
             ))))
