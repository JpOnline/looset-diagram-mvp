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

(defn file-code-blocks-with-file-path [{:keys [file-path] :as info}]
  (->> info
      file-info-with-code-blocks
      :code-blocks
      (map (fn [[k v]] {(str file-path "<>" k) v}))
      (apply merge)))

;; It's still a copy of merge-with, I need to change it accordanly.
(defn merge-with-key-changer
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

(defn filter-cb-identifiers [code-blocks]
  (let [cb-identifiers (conj (set (keys code-blocks)) "DUPLICATED KEY!!")]
    (apply merge (map (fn [[k v]] {k (set (filter cb-identifiers v))}) code-blocks))))

(defn code-block-to-dot-syntax [[identifier references]]
  (let [sq #(str "\""%"\"")]
    (str (sq identifier)" -> {"(clojure.string/join " " (map sq references))"}"))
  )

(comment
  (:file-path (file-info-with-code-blocks {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js"}))
  (file-code-blocks-with-file-path {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js"})
  (file-info-with-code-blocks {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js"})
  (-> {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js"}
    (file-info-with-code-blocks)
    :code-blocks
    )
  (->> [{:indentation-level-to-search 2 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/api.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/constants.js"}
        {:indentation-level-to-search 2 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/events.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/feature_types/feature.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/feature_types/line_string.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/feature_types/multi_feature.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/feature_types/point.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/feature_types/polygon.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/common_selectors.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/constrain_feature_movement.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/create_midpoint.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/create_supplementary_points.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/create_vertex.js"}
        {:indentation-level-to-search 2 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/double_click_zoom.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/euclidean_distance.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/features_at.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/get_features_and_set_cursor.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/is_click.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/is_event_at_coordinates.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/is_tap.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/map_event_to_bounding_box.js"}
        {:indentation-level-to-search 4 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/mode_handler.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/mouse_event_point.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/move_features.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/sort_features.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/string_set.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/string_sets_are_equal.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/theme.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/lib/to_dense_array.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/modes/direct_select.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/modes/draw_line_string.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/modes/draw_point.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/modes/draw_polygon.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/modes/index.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/modes/mode_interface_accessors.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/modes/mode_interface.js"}
        {:indentation-level-to-search 6 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/modes/object_to_mode.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/modes/simple_select.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/options.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/render.js"}
        {:indentation-level-to-search 4 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/setup.js"}
        {:indentation-level-to-search 0 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/store.js"}
        {:indentation-level-to-search 2 :file-path "/home/smokeonline/projects/mapbox-gl-draw/src/ui.js"}
        ]
      (map file-info-with-code-blocks)
      (map :code-blocks)
      ;; (apply (partial merge-with (constantly #{"DUPLICATED KEY!!"}))) ;; Use merge-with-key-changer instead?
      (apply (partial merge-with clojure.set/union))
      (filter-cb-identifiers)
      (map code-block-to-dot-syntax)
      (clojure.string/join "\n")
      (spit "resulted-graph-in-DOT.txt")
      )
  )
