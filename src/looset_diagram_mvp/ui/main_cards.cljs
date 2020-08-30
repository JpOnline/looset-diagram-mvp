(ns looset-diagram-mvp.ui.main-cards
  (:require
    [button :as material-button]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [devcards.core :as devcards :refer-macros [defcard deftest defcard-rg]]
    [expand-less :as mui-icon-expand-less]
    [expand-more :as mui-icon-expand-more]
    [looset-diagram-mvp.ui.looset-diagram :as looset-diagram]
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
  {:domain {:graph {"src/lib/is_tap.js<>export" #{"const" "start"}, "src/feature_types/polygon.js<>incomingCoords" #{"changed"}, "src/setup.js<>addLayers" #{"sources" "geojsonTypes" "render" "ctx" "data"}, "src/events.js<>actionable" #{"actionState" "let" "action" "events" "changed" "ctx"}, "src/constants.js<>geojsonTypes" #{}, "src/lib/features_at.js<>featuresAtClick" #{"ctx"}, "src/lib/mode_handler.js<>uncombineFeatures" #{"uncombineFeatures"}, "src/feature_types/polygon.js<>setCoordinates" #{"changed"}, "src/modes/simple_select.js<>clickOnVertex" #{"cursors" "changeMode" "modes"}, "src/lib/mode_handler.js<>click" #{"click"}, "src/lib/mode_handler.js<>on" #{}, "src/lib/mode_handler.js<>id" #{"id"}, "src/feature_types/multi_feature.js<>ctx" #{"delete" "_coordinatesToFeatures" "ctx" "models"}, "src/constants.js<>activeStates" #{}, "src/options.js<>hideControls" #{"trash"}, "src/lib/common_selectors.js<>isFeature" #{"meta"}, "src/modes/draw_polygon.js<>toDisplayFeatures" #{"id" "const" "geojsonTypes" "meta" "activeStates"}, "src/api.js<>set" #{"delete" "id" "let" "const" "geojsonTypes" "api" "add" "has" "ctx"}, "src/modes/draw_polygon.js<>onTrash" #{"id" "changeMode" "modes"}, "src/modes/draw_line_string.js<>onTap" #{"clickOnVertex" "isVertex" "clickAnywhere"}, "src/api.js<>deleteAll" #{"getMode" "delete" "events" "changeMode" "render" "api" "modes" "ctx"}, "src/feature_types/feature.js<>changed" #{"id" "ctx"}, "src/feature_types/point.js<>isValid" #{}, "src/feature_types/line_string.js<>ctx" #{"ctx"}, "src/feature_types/multi_feature.js<>getCoordinates" #{"geojsonTypes" "getCoordinates"}, "src/modes/simple_select.js<>startOnActiveFeature" #{"id" "disable" "stopExtendedInteractions"}, "src/feature_types/line_string.js<>isValid" #{}, "src/lib/common_selectors.js<>noTarget" #{}, "src/feature_types/feature.js<>const" #{"id" "ctx"}, "src/modes/draw_point.js<>onKeyUp" #{"isEnterKey" "isEscapeKey" "stopDrawingAndRemove"}, "src/api.js<>get" #{"id" "const" "toGeoJSON" "ctx" "get"}, "src/feature_types/feature.js<>toGeoJSON" #{"id" "geojsonTypes" "getCoordinates"}, "src/constants.js<>classes" #{}, "src/lib/constrain_feature_movement.js<>const" #{}, "src/modes/draw_line_string.js<>clickOnVertex" #{"id" "changeMode" "modes"}, "src/lib/common_selectors.js<>isActiveFeature" #{"meta" "activeStates"}, "src/feature_types/multi_feature.js<>_coordinatesToFeatures" #{"id" "const" "geojsonTypes" "ctx"}, "src/modes/object_to_mode.js<>start" #{"onSetup" "let" "const" "on"}, "src/lib/euclidean_distance.js<>export" #{"const"}, "src/feature_types/multi_feature.js<>models" #{}, "src/lib/mode_handler.js<>mousedown" #{"mousedown"}, "src/modes/draw_polygon.js<>onStop" #{"enable" "id" "removeCoordinate" "cursors" "events" "isValid" "changeMode" "toGeoJSON" "modes"}, "src/lib/mode_handler.js<>trash" #{"trash" "render"}, "src/modes/draw_polygon.js<>clickOnVertex" #{"id" "changeMode" "modes"}, "src/events.js<>mousedown" #{"mousedown" "const" "ctx"}, "src/feature_types/feature.js<>getCoordinates" #{}, "src/modes/simple_select.js<>onTap" #{"isFeature" "clickOnVertex" "noTarget" "meta" "clickOnFeature" "clickAnywhere" "isOfMetaType"}, "src/api.js<>trash" #{"trash" "events" "api" "ctx"}, "src/feature_types/multi_feature.js<>setCoordinates" #{"_coordinatesToFeatures" "changed"}, "src/api.js<>getSelectedPoints" #{"geojsonTypes" "ctx"}, "src/feature_types/multi_feature.js<>updateCoordinate" #{"changed" "updateCoordinate"}, "src/lib/string_set.js<>has" #{}, "src/events.js<>isDrag" #{"drag" "cursors" "isDrag" "ctx"}, "src/modes/simple_select.js<>getUniqueIds" #{"id" "const" "add" "reduce"}, "src/events.js<>api" #{"trash" "mousedown" "getMode" "mouseout" "combineFeatures" "uncombineFeatures" "mousemove" "keydown" "actionable" "mouseup" "touchmove" "start" "touchend" "on" "events" "changeMode" "render" "touchstart" "keyup" "modes" "ctx" "data"}, "src/modes/simple_select.js<>onMouseUp" #{"fireUpdate" "id" "click" "cursors" "const" "stopExtendedInteractions" "getUniqueIds"}, "src/api.js<>getAll" #{"getAll" "geojsonTypes" "toGeoJSON" "ctx"}, "src/lib/features_at.js<>featuresAtTouch" #{"ctx"}, "src/lib/get_features_and_set_cursor.js<>export" #{"click" "cursors" "const" "classes" "events" "meta" "ctx" "activeStates"}, "src/modes/draw_point.js<>toDisplayFeatures" #{"id" "const" "activeStates"}, "src/store.js<>export" #{"sources" "let" "render" "ctx"}, "src/modes/simple_select.js<>onTouchStart" #{"startOnActiveFeature" "isActiveFeature"}, "src/modes/simple_select.js<>onUncombineFeatures" #{"fireActionable" "id" "let" "const" "events" "toGeoJSON" "getFeatures" "getSelected"}, "src/options.js<>export" #{"defaultOptions" "showControls" "hideControls" "let"}, "src/feature_types/feature.js<>internal" #{"id" "const" "geojsonTypes" "meta" "getCoordinates" "ctx" "activeStates"}, "src/api.js<>getMode" #{"getMode" "events" "ctx"}, "src/feature_types/polygon.js<>isValid" #{}, "src/modes/object_to_mode.js<>combineFeatures" #{"onCombineFeatures"}, "src/lib/common_selectors.js<>isShiftDown" #{}, "src/modes/simple_select.js<>onDrag" #{"dragMove" "whileBoxSelect"}, "src/feature_types/feature.js<>setCoordinates" #{"changed"}, "src/modes/draw_polygon.js<>onKeyUp" #{"isEnterKey" "id" "changeMode" "modes" "isEscapeKey"}, "src/setup.js<>onRemove" #{"connect" "removeLayers" "events" "ctx"}, "src/lib/common_selectors.js<>isInactiveFeature" #{"meta" "activeStates"}, "src/lib/mode_handler.js<>drag" #{"drag"}, "src/lib/constrain_feature_movement.js<>export" #{"let" "const"}, "src/lib/mode_handler.js<>combineFeatures" #{"combineFeatures"}, "src/events.js<>touchmove" #{"touchmove" "events" "touchdrag" "ctx"}, "src/modes/object_to_mode.js<>render" #{"toDisplayFeatures"}, "src/modes/mode_interface_accessors.js<>export" #{"ctx"}, "src/modes/draw_line_string.js<>clickAnywhere" #{"id" "cursors" "changeMode" "modes" "addCoordinate" "updateCoordinate"}, "src/constants.js<>sources" #{}, "src/setup.js<>connect" #{"connect" "events" "ctx" "addLayers"}, "src/feature_types/line_string.js<>updateCoordinate" #{"id" "const" "changed"}, "src/feature_types/polygon.js<>ctx" #{"ctx"}, "src/feature_types/polygon.js<>addCoordinate" #{"const" "changed"}, "src/lib/mode_handler.js<>stop" #{"stop"}, "src/lib/is_event_at_coordinates.js<>function" #{}, "src/feature_types/point.js<>const" #{"ctx"}, "src/modes/simple_select.js<>onCombineFeatures" #{"fireActionable" "id" "getSelectedIds" "let" "const" "events" "geojsonTypes" "getCoordinates" "toGeoJSON" "getSelected"}, "src/constants.js<>updateActions" #{}, "src/events.js<>touchdrag" #{"drag" "events"}, "src/lib/is_click.js<>export" #{"const" "start"}, "src/modes/draw_polygon.js<>onSetup" #{"trash" "types" "cursors" "const" "disable" "geojsonTypes"}, "src/feature_types/line_string.js<>getCoordinate" #{"id" "const"}, "src/lib/create_midpoint.js<>export" #{"const" "geojsonTypes" "meta"}, "src/modes/simple_select.js<>dragMove" #{"const" "getSelected"}, "src/lib/mode_handler.js<>tap" #{"tap"}, "src/modes/draw_line_string.js<>onKeyUp" #{"isEnterKey" "id" "changeMode" "modes" "isEscapeKey"}, "src/feature_types/line_string.js<>removeCoordinate" #{"changed"}, "src/modes/simple_select.js<>fireActionable" #{"trash" "combineFeatures" "uncombineFeatures" "let" "const" "getSelected"}, "src/feature_types/multi_feature.js<>addCoordinate" #{"changed" "addCoordinate"}, "src/feature_types/feature.js<>incomingCoords" #{"setCoordinates"}, "src/modes/draw_point.js<>onSetup" #{"trash" "types" "cursors" "const" "geojsonTypes"}, "src/modes/object_to_mode.js<>trash" #{"onTrash"}, "src/lib/mode_handler.js<>touchend" #{"touchend"}, "src/modes/object_to_mode.js<>uncombineFeatures" #{"onUncombineFeatures"}, "src/setup.js<>onAdd" #{"enable" "let" "connect" "const" "start" "disable" "on" "function" "events" "ctx"}, "src/events.js<>zoomend" #{"ctx"}, "src/modes/draw_point.js<>onTap" #{"id" "cursors" "events" "changeMode" "toGeoJSON" "modes" "updateCoordinate"}, "src/constants.js<>types" #{}, "src/feature_types/multi_feature.js<>getCoordinate" #{"getCoordinate"}, "src/modes/draw_line_string.js<>onTrash" #{"id" "changeMode" "modes"}, "src/feature_types/polygon.js<>getCoordinates" #{}, "src/lib/create_supplementary_points.js<>createSupplementaryPoints" #{"id" "createSupplementaryPoints" "let" "const" "function" "geojsonTypes"}, "src/events.js<>mousemove" #{"mousedrag" "mousemove" "const" "events" "ctx"}, "src/lib/double_click_zoom.js<>enable" #{"enable" "ctx"}, "src/events.js<>touchstart" #{"const" "touchstart" "ctx"}, "src/lib/mode_handler.js<>mousemove" #{"mousemove"}, "src/events.js<>keydown" #{"trash" "keydown" "changeMode" "modes" "ctx"}, "src/modes/simple_select.js<>stopExtendedInteractions" #{"enable"}, "src/lib/mode_handler.js<>mouseup" #{"mouseup"}, "src/api.js<>getFeatureIdsAt" #{"id" "click" "const" "ctx"}, "src/api.js<>changeMode" #{"getMode" "getSelectedIds" "events" "changeMode" "render" "api" "modes" "ctx"}, "src/lib/mode_handler.js<>keyup" #{"keyup"}, "src/lib/move_features.js<>export" #{"incomingCoords" "let" "const" "geojsonTypes" "getCoordinates" "toGeoJSON"}, "src/modes/simple_select.js<>clickAnywhere" #{"enable" "id" "getSelectedIds" "const" "stopExtendedInteractions"}, "src/lib/mode_handler.js<>touchstart" #{"touchstart"}, "src/modes/simple_select.js<>whileBoxSelect" #{"cursors" "const" "classes" "add"}, "src/feature_types/polygon.js<>getCoordinate" #{"const"}, "src/lib/mode_handler.js<>touchmove" #{"touchmove"}, "src/lib/string_sets_are_equal.js<>export" #{"id"}, "src/lib/features_at.js<>export" #{"featuresAtTouch" "click" "featuresAtClick"}, "src/options.js<>defaultOptions" #{"modes"}, "src/modes/simple_select.js<>onStop" #{"enable"}, "src/feature_types/polygon.js<>removeCoordinate" #{"const" "changed"}, "src/lib/mode_handler.js<>keydown" #{"keydown"}, "src/lib/string_set.js<>add" #{"has"}, "src/api.js<>setFeatureProperty" #{"setFeatureProperty" "api" "ctx"}, "src/lib/common_selectors.js<>isEscapeKey" #{}, "src/api.js<>getSelectedIds" #{"getSelectedIds" "ctx"}, "src/events.js<>reduce" #{"modes" "ctx"}, "src/modes/simple_select.js<>onMouseOut" #{"fireUpdate"}, "src/modes/simple_select.js<>onTrash" #{"fireActionable" "getSelectedIds"}, "src/events.js<>data" #{"id" "const" "render" "ctx" "addLayers"}, "src/options.js<>showControls" #{"trash"}, "src/options.js<>function" #{"sources" "id"}, "src/modes/simple_select.js<>fireUpdate" #{"action" "events" "toGeoJSON" "getSelected" "updateActions"}, "src/modes/draw_polygon.js<>clickAnywhere" #{"id" "cursors" "changeMode" "modes" "updateCoordinate"}, "src/feature_types/multi_feature.js<>removeCoordinate" #{"removeCoordinate" "changed"}, "src/feature_types/polygon.js<>updateCoordinate" #{"const" "changed"}, "src/api.js<>add" #{"incomingCoords" "id" "const" "render" "getCoordinates" "add" "ctx" "get"}, "src/feature_types/point.js<>updateCoordinate" #{"changed"}, "src/feature_types/multi_feature.js<>isValid" #{"isValid"}, "src/lib/common_selectors.js<>isVertex" #{"const" "meta"}, "src/modes/simple_select.js<>clickOnFeature" #{"enable" "id" "getSelectedIds" "cursors" "const" "disable" "stopExtendedInteractions" "changeMode" "geojsonTypes" "modes" "isShiftDown"}, "src/lib/mode_handler.js<>let" #{"const" "render" "ctx"}, "src/api.js<>uncombineFeatures" #{"uncombineFeatures" "events" "api" "ctx"}, "src/api.js<>combineFeatures" #{"combineFeatures" "events" "api" "ctx"}, "src/modes/simple_select.js<>startBoxSelect" #{"disable" "stopExtendedInteractions"}, "src/lib/sort_features.js<>function-e" #{"delete" "geojsonTypes"}, "src/setup.js<>removeLayers" #{"sources" "id" "ctx"}, "src/api.js<>getSelected" #{"id" "getSelectedIds" "geojsonTypes" "toGeoJSON" "ctx" "get"}, "src/render.js<>export" #{"sources" "internal" "id" "let" "const" "function" "events" "geojsonTypes" "toGeoJSON" "ctx" "getSelected" "get"}, "src/modes/simple_select.js<>onMouseMove" #{"stopExtendedInteractions"}, "src/events.js<>keyup" #{"keyup"}, "src/lib/common_selectors.js<>isShiftMousedown" #{}, "src/events.js<>mouseout" #{"mouseout"}, "src/lib/features_at.js<>buffer" #{"id" "META_TYPES" "buffer" "const" "meta" "add" "has" "ctx"}, "src/events.js<>actionState" #{"trash" "combineFeatures" "uncombineFeatures"}, "src/lib/string_set.js<>clear" #{}, "src/modes/object_to_mode.js<>stop" #{"onStop"}, "src/constants.js<>events" #{"delete" "actionable" "render"}, "src/modes/simple_select.js<>onMouseDown" #{"startOnActiveFeature" "isShiftMousedown" "startBoxSelect" "isActiveFeature"}, "src/lib/mode_handler.js<>mouseout" #{"mouseout"}, "src/modes/draw_polygon.js<>onTap" #{"clickOnVertex" "isVertex" "clickAnywhere"}, "src/events.js<>touchend" #{"const" "touchend" "ctx" "tap"}, "src/modes/draw_point.js<>stopDrawingAndRemove" #{"id" "changeMode" "modes"}, "src/constants.js<>modes" #{}, "src/feature_types/feature.js<>setProperty" #{}, "src/lib/features_at.js<>META_TYPES" #{"meta"}, "src/lib/common_selectors.js<>isEnterKey" #{}, "src/lib/string_set.js<>function" #{"let" "add"}, "src/modes/draw_line_string.js<>onStop" #{"enable" "id" "removeCoordinate" "events" "isValid" "changeMode" "toGeoJSON" "modes"}, "src/modes/index.js<>export" #{}, "src/lib/sort_features.js<>const" #{}, "src/events.js<>nextModeOptions" #{"stop" "const" "events" "nextModeOptions" "render" "modes" "ctx"}, "src/lib/string_set.js<>delete" #{"delete" "has"}, "src/events.js<>mousedrag" #{"drag" "events"}, "src/lib/common_selectors.js<>isTrue" #{}, "src/modes/draw_line_string.js<>onMouseMove" #{"cursors" "isVertex" "updateCoordinate"}, "src/modes/draw_polygon.js<>onMouseMove" #{"cursors" "isVertex" "updateCoordinate"}, "src/feature_types/line_string.js<>addCoordinate" #{"id" "const" "changed"}, "src/lib/double_click_zoom.js<>disable" #{"disable" "ctx"}, "src/lib/string_set.js<>prototype" #{"const"}, "src/api.js<>delete" #{"getMode" "delete" "getSelectedIds" "events" "changeMode" "render" "api" "modes" "ctx"}, "src/modes/draw_line_string.js<>toDisplayFeatures" #{"id" "const" "meta" "activeStates"}, "src/feature_types/multi_feature.js<>action" #{"const" "action"}, "src/constants.js<>cursors" #{"drag" "add"}, "src/lib/common_selectors.js<>isOfMetaType" #{"const" "function" "meta"}, "src/modes/simple_select.js<>onSetup" #{"trash" "fireActionable" "combineFeatures" "id" "uncombineFeatures" "const"}, "src/feature_types/multi_feature.js<>getFeatures" #{}, "src/lib/sort_features.js<>function" #{"const" "geojsonTypes"}, "src/modes/draw_line_string.js<>onSetup" #{"trash" "types" "let" "cursors" "const" "start" "disable" "geojsonTypes" "addCoordinate"}, "src/constants.js<>meta" #{}, "src/events.js<>mouseup" #{"click" "mouseup" "const" "ctx"}, "src/feature_types/point.js<>getCoordinate" #{"getCoordinates"}, "src/modes/draw_point.js<>onStop" #{"getCoordinate" "id"}, "src/modes/simple_select.js<>toDisplayFeatures" #{"fireActionable" "id" "createSupplementaryPoints" "geojsonTypes" "activeStates"}}}
   :ui {:closed-dirs {"src/modes" true
                      "src/lib/sort_features.js" true
                      "src/lib/get_features_and_set_cursor.js" true
                      "src/lib/constrain_feature_movement.js" true
                      "src/store.js" true
                      "src/modes/draw_polygon.js" true
                      "src/feature_types/feature.js" true
                      "src/events.js" true
                      "src/lib/string_sets_are_equal.js" true
                      "src/lib/euclidean_distance.js" true
                      "src/feature_types/line_string.js" true
                      "src/lib/string_set.js" true
                      "src/lib/common_selectors.js" true
                      "src/modes/draw_point.js" true
                      "src/lib/mode_handler.js" true
                      "src/lib/is_tap.js" true
                      "src/render.js" true
                      "src/feature_types/polygon.js" true
                      "src/feature_types" true
                      "src/api.js" true
                      "src/lib/double_click_zoom.js" true
                      "src/modes/draw_line_string.js" true
                      "src/lib/move_features.js" true
                      "src/feature_types/multi_feature.js" true
                      "src/lib" true
                      "src/setup.js" true
                      "src/modes/simple_select.js" true
                      "src/modes/index.js" true
                      "src/modes/mode_interface_accessors.js" true
                      "src/lib/is_event_at_coordinates.js" true
                      "src/lib/create_supplementary_points.js" true
                      "src/lib/is_click.js" true
                      "src/feature_types/point.js" true
                      "src/modes/object_to_mode.js" true
                      "src/lib/features_at.js" true
                      "src/options.js" true
                      "src/lib/create_midpoint.js" true
                      "src/constants.js" true}
        }
   })

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

(defcard-rg directory-structure-card
  (card-component
    [looset-diagram/directory-structure-component])
  {:hidden? (reagent/atom false)})

(defcard-rg visjs-card
  (card-component
    [looset-diagram/visjs-component])
  {:hidden? (reagent/atom false)})

(defn-traced graph-updated
  [app-state [event new-graph]]
  (assoc-in app-state [:domain :graph] (cljs.reader/read-string new-graph)))
(re-frame/reg-event-db ::graph-updated graph-updated)

(defcard-rg dot-string-input-card
  (card-component
    [:<>
     [:input {:onBlur #(>evt [::graph-updated (-> % .-target .-value)])}]])
  {:hidden? (reagent/atom false)})

(deftest foo-test
  (testing "Testing"
    (is (= 3
           (+ 1 1))
        "Not right..")))

(comment
  )
