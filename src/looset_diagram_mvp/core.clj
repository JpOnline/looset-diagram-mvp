(ns looset-diagram-mvp.core
  (:require

    [clojure.test :refer :all]
    ))



(defn file-code-blocks
  [{:keys [file-list options]
    :or {options {:indentation-level-to-search 0}}}]
  (slurp (first file-list))
  )

(deftest foo-test
  (is (= 2 (file-code-blocks {:file-list "jp"})))
  (slurp "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/api.js")
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
