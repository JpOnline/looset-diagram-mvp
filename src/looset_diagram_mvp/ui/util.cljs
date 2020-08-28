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

