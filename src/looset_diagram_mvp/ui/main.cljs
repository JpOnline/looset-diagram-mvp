(ns ^:figwheel-hooks looset-diagram-mvp.ui.main
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [re-frame.core :as re-frame]
    [reagent.dom]

    ;; [day8.re-frame-10x]
    ))

(when ^boolean js/goog.DEBUG ;; Code removed in production
  (js/console.log "Debugger mode!"))

(def initial-state
  {})

(re-frame/reg-event-db ::set-app-state
  (fn-traced [_ [event application-state]]
             application-state))

(defn init-state! []
  (re-frame/dispatch-sync [::set-app-state initial-state])
  )

(defn view []
  [:h1 "Looset4"]
  )

(defn ^:after-load mount-app-element! []
  (when ^boolean js/goog.DEBUG ;; Code removed in production
    ;; (day8.re-frame-10x/show-panel! false)
    (re-frame/clear-subscription-cache!))
  (when-let [el (.getElementById js/document "app")]
    (reagent.dom/render [view] el)))

(defonce startup
  (do
    (init-state!)
    (mount-app-element!)))
