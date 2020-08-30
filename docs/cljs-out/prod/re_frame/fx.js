// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__9913 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__9914 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__9914);

try{try{var seq__9915 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__9916 = null;
var count__9917 = (0);
var i__9918 = (0);
while(true){
if((i__9918 < count__9917)){
var vec__9925 = cljs.core._nth.call(null,chunk__9916,i__9918);
var effect_key = cljs.core.nth.call(null,vec__9925,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9925,(1),null);
var temp__5733__auto___9947 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___9947)){
var effect_fn_9948 = temp__5733__auto___9947;
effect_fn_9948.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9949 = seq__9915;
var G__9950 = chunk__9916;
var G__9951 = count__9917;
var G__9952 = (i__9918 + (1));
seq__9915 = G__9949;
chunk__9916 = G__9950;
count__9917 = G__9951;
i__9918 = G__9952;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__9915);
if(temp__5735__auto__){
var seq__9915__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9915__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__9915__$1);
var G__9953 = cljs.core.chunk_rest.call(null,seq__9915__$1);
var G__9954 = c__4609__auto__;
var G__9955 = cljs.core.count.call(null,c__4609__auto__);
var G__9956 = (0);
seq__9915 = G__9953;
chunk__9916 = G__9954;
count__9917 = G__9955;
i__9918 = G__9956;
continue;
} else {
var vec__9928 = cljs.core.first.call(null,seq__9915__$1);
var effect_key = cljs.core.nth.call(null,vec__9928,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9928,(1),null);
var temp__5733__auto___9957 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___9957)){
var effect_fn_9958 = temp__5733__auto___9957;
effect_fn_9958.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9959 = cljs.core.next.call(null,seq__9915__$1);
var G__9960 = null;
var G__9961 = (0);
var G__9962 = (0);
seq__9915 = G__9959;
chunk__9916 = G__9960;
count__9917 = G__9961;
i__9918 = G__9962;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__9741__auto___9963 = re_frame.interop.now.call(null);
var duration__9742__auto___9964 = (end__9741__auto___9963 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9742__auto___9964,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__9741__auto___9963);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__9913);
}} else {
var seq__9931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__9932 = null;
var count__9933 = (0);
var i__9934 = (0);
while(true){
if((i__9934 < count__9933)){
var vec__9941 = cljs.core._nth.call(null,chunk__9932,i__9934);
var effect_key = cljs.core.nth.call(null,vec__9941,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9941,(1),null);
var temp__5733__auto___9965 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___9965)){
var effect_fn_9966 = temp__5733__auto___9965;
effect_fn_9966.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9967 = seq__9931;
var G__9968 = chunk__9932;
var G__9969 = count__9933;
var G__9970 = (i__9934 + (1));
seq__9931 = G__9967;
chunk__9932 = G__9968;
count__9933 = G__9969;
i__9934 = G__9970;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__9931);
if(temp__5735__auto__){
var seq__9931__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9931__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__9931__$1);
var G__9971 = cljs.core.chunk_rest.call(null,seq__9931__$1);
var G__9972 = c__4609__auto__;
var G__9973 = cljs.core.count.call(null,c__4609__auto__);
var G__9974 = (0);
seq__9931 = G__9971;
chunk__9932 = G__9972;
count__9933 = G__9973;
i__9934 = G__9974;
continue;
} else {
var vec__9944 = cljs.core.first.call(null,seq__9931__$1);
var effect_key = cljs.core.nth.call(null,vec__9944,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9944,(1),null);
var temp__5733__auto___9975 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___9975)){
var effect_fn_9976 = temp__5733__auto___9975;
effect_fn_9976.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9977 = cljs.core.next.call(null,seq__9931__$1);
var G__9978 = null;
var G__9979 = (0);
var G__9980 = (0);
seq__9931 = G__9977;
chunk__9932 = G__9978;
count__9933 = G__9979;
i__9934 = G__9980;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__9981 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__9982 = null;
var count__9983 = (0);
var i__9984 = (0);
while(true){
if((i__9984 < count__9983)){
var map__9989 = cljs.core._nth.call(null,chunk__9982,i__9984);
var map__9989__$1 = (((((!((map__9989 == null))))?(((((map__9989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9989):map__9989);
var effect = map__9989__$1;
var ms = cljs.core.get.call(null,map__9989__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9989__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9981,chunk__9982,count__9983,i__9984,map__9989,map__9989__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9981,chunk__9982,count__9983,i__9984,map__9989,map__9989__$1,effect,ms,dispatch))
,ms);
}


var G__9993 = seq__9981;
var G__9994 = chunk__9982;
var G__9995 = count__9983;
var G__9996 = (i__9984 + (1));
seq__9981 = G__9993;
chunk__9982 = G__9994;
count__9983 = G__9995;
i__9984 = G__9996;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__9981);
if(temp__5735__auto__){
var seq__9981__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9981__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__9981__$1);
var G__9997 = cljs.core.chunk_rest.call(null,seq__9981__$1);
var G__9998 = c__4609__auto__;
var G__9999 = cljs.core.count.call(null,c__4609__auto__);
var G__10000 = (0);
seq__9981 = G__9997;
chunk__9982 = G__9998;
count__9983 = G__9999;
i__9984 = G__10000;
continue;
} else {
var map__9991 = cljs.core.first.call(null,seq__9981__$1);
var map__9991__$1 = (((((!((map__9991 == null))))?(((((map__9991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9991):map__9991);
var effect = map__9991__$1;
var ms = cljs.core.get.call(null,map__9991__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9991__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9981,chunk__9982,count__9983,i__9984,map__9991,map__9991__$1,effect,ms,dispatch,seq__9981__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9981,chunk__9982,count__9983,i__9984,map__9991,map__9991__$1,effect,ms,dispatch,seq__9981__$1,temp__5735__auto__))
,ms);
}


var G__10001 = cljs.core.next.call(null,seq__9981__$1);
var G__10002 = null;
var G__10003 = (0);
var G__10004 = (0);
seq__9981 = G__10001;
chunk__9982 = G__10002;
count__9983 = G__10003;
i__9984 = G__10004;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__10005 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10006 = null;
var count__10007 = (0);
var i__10008 = (0);
while(true){
if((i__10008 < count__10007)){
var event = cljs.core._nth.call(null,chunk__10006,i__10008);
re_frame.router.dispatch.call(null,event);


var G__10009 = seq__10005;
var G__10010 = chunk__10006;
var G__10011 = count__10007;
var G__10012 = (i__10008 + (1));
seq__10005 = G__10009;
chunk__10006 = G__10010;
count__10007 = G__10011;
i__10008 = G__10012;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10005);
if(temp__5735__auto__){
var seq__10005__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10005__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__10005__$1);
var G__10013 = cljs.core.chunk_rest.call(null,seq__10005__$1);
var G__10014 = c__4609__auto__;
var G__10015 = cljs.core.count.call(null,c__4609__auto__);
var G__10016 = (0);
seq__10005 = G__10013;
chunk__10006 = G__10014;
count__10007 = G__10015;
i__10008 = G__10016;
continue;
} else {
var event = cljs.core.first.call(null,seq__10005__$1);
re_frame.router.dispatch.call(null,event);


var G__10017 = cljs.core.next.call(null,seq__10005__$1);
var G__10018 = null;
var G__10019 = (0);
var G__10020 = (0);
seq__10005 = G__10017;
chunk__10006 = G__10018;
count__10007 = G__10019;
i__10008 = G__10020;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__10021 = cljs.core.seq.call(null,value);
var chunk__10022 = null;
var count__10023 = (0);
var i__10024 = (0);
while(true){
if((i__10024 < count__10023)){
var event = cljs.core._nth.call(null,chunk__10022,i__10024);
clear_event.call(null,event);


var G__10025 = seq__10021;
var G__10026 = chunk__10022;
var G__10027 = count__10023;
var G__10028 = (i__10024 + (1));
seq__10021 = G__10025;
chunk__10022 = G__10026;
count__10023 = G__10027;
i__10024 = G__10028;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__10021);
if(temp__5735__auto__){
var seq__10021__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10021__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__10021__$1);
var G__10029 = cljs.core.chunk_rest.call(null,seq__10021__$1);
var G__10030 = c__4609__auto__;
var G__10031 = cljs.core.count.call(null,c__4609__auto__);
var G__10032 = (0);
seq__10021 = G__10029;
chunk__10022 = G__10030;
count__10023 = G__10031;
i__10024 = G__10032;
continue;
} else {
var event = cljs.core.first.call(null,seq__10021__$1);
clear_event.call(null,event);


var G__10033 = cljs.core.next.call(null,seq__10021__$1);
var G__10034 = null;
var G__10035 = (0);
var G__10036 = (0);
seq__10021 = G__10033;
chunk__10022 = G__10034;
count__10023 = G__10035;
i__10024 = G__10036;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
