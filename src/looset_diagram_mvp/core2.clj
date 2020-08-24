(ns looset-diagram-mvp.core2
  (:require

    [clojure.test :refer :all]
    [clojure.pprint :refer [pprint]]
    ))

(defn get-pred
  "Returns the first element of coll that satisfy the predicate f."
  [f coll]
  (some #(if (f %) %) coll))

(declare lexical-analyzer)
(declare update-position)
(declare record-token)
(declare accumulate-token)

(def token-finite-automata
  {:first-char [
                {:regex #"[_a-zA-Z]" :next-token-state :word :action lexical-analyzer}
                ]
   :word [{:regex #"[\s\n()\[\]{}<>]" :next-token-state :first-char :action (comp update-position record-token)}
          {:regex #"[0-9\-_a-zA-Z]" :next-token-state :word :action (comp update-position accumulate-token)}
          ;; {:regex #"\W" :next-token-state :symbol}
          ]
   })

(defn handle-exception [{:keys [token-state char] :as state}]
  (if (not (nil? token-state))
    state
    (-> state
        (update :errors conj (select-keys state [:position :char :token-state]))
        (assoc :token-state :first-char)
        (assoc :action lexical-analyzer)
        )))

(defn record-token [{:keys [token] :as state}]
  (-> state
      (update-in [:token-occurrencies token] #(if (nil? %) 1 (inc %)))))

(defn accumulate-token [{:keys [char] :as state}]
  (-> state
      (update :token str char)
      )
  )

(declare goto-next-state)
(declare initialize-state)

(defn lexical-analyzer
  ([state char] (lexical-analyzer (assoc state :char char)))
  ([{:keys [action] :as state}]
   (if (nil? (:position state))
     (lexical-analyzer (initialize-state state))
     (-> state
         goto-next-state
         action
         ;; ((comp goto-next-state handle-exception))
         handle-exception
         ;; (#(do (println) (pprint (select-keys % [:position])) %))
         ))))

(defn initialize-state [code-string]
  {:position [1 1]
   :char (first code-string)
   :action (comp pprint)
   :token-state :first-char}
  )

(defn goto-next-state [{:keys [token-state char] :as state}]
  (let [transitions (token-state token-finite-automata)
        {:keys [next-token-state action]} (get-pred (fn [{:keys [regex]}] (re-find regex (str char))) transitions)
        ]
  (-> state
      (assoc :token-state next-token-state)
      (assoc :action action)
      )))

(defn update-position [{[lin column] :position char :char :as state}]
  (-> state
      (assoc :position (if (= \newline char) [(inc lin) 1] [lin (inc column)]))
      ))

(deftest lexical-analyzer-test
  (reduce lexical-analyzer (initialize-state "i") "im")
  )
