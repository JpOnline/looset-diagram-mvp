(ns looset-diagram-mvp.core
  (:require

    [clojure.test :refer :all]
    ))

(declare record-token)
(declare accumulate-token)

(defn start-token-record [{:keys [char] :as state}]
  (merge state {:token char})
  )

(defn get-pred
  "Returns the first element of coll that satisfy the predicate f."
  [f coll]
  (some #(if (f %) %) coll))

(def token-finite-automata
  {:first-char [{:regex #"[0-9]" :next-state :number}
                {:regex #"[_a-zA-Z]" :next-state :word :action start-token-record}
                {:regex #"\s"}
                ]
   :number [{:regex #"[\s\n()\[\]{}<>]" :next-state :first-char}]
   :word [{:regex #"[\s\n()\[\]{}<>]" :next-state :first-char :action record-token}
          {:regex #"[0-9\-_a-zA-Z]" :next-state :word :action accumulate-token}
          ]})

(defn handle-exception [next-state state char]
  (if (not (nil? next-state))
    [state next-state]
    [(update state :errors conj {:position (:position state)
                                  :char char
                                  :state (:state state)})
     :first-char]))

;; Probably changing state to token-state and big-state to state would be better.
(defn lexical-analyzer [{:keys [state] :as big-state} char]
  (let [transitions (state token-finite-automata)
        {:keys [next-state action]} (get-pred (fn [{:keys [regex]}] (re-find regex (str char))) transitions)
        [big-state next-state] (handle-exception next-state big-state char)
        ]
  (-> big-state
      (update :position (fn [[lin column]] (if (= \newline char) [(inc lin) 1] [lin (inc column)])))
      (assoc :state next-state)
      (assoc :char char)
      )))

(defn file-code-blocks
  [{:keys [file-path options]
    :or {options {:indentation-level-to-search 0}}}]
  (slurp file-path)
  )

(deftest foo-test
  (is (= 2 (file-code-blocks {:file-path "jp"})))
  (re-find #"." (str (nth (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")
                               38
                               )))
  (re-find #"[a-zA-Z]" "]")
  (update {:a '({:b 5})} :a conj {:b 3})
  (pprint (reduce lexical-analyzer
          {:position [1 1]
             :char "i"
             :state :word
             :token-occurrencies {}}
          (take 40 (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js"))))
  )

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
