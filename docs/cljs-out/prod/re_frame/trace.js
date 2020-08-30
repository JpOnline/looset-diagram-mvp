// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__9763){
var map__9764 = p__9763;
var map__9764__$1 = (((((!((map__9764 == null))))?(((((map__9764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9764):map__9764);
var operation = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__9766_9786 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__9767_9787 = null;
var count__9768_9788 = (0);
var i__9769_9789 = (0);
while(true){
if((i__9769_9789 < count__9768_9788)){
var vec__9778_9790 = cljs.core._nth.call(null,chunk__9767_9787,i__9769_9789);
var k_9791 = cljs.core.nth.call(null,vec__9778_9790,(0),null);
var cb_9792 = cljs.core.nth.call(null,vec__9778_9790,(1),null);
try{cb_9792.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9781){var e_9793 = e9781;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9791,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_9793);
}

var G__9794 = seq__9766_9786;
var G__9795 = chunk__9767_9787;
var G__9796 = count__9768_9788;
var G__9797 = (i__9769_9789 + (1));
seq__9766_9786 = G__9794;
chunk__9767_9787 = G__9795;
count__9768_9788 = G__9796;
i__9769_9789 = G__9797;
continue;
} else {
var temp__5735__auto___9798 = cljs.core.seq.call(null,seq__9766_9786);
if(temp__5735__auto___9798){
var seq__9766_9799__$1 = temp__5735__auto___9798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9766_9799__$1)){
var c__4609__auto___9800 = cljs.core.chunk_first.call(null,seq__9766_9799__$1);
var G__9801 = cljs.core.chunk_rest.call(null,seq__9766_9799__$1);
var G__9802 = c__4609__auto___9800;
var G__9803 = cljs.core.count.call(null,c__4609__auto___9800);
var G__9804 = (0);
seq__9766_9786 = G__9801;
chunk__9767_9787 = G__9802;
count__9768_9788 = G__9803;
i__9769_9789 = G__9804;
continue;
} else {
var vec__9782_9805 = cljs.core.first.call(null,seq__9766_9799__$1);
var k_9806 = cljs.core.nth.call(null,vec__9782_9805,(0),null);
var cb_9807 = cljs.core.nth.call(null,vec__9782_9805,(1),null);
try{cb_9807.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9785){var e_9808 = e9785;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9806,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_9808);
}

var G__9809 = cljs.core.next.call(null,seq__9766_9799__$1);
var G__9810 = null;
var G__9811 = (0);
var G__9812 = (0);
seq__9766_9786 = G__9809;
chunk__9767_9787 = G__9810;
count__9768_9788 = G__9811;
i__9769_9789 = G__9812;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
