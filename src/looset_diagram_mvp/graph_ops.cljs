(ns looset-diagram-mvp.graph-ops
  (:require
    [clojure.set]
    [clojure.string]

    [devcards.core :as devcards :refer-macros [defcard deftest defcard-rg]]
    [cljs.test :refer-macros [is testing]]
    [cljs.pprint :refer [pprint]]
    ))

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

(defn code-block-to-dot-syntax [[identifier references]]
  (let [sq #(str "\""%"\"")]
    (str (sq identifier)" -> {"(clojure.string/join " " (map sq references))"}")))

(defn graph->dot-syntax [graph]
  (->> graph
       (map code-block-to-dot-syntax)
       (clojure.string/join "\n")))

(defn clean-file-path [graph]
  (let [del-less (comp clojure.string/reverse #(re-find #"^[^/]*" %) clojure.string/reverse)
        del-more #(if (re-find #"^.*<>" %) (clojure.string/replace % #"^.*<>" "") (del-less %))
        freqs (frequencies (map del-more (keys graph)))
        clean (fn [val [k v]] (if (> (freqs (del-more k)) 1)
                                (conj val {(del-less k) v})
                                (conj val {(del-more k) v})))]
    (reduce clean {} graph)))

(defn close-graph [graph path-to-close]
  (let [origins-to-replace (filter #(clojure.string/starts-with? (first %) path-to-close) graph)
        dests-to-replace (set (map path-last-part (keys origins-to-replace)))
        unified-dest (->> origins-to-replace vals (apply clojure.set/union))
        dest-replacer (fn [[k v]] (if (empty? (clojure.set/intersection dests-to-replace v))
                                    {k v}
                                    {k (set (conj (remove dests-to-replace v) (path-last-part path-to-close)))}))]
    (->> graph
         (remove (set origins-to-replace))
         (map dest-replacer)
         (apply merge)
         (#(conj % {path-to-close unified-dest}))
         filter-cb-identifiers)))

(deftest clean-file-path-test
  (is (= {"draw_polygon.js<>onStop" #{},
          "simple_select.js<>onStop" #{},
          "onTouchStart" #{"startOnActiveFeature"}}
         (clean-file-path {"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onStop"
                           #{},
                           "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onStop"
                           #{},
                           "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js<>onTouchStart"
                           #{"startOnActiveFeature"}})))
  (is (= {"onStop" #{},
          "simple_select.js" #{"startOnActiveFeature"},}
         (clean-file-path {"/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/draw_polygon.js<>onStop"
                           #{},
                           "/home/smokeonline/projects/looset-diagram-mvp/test/source-code-examples/simple_select.js"
                           #{"startOnActiveFeature"}}))))

(deftest close-graph-test
  (is (= {"/src/fa.js" #{"cc"}
          "/src/fb.js<>cc" #{}}
         (-> {"/src/fa.js<>ca" #{"cc"}
              "/src/fa.js<>cb" #{"cc"}
              "/src/fb.js<>cc" #{}}
             (close-graph "/src/fa.js"))))
  (is (= {"/src/fa.js" #{"cc"}
          "/src/fb.js<>cc" #{}}
         (-> {"/src/fa.js<>ca" #{"cc"}
              "/src/fa.js<>cb" #{"cc"}
              "/src/fa.js<>cd" #{"cb"}
              "/src/fb.js<>cc" #{}}
             (close-graph "/src/fa.js"))))
  (is (= {"/src/fa.js" #{"cc"}
          "/src/fb.js<>cc" #{"fa.js"}}
         (-> {"/src/fa.js<>ca" #{"cc"}
              "/src/fa.js<>cb" #{"cc"}
              "/src/fa.js<>cd" #{"cb"}
              "/src/fb.js<>cc" #{"cb"}}
             (close-graph "/src/fa.js")
             ;; clean-file-path
             ;; graph->dot-syntax
             ;; print
             ))))
