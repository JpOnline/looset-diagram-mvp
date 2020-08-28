(ns looset-diagram-mvp.ui.util
  (:require
    [reagent.core :as reagent]
    ))

(defn error-boundary []
  (let [error (reagent/atom nil)]
    (reagent/create-class
      {:component-did-catch (fn [this e info]) ;; For side effects, like logging the error.
       :get-derived-state-from-error (fn [e]
                                       (reset! error e)
                                       #js {})
       :reagent-render (fn [{:keys [if-error]} & children]
                         (if @error
                           [:<> if-error]
                           [:<> (map-indexed #(with-meta %2 {:key %1}) children)]))})))

(defn with-mount-fn
  "Wrap component in the create-class fn so the react component-did-mount
  hook can be used."
  [[n {:keys [component-did-mount]} :as to-render]]
  (reagent/create-class
    {:reagent-render #(into [] (update-in to-render [1]
                                          dissoc :component-did-mount))
     :component-did-mount component-did-mount}))

(defn t [] " util test")
