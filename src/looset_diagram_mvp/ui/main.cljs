(ns ^:figwheel-hooks looset-diagram-mvp.ui.main
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [looset-diagram-mvp.ui.looset-diagram :as looset-diagram]
    [looset-diagram-mvp.ui.initial-state :as init]
    [jp-storage-module.firebase :as firebase]
    [re-frame.core :as re-frame]
    [reagent.dom]

    ;; [day8.re-frame-10x]
    ))

(when ^boolean js/goog.DEBUG ;; Code removed in production
  (js/console.log "Debugger mode!"))

(re-frame/reg-event-db ::set-app-state
  (fn-traced [_ [event application-state]]
             application-state))

(defn ^:after-load mount-app-element! []
  (when ^boolean js/goog.DEBUG ;; Code removed in production
    ;; (day8.re-frame-10x/show-panel! false)
    (re-frame/clear-subscription-cache!))
  (when-let [el (.getElementById js/document "app")]
    (reagent.dom/render [looset-diagram/view] el)))

(defn query-parameter [parameter]
  (-> js/window .-location .-search (->> (new js/URLSearchParams)) (.get parameter)))

(defn init-state! [state]
  (re-frame/dispatch-sync [::set-app-state state])
  (mount-app-element!))

(defonce startup
  (init-state! init/initial-state)
  ;; ;; Code When using Firebase
  ;; (if-let [project-to-load (query-parameter "project")]
  ;;   (firebase/async-load project-to-load
  ;;                        {:on-success #(init-state! (cljs.reader/read-string %))
  ;;                         :on-error   #(init-state! init/initial-state)})
  ;;   (init-state! init/initial-state))
  )
