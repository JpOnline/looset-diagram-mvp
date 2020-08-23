(ns looset-diagram-mvp.core
  (:require

    [clojure.test :refer :all]
    ))

(defn foo
  "I don't do a whole lot."
  [x]
  (str x "Hello, World!"))

(deftest foo-test
  (is (= "jp Hello, World!" (foo "jp "))))
