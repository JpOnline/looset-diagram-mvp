(ns looset-diagram-mvp.core
  (:require

    [clojure.test :refer :all]
    [clojure.pprint :refer [pprint]]
    ))

(defn get-pred
  "Returns the first element of coll that satisfy the predicate f."
  [f coll]
  (some #(if (f %) %) coll))

(def token-finite-automata
  {:first-char [{:regex #"[0-9]" :next-state :number}
                {:regex #"[_a-zA-Z]" :next-state :word}
                {:regex #"\n" :next-state :new-line}
                {:regex #"\s" :next-state :space}
                {:regex #"\W" :next-state :symbol}
                ]
   :new-line [{:regex #"[\s\S]" :next-state :first-char}]
   :word [{:regex #"[\s\n()\[\]{}<>]" :next-state :first-char}
          {:regex #"[0-9\-_a-zA-Z]" :next-state :word}
          {:regex #"\W" :next-state :symbol}]
   :symbol [{:regex #"[\s\S]" :next-state :first-char}]
   :space [{:regex #"[\S\s]" :next-state :first-char}]
   :number [{:regex #"[\s\n()\[\]{}<>]" :next-state :first-char}]
   })

(defn handle-exception [{:keys [next-char next-state] :as big-state}]
  (cond
    (not (nil? next-state))
    big-state

    ;; The next-char is nil when is the end of the file
    (nil? next-char)
    big-state

    :else
    (-> big-state
        (assoc :next-state :first-char)
        (update :errors conj {:position (:position big-state)
                                  :char next-char
                                  :state (:state big-state)}))))

(defn compute-token [{:keys [state token char] :as big-state} next-state]
  (cond
    (and (= state next-state) (nil? token)) (assoc big-state :token (str char))
    (and (= state next-state) (not (nil? token))) (update big-state :token str char)
    (and (not= state next-state) (nil? token))
      (-> big-state
          (update-in [:token-occurrencies (str char)] #(if (nil? %) 1 (inc %))))
    (and (not= state next-state) (not (nil? token)))
      (-> big-state
          (update-in [:token-occurrencies (str token char)] #(if (nil? %) 1 (inc %)))
          (dissoc :token)
          )))

(defn process-char [{:keys [next-char next-state] :as big-state}]
  (-> big-state
      (update :position (fn [[lin column]] (if (= \newline next-char) [(inc lin) 1] [lin (inc column)])))
      (update :counter #(if (nil? %) 0 (inc %)))
      (compute-token next-state)
      (assoc :state next-state)
      (assoc :char next-char))
  )

(defn initialize-state [code-to-process]
  {:position [1 1]
   :char (first code-to-process)
   :state :first-char
   :token-occurrencies {}})

(defn lexical-analyzer [{:keys [state counter] :as big-state} code-to-process]
  ;; (println)
  ;; (pprint big-state)
  (let [char (first code-to-process)
        transitions (state token-finite-automata)
        {:keys [next-state]} (get-pred (fn [{:keys [regex]}] (re-find regex (str char))) transitions)
        {:keys [next-state] :as big-state} (-> big-state
                                               (assoc :next-char char)
                                               (assoc :next-state next-state)
                                               (handle-exception))]
  (cond
    ;; Only to avoid infinity loop
    ;; (= 1000 counter)
    ;; big-state

    (nil? char)
    (process-char big-state)

    (= next-state :first-char)
    (-> big-state
        (update :counter #(if (nil? %) 0 (inc %)))
        (assoc :state next-state)
        (recur code-to-process))

    :else
    (-> big-state
        (process-char)
        (recur (rest code-to-process))
        ))))

(defn file-code-blocks
  [{:keys [file-path options]
    :or {options {:indentation-level-to-search 0}}}]
  (slurp file-path)
  )

(deftest foo-test
  (re-find #"." (str (nth (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")
                               38
                               )))
  (re-find #"\n" "\n")
  (update {:a '({:b 5})} :a conj {:b 3})
  (pprint (reduce lexical-analyzer
          {:position [1 1]
             :char "i"
             :state :first-char
             :token-occurrencies {}}
          "m 'lodash.isequal';"
          #_(drop 5 (take 8 (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")))))
  (pprint (update (lexical-analyzer
                    (initialize-state "i")
                    ;; "import isEqual from 'lodash.isequal';\nimport"
                    (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")
                    )
                  :token-occurrencies #(sort-by val %)))
                  ;; (take 4 (reverse (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")))  
  )

(deftest lexical-analyzer-test
  (let [file (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")]
    (is (= 12
           (-> (initialize-state file)
               (lexical-analyzer file)
               :token-occurrencies
               (get "import" 0)
               ))))
  (let [file (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")]
    (is (= 35
           (-> (initialize-state file)
               (lexical-analyzer file)
               :token-occurrencies
               (get "api" 0)
               )))))

(deftest file-code-blocks
  (is (= (file-code-blocks {:file-list ["../test/source-code-examples/api.js"]
                            :options {:indentation-level-to-search 2}})
         ["getFeatureIdsAt"
          "getSelectedIds"
          "getSelected"
          "getSelectedPoints"
          "set"
          "add"
          "get"
          "getAll"
          "delete"
          "deleteAll"
          "changeMode"
          "getMode"
          "trash"
          "combineFeatures"
          "uncombineFeatures"
          "setFeatureProperty"]))
  )

