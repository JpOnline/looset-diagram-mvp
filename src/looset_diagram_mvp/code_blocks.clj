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
         (#{:center :left :right} (indentation-position big-state))
         (#{:line-comment :new-line} (token :category)))
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

    (and (= :initial-state state)
         (#{:left} (indentation-position big-state))
         (#{:space} (token :category)))
    (-> big-state
        (update :indentation-level inc))

    (and (= :initial-state state)
         (#{:left} (indentation-position big-state))
         (#{:number :symbol :word} (token :category)))
    (-> big-state
        (assoc :state :ignore-line))

    (and (= :cb-first-line state)
         (= :word (token :category)))
    (-> big-state
        (update-cb-line-id token))

    (and (= :cb-first-line state)
         (#{:line-comment :new-line} (token :category)))
    (-> big-state
        (assoc :indentation-level 0)
        (assoc :state :cb-second-line))

    (and (= :cb-first-line state)
         (#{:space :symbol :number} (token :category)))
    big-state

    (and (= :cb-second-line state)
         (#{:center} (indentation-position big-state))
         (= :word (token :category)))
    (-> big-state
        (assoc :state :cb-first-line)
        (update-cb-line-id token))

    (and (= :cb-second-line state)
         (#{:center} (indentation-position big-state))
         (#{:symbol :number} (token :category)))
    (-> big-state
        (assoc :state :cb-first-line)
        (update-cb-line-id token))

    (and (= :cb-second-line state)
         (#{:right} (indentation-position big-state))
         (= :word (token :category)))
    (-> big-state
        (assoc :state :inside-cb)
        (update-words-in-cb token))

    (and (= :cb-second-line state)
         (#{:left} (indentation-position big-state))
         (= :word (token :category)))
    (-> big-state
        (assoc :state :ignore-line))

    (and (= :cb-second-line state)
         (#{:left} (indentation-position big-state))
         (#{:number :symbol :word} (token :category)))
    (-> big-state
        (assoc :state :ignore-line))

    (and (= :cb-second-line state)
         (#{:left} (indentation-position big-state))
         (#{:space} (token :category)))
    (-> big-state
        (update :indentation-level inc))

    (and (= :cb-second-line state)
         (#{:line-comment :new-line} (token :category)))
    (-> big-state
        (assoc :indentation-level 0)
        (assoc :state :cb-second-line-with-blank-line))

    (and (= :cb-second-line state)
         (#{:center :right} (indentation-position big-state))
         (= :space (token :category)))
    (-> big-state
        (update :indentation-level inc))

    (and (= :cb-second-line-with-blank-line state)
         (= :center (indentation-position big-state))
         (= :word (token :category)))
    (-> big-state
        (assoc :state :cb-first-line)
        (dissoc :cb-line-id)
        (update-cb-line-id token))

    (and (= :cb-second-line-with-blank-line state)
         (= :center (indentation-position big-state))
         (= :space (token :category)))
    (-> big-state
        (update :indentation-level inc))

    (and (= :cb-second-line-with-blank-line state)
         (= :right (indentation-position big-state))
         (= :word (token :category)))
    (-> big-state
        (assoc :state :inside-cb)
        (update-words-in-cb token))

    (and (= :cb-second-line-with-blank-line state)
         (= :right (indentation-position big-state))
         (#{:line-comment :new-line} (token :category)))
    (-> big-state
        (assoc :indentation-level 0))

    (and (= :cb-second-line-with-blank-line state)
         (= :right (indentation-position big-state))
         (= :space (token :category)))
    (-> big-state
        (update :indentation-level inc))

    (and (= :cb-second-line-with-blank-line state)
         (#{:left} (indentation-position big-state))
         (#{:space} (token :category)))
    (-> big-state
        (update :indentation-level inc))

    (and (= :inside-cb state)
         (#{:center :left} (indentation-position big-state))
         (#{:word :symbol :number} (token :category)))
    (-> big-state
        (assoc :state :initial-state)
        (update-words-in-cb token))

    (and (= :inside-cb state)
         (= :word (token :category)))
    (-> big-state
        (update-words-in-cb token))

    (and (= :inside-cb state)
         (#{:line-comment :new-line} (token :category)))
    (-> big-state
        (assoc :state :inside-cb-new-line)
        (assoc :indentation-level 0))

    (and (= :inside-cb state)
         (#{:space :symbol :number} (token :category)))
    big-state

    (and (= :inside-cb-new-line state)
         (#{:center :left} (indentation-position big-state))
         (#{:word :symbol :number} (token :category)))
    (-> big-state
        (assoc :state :cb-last-line)
        (record-code-block))

    (and (= :inside-cb-new-line state)
         (#{:right} (indentation-position big-state))
         (#{:word} (token :category)))
    (-> big-state
        (assoc :state :inside-cb)
        (update-words-in-cb token))

    (and (= :inside-cb-new-line state)
         (#{:right} (indentation-position big-state))
         (#{:symbol :number} (token :category)))
    (-> big-state
        (assoc :state :inside-cb)
        (update-words-in-cb token))

    (and (= :inside-cb-new-line state)
         (#{:space} (token :category)))
    (-> big-state
        (update :indentation-level inc))

    (and (= :inside-cb-new-line state)
         (#{:center :left :right} (indentation-position big-state))
         (#{:line-comment :new-line} (token :category)))
    (-> big-state
        (assoc :indentation-level 0))

    (and (= :ignore-line state)
         (#{:center :left :right} (indentation-position big-state))
         (#{:line-comment :new-line} (token :category)))
    (-> big-state
        (assoc :state :initial-state)
        (assoc :indentation-level 0))

    (and (= :ignore-line state)
         (#{:center :left :right} (indentation-position big-state))
         (#{:number :symbol :space :word} (token :category)))
    big-state

    (and (= :cb-last-line state)
         (#{:line-comment :new-line} (token :category)))
    (-> big-state
        (assoc :state :initial-state)
        (assoc :indentation-level 0))

    (and (= :cb-last-line state))
    big-state

    :else
    (-> big-state
        (update :errors conj (-> big-state
                                 (dissoc :token-occurrencies)
                                 (dissoc :errors))))
    ))

(defn identifier
  ([{:keys [token-list] :as big-state}]
   (identifier token-list (merge {:state :initial-state :indentation-level-to-search 0 :indentation-level 0}
                                 (dissoc big-state :token-list))))
  ([[token & token-list] big-state]
   (when token
     (let [big-state (process-token (assoc big-state :token token))
           ;; tail (lazy-seq (identifier token-list big-state))
           tail (when (not (:errors big-state)) (lazy-seq (identifier token-list big-state)))]
       (cons (-> big-state (dissoc :token-list :token-occurrencies))
             tail)
       #_(str (:state big-state) (apply str tail))))))

(comment
  (process-token {:state :cb-first-line :indentation-level-to-search 0 :indentation-level 2 :token {:token "\n", :category :new-line, :position [141 27]} :cb-line-id "export"})
  (pprint (identifier {:token-list {:token "isEqual", :category :word, :position  [1 8]}}
                                  {:token "const", :category :word, :position [7 31]}))
   (-> (slurp "/home/smokeonline/projects/mapbox-gl-draw/src/modes/draw_polygon.js")
       lexical-analyzer/generate-token-list
       (select-keys [:token-list :token-occurrencies])
       identifier
       reverse
       (nth 3)
       ;; :code-blocks
       ;; keys
       pprint
       #_set)
  )

(deftest identifier-test
  (is (= "im"
         (let [initial-value (-> "im import"
                                 (lexical-analyzer/generate-token-list)
                                 (select-keys [:token-list :token-occurrencies]))]
           (:cb-line-id (last (identifier initial-value))))
         ))
  (is (= "import"
         (let [initial-value (-> "im im import"
                                 (lexical-analyzer/generate-token-list)
                                 (select-keys [:token-list :token-occurrencies]))]
           (:cb-line-id (last (identifier initial-value))))
         ))
  (is (= "import"
         (-> "im im import"
             lexical-analyzer/generate-token-list
             (select-keys [:token-list :token-occurrencies])
             identifier
             last
             :cb-line-id
             ;; pprint
             )))
  (is (= {"export" #{"inside"}}
         (-> "export default function(ctx, api) {\n\n  inside\n\n"
             lexical-analyzer/generate-token-list
             (select-keys [:token-list :token-occurrencies])
             identifier
             last
             :code-blocks)))
  (is (= {"export" #{"inside"}}
         (->  "export default function(ctx, api)  \n  inside\n\n"
             lexical-analyzer/generate-token-list
             (select-keys [:token-list :token-occurrencies])
             identifier
             last
             :code-blocks)))
  (is (= {"export" #{"inside"}}
         (->  "export default function(ctx, api)\n{\n  inside\n\n"
             lexical-analyzer/generate-token-list
             (select-keys [:token-list :token-occurrencies])
             identifier
             last
             :code-blocks)))
  (is (= ["featureTypes" "export"]
         (-> (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")
             lexical-analyzer/generate-token-list
             (select-keys [:token-list :token-occurrencies])
             identifier
             last
             :code-blocks
             keys)))
  (is (= #{"getFeatureIdsAt" "getSelectedIds" "getSelected" "getSelectedPoints" "set" "add" "get" "getAll" "delete" "deleteAll" "changeMode" "getMode" "trash" "combineFeatures" "uncombineFeatures" "setFeatureProperty"}
         (-> (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")
             lexical-analyzer/generate-token-list
             (select-keys [:token-list :token-occurrencies])
             (merge {:indentation-level-to-search 2})
             identifier
             last
             :code-blocks
             keys
             set)))
  (is (= #{"onSetup" "fireUpdate" "fireActionable" "getUniqueIds" "stopExtendedInteractions" "onStop" "onMouseMove" "onMouseOut" "onTap" "clickAnywhere" "clickOnVertex" "startOnActiveFeature" "clickOnFeature" "onMouseDown" "startBoxSelect" "onTouchStart" "onDrag" "whileBoxSelect" "dragMove" "onMouseUp" "toDisplayFeatures" "onTrash" "onCombineFeatures" "onUncombineFeatures"}
         (-> (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js")
             lexical-analyzer/generate-token-list
             (select-keys [:token-list :token-occurrencies])
             (merge {:indentation-level-to-search 0})
             identifier
             last
             :code-blocks
             keys
             set
             )))
  )
