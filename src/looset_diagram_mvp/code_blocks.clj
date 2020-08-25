(ns looset-diagram-mvp.code-blocks
  (:require
    [looset-diagram-mvp.util :as util]
    [looset-diagram-mvp.core :as lexical-analyzer]

    [clojure.test :refer :all]
    [clojure.pprint :refer [pprint]]
    ))

(defn indentation-position [{:keys [indentation-level-to-search indentation-level]}]
  (cond
    (< indentation-level indentation-level-to-search) :left
    (= indentation-level indentation-level-to-search) :center
    (> indentation-level indentation-level-to-search) :right))

(defn update-cb-line-id [{:keys [token-occurrencies cb-line-id] :as big-state} {:keys [token]}]
  (if (nil? cb-line-id)
    (assoc big-state :cb-line-id token)
    (assoc big-state :cb-line-id (if (< (token-occurrencies token)
                                        (token-occurrencies cb-line-id))
                                   token
                                   cb-line-id))))

(defn update-words-in-cb [{:keys [words-in-cb] :as big-state} {:keys [token]}]
  (if (nil? words-in-cb)
    (assoc big-state :words-in-cb #{token})
    (update big-state :words-in-cb conj token)))

(defn record-code-block [{:keys [words-in-cb cb-line-id code-blocks] :as big-state}]
  (let [duplicated? (when code-blocks (code-blocks cb-line-id))
        big-state (-> big-state (dissoc :words-in-cb) (dissoc :cb-line-id))
        cb-line-id (if duplicated? (str cb-line-id "-e") cb-line-id)] ;; Append extra string to duplicated name.
    (if (empty? words-in-cb)
      big-state
      (-> big-state
        (update :code-blocks merge {cb-line-id words-in-cb})
        (as-> $ (if (not duplicated?)
                $
                (update $ :errors conj {:duplicated-code-block cb-line-id})))))))

(defn process-token [{:keys [state token] :as big-state}]
  (cond
    (and (= :initial-state state)
         (= :center (indentation-position big-state))
         (= :word (token :category)))
    (-> big-state
        (assoc :state :cb-first-line)
        (update-cb-line-id token))

    (and (= :initial-state state)
         (= :center (indentation-position big-state))
         (= :new-line (token :category)))
    (-> big-state
        (assoc :indentation-level 0))

    (and (= :initial-state state)
         (= :center (indentation-position big-state))
         (= :space (token :category)))
    (update big-state :indentation-level inc)

    (and (= :initial-state state)
         (= :center (indentation-position big-state))
         (#{:number symbol} (token :category)))
    (assoc big-state :state :cb-first-line)

    ;; (and (= :initial-state state)
    ;;      (#{:left :right} (indentation-position big-state)))
    ;; (-> big-state
    ;;     (assoc :state :ignore-line))

    (and (= :cb-first-line state)
         (= :word (token :category)))
    (-> big-state
        (update-cb-line-id token))

    (and (= :cb-first-line state)
         (= :new-line (token :category)))
    (-> big-state
        (assoc :indentation-level 0)
        (assoc :state :cb-new-internal-line))

    (and (= :cb-first-line state)
         (#{:space :symbol :number} (token :category)))
    big-state

    (and (= :cb-new-internal-line state)
         (#{:center :right} (indentation-position big-state))
         (= :word (token :category)))
    (-> big-state
        (assoc :state :inside-cb)
        (update-words-in-cb token))

    (and (= :cb-new-internal-line state)
         (= :new-line (token :category)))
    (-> big-state
        (assoc :state :initial-state)
        (assoc :indentation-level 0)
        (record-code-block))

    (and (= :cb-new-internal-line state)
         (#{:center :right} (indentation-position big-state))
         (= :space (token :category)))
    (-> big-state
        (update :indentation-level inc))

    (and (= :inside-cb state)
         (= :word (token :category)))
    (-> big-state
        (update-words-in-cb token))

    (and (= :inside-cb state)
         (= :new-line (token :category)))
    (-> big-state
        (assoc :state :cb-new-internal-line)
        (assoc :indentation-level 0))

    (and (= :inside-cb state)
         (#{:space :symbol :number} (token :category)))
    big-state

    (and (= :cb-new-internal-line state)
         (= :new-line (token :category)))
    (-> big-state
        (dissoc :cb-line-id)
        (assoc :indentation-level 0)
        (assoc :state :initial-state))

    ;; (and (= :cb-new-internal-line state)
    ;;      (= :space (token :category)))


    :else
    (-> big-state
        (update :errors conj (-> big-state
                                 (dissoc :token-occurrencies)
                                 (dissoc :errors))))
    ))

(defn code-blocks-identifier
  ([{:keys [token-list] :as big-state}]
   (code-blocks-identifier token-list (merge {:state :initial-state :indentation-level-to-search 0 :indentation-level 0}
                                             (dissoc big-state :token-list))))
  ([[token & token-list] big-state]
   (when token
     (let [big-state (process-token (assoc big-state :token token))
           tail (lazy-seq (code-blocks-identifier token-list big-state))]
       (cons (-> big-state (dissoc :token-list :token-occurrencies))
             tail)
       #_(str (:state big-state) (apply str tail))))))

(deftest experimentation-test
  (process-token {:state :c, :token  {:token "isEqual", :category :word, :position  [1 8]}})
  (pprint (code-blocks-identifier [{:token "isEqual", :category :word, :position  [1 8]}
                           {:token "const", :category :word, :position [7 31]}]))
  (-> (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")
      (->> (take 580))
      (concat "\n\n")
      lexical-analyzer/generate-token-list
      (select-keys [:token-list :token-occurrencies])
      code-blocks-identifier
      reverse
      (->> (take 5))
      ;; last
      pprint
      )
  )

(deftest code-blocks-identifier-test
  (is (= "im"
         (let [initial-value (-> "im import"
                                 (lexical-analyzer/generate-token-list)
                                 (select-keys [:token-list :token-occurrencies]))]
           (:cb-line-id (last (code-blocks-identifier initial-value))))
         ))
  (is (= "import"
         (let [initial-value (-> "im im import"
                                 (lexical-analyzer/generate-token-list)
                                 (select-keys [:token-list :token-occurrencies]))]
           (:cb-line-id (last (code-blocks-identifier initial-value))))
         ))
  (is (= {"x" #{"import" "y"}}
         (-> "import x\nimport y\n\n"
             lexical-analyzer/generate-token-list
             (select-keys [:token-list :token-occurrencies])
             code-blocks-identifier
             last
             :code-blocks)))
  (is (= {"export" #{"inside"}}
         (-> "export default function(ctx, api) {\n\n  inside\n\n"
             lexical-analyzer/generate-token-list
             (select-keys [:token-list :token-occurrencies])
             code-blocks-identifier
             last
             :code-blocks)))
  )
