// Compiled by ClojureScript 1.10.597 {}
goog.provide('looset_diagram_mvp.ui.main');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('looset_diagram_mvp.ui.looset_diagram');
goog.require('looset_diagram_mvp.ui.initial_state');
goog.require('jp_storage_module.firebase');
goog.require('re_frame.core');
goog.require('reagent.dom');
if(goog.DEBUG){
console.log("Debugger mode!");
} else {
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("looset-diagram-mvp.ui.main","set-app-state","looset-diagram-mvp.ui.main/set-app-state",234447611),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,p__13818){
var vec__13819 = p__13818;
var event = cljs.core.nth.call(null,vec__13819,(0),null);
var application_state = cljs.core.nth.call(null,vec__13819,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol(null,"application-state","application-state",-2060019929,null));

var opts__9835__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__9836__auto__ = application_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__9836__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"application-state","application-state",-2060019929,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__9836__auto__;
}catch (e13822){var e = e13822;
throw e;
}}):(function (_,p__13823){
var vec__13824 = p__13823;
var event = cljs.core.nth.call(null,vec__13824,(0),null);
var application_state = cljs.core.nth.call(null,vec__13824,(1),null);
return application_state;
})));
looset_diagram_mvp.ui.main.mount_app_element_BANG_ = (function looset_diagram_mvp$ui$main$mount_app_element_BANG_(){
if(goog.DEBUG){
re_frame.core.clear_subscription_cache_BANG_.call(null);
} else {
}

var temp__5735__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looset_diagram_mvp.ui.looset_diagram.view], null),el);
} else {
return null;
}
});
looset_diagram_mvp.ui.main.query_parameter = (function looset_diagram_mvp$ui$main$query_parameter(parameter){
return (new URLSearchParams(window.location.search)).get(parameter);
});
looset_diagram_mvp.ui.main.init_state_BANG_ = (function looset_diagram_mvp$ui$main$init_state_BANG_(state){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("looset-diagram-mvp.ui.main","set-app-state","looset-diagram-mvp.ui.main/set-app-state",234447611),state], null));

return looset_diagram_mvp.ui.main.mount_app_element_BANG_.call(null);
});
if((typeof looset_diagram_mvp !== 'undefined') && (typeof looset_diagram_mvp.ui !== 'undefined') && (typeof looset_diagram_mvp.ui.main !== 'undefined') && (typeof looset_diagram_mvp.ui.main.startup !== 'undefined')){
} else {
looset_diagram_mvp.ui.main.startup = (function (){var temp__5733__auto__ = looset_diagram_mvp.ui.main.query_parameter.call(null,"project");
if(cljs.core.truth_(temp__5733__auto__)){
var project_to_load = temp__5733__auto__;
return jp_storage_module.firebase.async_load.call(null,project_to_load,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__13827_SHARP_){
return looset_diagram_mvp.ui.main.init_state_BANG_.call(null,cljs.reader.read_string.call(null,p1__13827_SHARP_));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return looset_diagram_mvp.ui.main.init_state_BANG_.call(null,looset_diagram_mvp.ui.initial_state.initial_state);
})], null));
} else {
return looset_diagram_mvp.ui.main.init_state_BANG_.call(null,looset_diagram_mvp.ui.initial_state.initial_state);
}
})();
}

//# sourceMappingURL=main.js.map
