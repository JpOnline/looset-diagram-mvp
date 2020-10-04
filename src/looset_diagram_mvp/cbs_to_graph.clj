(ns looset-diagram-mvp.cbs-to-graph
  (:require
    [looset-diagram-mvp.code-blocks :as code-blocks]
    [looset-diagram-mvp.core :as lexical-analyzer]

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

(defn file-list->graph [file-list]
  (->> file-list
       (map file-code-blocks-with-file-path)
       (map :code-blocks)
       ;; (apply (partial merge-with (constantly #{"DUPLICATED KEY!!"}))) ;; Use merge-with-key-changer instead?
       (apply (partial merge-with clojure.set/union))
       (filter-cb-identifiers)))

(defn -main []
  (let [files-to-analyze (read-string (slurp "interface-files/files-to-analyze.edn"))
        files-path (mapv :file-path (read-string (slurp "interface-files/files-to-analyze.edn")))
        closed-dirs (read-string (slurp "interface-files/closed-dirs.edn"))
        closed-paths (-> (concat files-path closed-dirs)
                           (zipmap (repeat true)))]
    (-> files-to-analyze
        (file-list->graph)
        (->> (assoc-in {} [:domain :graph]))
        (assoc-in [:ui :closed-dirs] closed-paths)
        (->> (str "(ns looset-diagram-mvp.ui.initial-state)\n\n(def initial-state\n  "))
        (str ")")
        (->> (spit "src/looset_diagram_mvp/ui/initial_state.cljs"))
        )))

(comment
  (read-string (slurp "/home/smokeonline/projects/looset/looset-diagram-mvp/tmp.txt"))
  (zipmap ["x" "y"] (repeat true))
  (spit "src/looset_diagram_mvp/ui/i.cljs" (str "(ns looset-diagram-mvp.ui.initial-state)\n\n(def initial-state\n  " {:t true} ")"))
  (-> (slurp "/home/smokeonline/projects/looset/looset-diagram-mvp/closed-dirs.edn")
      read-string
      (zipmap (repeat true))
      pprint
      )
  (-> (read-string (slurp "/home/smokeonline/projects/looset/looset-diagram-mvp/files-to-analyze.edn"))
       (file-list->graph)
       (->> (assoc-in {} [:domain :graph]))
       ;; pprint
       (assoc-in [:ui :closed-dirs] {
                                     "src/Articulate.Web/App_Plugins/Articulate/BackOffice/ArticulateThemes/delete.controller.js" true
                                     "src/Articulate.Web/config/grid.editors.config.js" true
                                     "src/Articulate.Web/media" true
                                     "src" true
                                     })
       ;; (assoc-in [:ui :project-link :text] "See mapbox-gl-draw on Github")
       ;; (assoc-in [:ui :project-link :href] "https://github.com/mapbox/mapbox-gl-draw/tree/897a8a8cb9d035ef1e8ec1f11de6766df89db76d/src")
       ;; (->> (spit "tmp.txt"))
       )
  )

(deftest from-file-list-test
  (is (= {"test/source-code-examples/draw_polygon.js<>onStop"
          #{},
          "test/source-code-examples/simple_select.js<>whileBoxSelect"
          #{},
          "test/source-code-examples/draw_polygon.js<>onTrash"
          #{},
          "test/source-code-examples/simple_select.js<>onStop"
          #{},
          "test/source-code-examples/draw_polygon.js<>onSetup"
          #{},
          "test/source-code-examples/simple_select.js<>clickAnywhere"
          #{"stopExtendedInteractions"},
          "test/source-code-examples/simple_select.js<>fireUpdate"
          #{},
          "test/source-code-examples/draw_polygon.js<>onKeyUp"
          #{},
          "test/source-code-examples/simple_select.js<>onCombineFeatures"
          #{"fireActionable"},
          "test/source-code-examples/simple_select.js<>onTrash"
          #{"fireActionable"},
          "test/source-code-examples/simple_select.js<>onTouchStart"
          #{"startOnActiveFeature"},
          "test/source-code-examples/simple_select.js<>startBoxSelect"
          #{"stopExtendedInteractions"},
          "test/source-code-examples/simple_select.js<>onUncombineFeatures"
          #{"fireActionable"},
          "test/source-code-examples/draw_polygon.js<>onTap"
          #{"clickOnVertex" "clickAnywhere"},
          "test/source-code-examples/simple_select.js<>onSetup"
          #{"fireActionable"},
          "test/source-code-examples/simple_select.js<>toDisplayFeatures"
          #{"fireActionable"},
          "test/source-code-examples/simple_select.js<>onMouseUp"
          #{"fireUpdate" "stopExtendedInteractions" "getUniqueIds"},
          "test/source-code-examples/simple_select.js<>stopExtendedInteractions"
          #{},
          "test/source-code-examples/simple_select.js<>dragMove"
          #{},
          "test/source-code-examples/draw_polygon.js<>clickAnywhere"
          #{},
          "test/source-code-examples/simple_select.js<>startOnActiveFeature"
          #{"stopExtendedInteractions"},
          "test/source-code-examples/simple_select.js<>clickOnFeature"
          #{"stopExtendedInteractions"},
          "test/source-code-examples/simple_select.js<>clickOnVertex"
          #{},
          "test/source-code-examples/simple_select.js<>onDrag"
          #{"dragMove" "whileBoxSelect"},
          "test/source-code-examples/simple_select.js<>getUniqueIds"
          #{},
          "test/source-code-examples/simple_select.js<>onTap"
          #{"clickOnVertex" "clickOnFeature" "clickAnywhere"},
          "test/source-code-examples/simple_select.js<>onMouseMove"
          #{"stopExtendedInteractions"},
          "test/source-code-examples/simple_select.js<>fireActionable"
          #{},
          "test/source-code-examples/draw_polygon.js<>toDisplayFeatures"
          #{},
          "test/source-code-examples/simple_select.js<>onMouseDown"
          #{"startOnActiveFeature" "startBoxSelect"},
          "test/source-code-examples/draw_polygon.js<>onMouseMove"
          #{},
          "test/source-code-examples/simple_select.js<>onMouseOut"
          #{"fireUpdate"},
          "test/source-code-examples/draw_polygon.js<>clickOnVertex"
          #{}}
         (->> [{:indentation-level-to-search 0 :file-path "test/source-code-examples/draw_polygon.js" }
               {:indentation-level-to-search 0 :file-path "test/source-code-examples/simple_select.js" }]
              (file-list->graph)))))
