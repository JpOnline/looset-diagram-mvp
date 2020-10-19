(ns looset-diagram-mvp.ui.looset-diagram
  (:require
    [arrow-drop-down-icon :as mui-icon-arrow-drop-down-icon]
    [arrow-right-icon :as mui-icon-arrow-right]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [devcards.core :as devcards :refer-macros [defcard deftest defcard-rg]]
    [looset-diagram-mvp.graph-ops :as graph-ops]
    [looset-diagram-mvp.ui.util :as util :refer [<sub >evt]]
    [menu-item :as material-menu-item]
    [menu-list :as material-menu-list]
    [re-frame.core :as re-frame]
    [reagent.core :as reagent]))

(defn graph-to-draw
  [app-state]
  (let [dirs-to-close (->> (get-in app-state [:ui :closed-dirs])
                           (filter (comp true? val))
                           (map first)
                           (sort-by (juxt count identity))
                           reverse)]
    (-> app-state
        (get-in [:domain :graph] {"No graph set" #{}})
        (as-> g (reduce graph-ops/close-graph g dirs-to-close)))))
(re-frame/reg-sub ::graph-to-draw graph-to-draw)

(defn closed-dirs
  [app-state]
  (get-in app-state [:ui :closed-dirs] {}))
(re-frame/reg-sub ::closed-dirs closed-dirs)

(defn graph->dir-structure
  [graph]
  (let [paths (-> graph keys sort)
        splited (map #(clojure.string/split % #"/|(?=<>)") paths)
        to-dir-structure (fn to-dir-structure [val [label & rest]]
                           (if label
                             (update val label #(to-dir-structure % rest))
                             {}))]
    (reduce to-dir-structure {} splited)))
(re-frame/reg-sub
  ::graph->dir-structure
  :<- [::graph-to-draw]
  graph->dir-structure)

(defn-traced toggle-dir-openness
  [app-state [event file-path]]
  (update-in app-state [:ui :closed-dirs file-path] not))
(re-frame/reg-event-db ::toggle-dir-openness toggle-dir-openness)

(defn directory-structure-component []
  (let [closed-dirs (<sub [::closed-dirs])
        dir-structure->menu
        (fn s->mi
          ([structure]
           (s->mi structure 0 ""))
          ([[label sub-menus] padding on-click]
           (cons ^{:key (str on-click "/" label)}
                 [:> material-menu-item
                  {:onClick (when (not (clojure.string/starts-with? label "<>"))
                              #(>evt [::toggle-dir-openness (subs (str on-click "/" label) 1)]))
                   :style {:paddingLeft (if (clojure.string/starts-with? label "<>")
                                          (+ 40 (* 12 padding))
                                          (+ 16 (* 12 padding)))}}
                  (cond
                    (clojure.string/starts-with? label "<>") [:span.roboto-mono label]
                    (true? (closed-dirs (subs (str on-click "/" label) 1))) [:span.quattrocento {:style {:display "flex"}} [:> mui-icon-arrow-right] label]
                    :else [:span.quattrocento {:style {:display "flex"}} [:> mui-icon-arrow-drop-down-icon] label])]
                 (mapcat s->mi sub-menus (repeat (inc padding)) (repeat (str on-click "/" label))))))]
    [:> material-menu-list
     (map dir-structure->menu (<sub [::graph->dir-structure]))]))

(defn draw-graph-no-memo [id dot-string options]
  (fn []
    (let [parsed-data (-> js/vis (.parseDOTNetwork dot-string))
          container (-> js/document (.getElementById id))
          data #js {:nodes (.-nodes parsed-data) :edges (.-edges parsed-data)}]
      (-> js/vis .-Network (new container data options)))))

(def draw-graph (memoize draw-graph-no-memo))

(defn graph-options
  [graph-to-draw]
  (if (< (count (keys graph-to-draw)) 70)
    #js{}
    #js{:edges #js {:smooth #js {:type "continuous"}}
        :interaction #js {:hideEdgesOnDrag true
                          :hideEdgesOnZoom true
                          }
        :physics false}))
(re-frame/reg-sub
  ::graph-options
  :<- [::graph-to-draw]
  graph-options)

(defn graph-dot-string
  [graph-to-draw]
  (-> graph-to-draw
      graph-ops/clean-file-path
      graph-ops/graph->dot-syntax
      (as-> dot (str "looset_diagram {" dot "}"))))
(re-frame/reg-sub
  ::graph-dot-string
  :<- [::graph-to-draw]
  graph-dot-string)

(defn visjs-component []
  [(util/with-mount-fn
     [:div
      {:id "looset-diagram"
       :style #js {:height "100%" :width "100px" :flexGrow 5}
       :component-did-mount (draw-graph "looset-diagram" (<sub [::graph-dot-string]) (<sub [::graph-options]))}
      [:p "Loading.."]])])

(defn project-link-text
  [app-state]
  (get-in app-state [:ui :project-link :text]))
(re-frame/reg-sub ::project-link-text project-link-text)

(defn project-link-href
  [app-state]
  (get-in app-state [:ui :project-link :href]))
(re-frame/reg-sub ::project-link-href project-link-href)

(defn html-on-top-of-label-panel
  [app-state]
  (get-in app-state [:ui :html-on-top-of-label-panel]))
(re-frame/reg-sub ::html-on-top-of-label-panel html-on-top-of-label-panel)

(defn view []
  [:<>
   [:style
    ".quattrocento {
      font-family: 'Quattrocento', serif;
    }
    .roboto-mono {
      font-family: 'Roboto Mono', monospace;
    }"]
   [:div
   {:style {:display "flex"
            :height "100%"}}
   [visjs-component]
   [:div
     {:style {:flexGrow 1
              :overflow "auto"
              :borderLeft "1px solid gray"}}
     [:div {:dangerouslySetInnerHTML #js {:__html (<sub [::html-on-top-of-label-panel])}}]
     [:a.quattrocento
       {:style {:marginLeft "10px"
                :textDecoration "none"}
        :href (<sub [::project-link-href])}
       (<sub [::project-link-text])]
     [:h2.quattrocento {:style {:margin "21px 0 4px 0"
                                :color "darkgray"
                                :textAlign "center"}}
      "By Directory"]
    [directory-structure-component]]
   ]])

