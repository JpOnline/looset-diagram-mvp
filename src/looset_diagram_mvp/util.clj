(ns looset-diagram-mvp.util)

(defn get-pred
  "Returns the first element of coll that satisfy the predicate f."
  [f coll]
  (some #(if (f %) %) coll))

