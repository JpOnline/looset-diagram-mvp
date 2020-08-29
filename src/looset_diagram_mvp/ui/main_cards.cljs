(ns looset-diagram-mvp.ui.main-cards
  (:require
    [button :as material-button]
    [expand-less :as mui-icon-expand-less]
    [expand-more :as mui-icon-expand-more]

    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [devcards.core :as devcards :refer-macros [defcard deftest defcard-rg]]
    [looset-diagram-mvp.graph-ops :as graph-ops]
    [looset-diagram-mvp.ui.util :as util :refer [<sub >evt]]
    [re-frame.core :as re-frame]
    [reagent.core :as reagent]

    [cljs.test :refer-macros [is testing]]
    ))

(defn reset-state!
  "Used to set tests initial state."
  [state]
  (re-frame/dispatch-sync [::set-app-state
                           (js->clj state :keywordize-keys true)]))

(re-frame/reg-event-db ::set-app-state
  (fn-traced [_ [event application-state]]
             application-state))

(def initial-state
  {:domain {:graph {"ca" #{"cc"} "cb" #{"cc"} "cc" #{}}}})

(defonce init-app-state
  (do
    (re-frame/dispatch-sync [::set-app-state initial-state])))

(re-frame/clear-subscription-cache!)

;; Draw the devcards ui.
(devcards.core/start-devcard-ui!)

(defcard
  (str "# Looset Cards")
  {}
  {:frame false
   :heading false})

(defonce devcards-hidden (reagent/atom []))

(defcard-rg hidding-cards
  (let [card-container-style #js {:display "flex"
                                  :justifyContent "space-evenly"
                                  :padding "20px 0"}]
    (fn [devcard-data _]
      [:div.card-container
       {:style card-container-style}
       [:> material-button
        {:id "hide-all"
         :variant "outlined"
         :size "small"
         :color "secondary"
         :onClick #(doseq [hidden-atom @devcards-hidden]
                     (reset! hidden-atom true))}
        "hide all"]
       [:> material-button
        {:id "show-all"
         :variant "outlined"
         :size "small"
         :color "secondary"
         :onClick #(doseq [hidden-atom @devcards-hidden]
                     (reset! hidden-atom false))}
        "show all"]]))
  {}
  {:frame false})

(defn card-component [& children]
  (fn card-component [devcard-data _]
    (let [{:keys [hidden?]} @devcard-data]
      (swap! devcards-hidden conj hidden?)
      [:<>
       [:div.card-expander
        {:onClick #(swap! hidden? not)
         :style #js {:textAlign "center"}}
        (if @hidden?
          [:> mui-icon-expand-more]
          [:> mui-icon-expand-less])]
       [:div.card-container
        {:style #js {:display "flex"}}
        [util/error-boundary
         {:if-error [:h1 "Erro no card-component. 🤔"]}
         [:div.component-container
          {:hidden @hidden?}
          (map-indexed #(with-meta %2 {:key %1}) children)]]]])))

(defn draw-graph [id graph]
  (fn []
    (let [dot-string (str "looset_diagram {" graph "}")
          parsed-data (-> js/vis (.parseDOTNetwork dot-string))
          container (-> js/document (.getElementById id))
          data #js {:nodes (.-nodes parsed-data) :edges (.-edges parsed-data)}
          options #js {}]
      (-> js/vis .-Network (new container data options)))))

(defn graph
  [app-state]
  (-> app-state
      (get-in [:domain :graph] {"No graph set" #{}})
      graph-ops/clean-file-path
      graph-ops/graph->dot-syntax))
(re-frame/reg-sub ::graph graph)

(defn visjs-component []
  [(util/with-mount-fn
     [:div
      {:id "looset-diagram"
       :style #js {:height "400px" :width "600px" :border "1px solid lightgray"}
       :component-did-mount (draw-graph "looset-diagram" (<sub [::graph]))}
      [:p "Loading.."]])])

(defcard-rg visjs-card
  (card-component
    [visjs-component])
  {:hidden? (reagent/atom false)})

(defn-traced graph-updated
  [app-state [event new-graph]]
  (assoc-in app-state [:domain :graph] (cljs.reader/read-string new-graph)))
(re-frame/reg-event-db ::graph-updated graph-updated)

(defn-traced toggle-dir-openness
  [app-state [event file-path]]
  ;; (assoc-in app-state [:domain :graph] (cljs.reader/read-string new-graph))
  )
(re-frame/reg-event-db ::toggle-dir-openness toggle-dir-openness)

(defcard-rg dot-string-input-card
  (card-component
    [:<>
     [:input {:onBlur #(>evt [::graph-updated (-> % .-target .-value)])}]
     [:button {:onClick #(>evt [::toggle-dir-openness "test/source-code-examples/draw_polygon.js"])}
      "Toggle draw_polygon.js"]
     ]
    )
  {:hidden? (reagent/atom false)})

(deftest foo-test
  (testing "Testing"
    (is (= 3
           (+ 1 1))
        "Not right..")))

(comment
  )