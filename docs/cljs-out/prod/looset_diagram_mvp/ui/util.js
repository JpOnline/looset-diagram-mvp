// Compiled by ClojureScript 1.10.597 {}
goog.provide('looset_diagram_mvp.ui.util');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
looset_diagram_mvp.ui.util._LT_sub = cljs.core.comp.call(null,cljs.core.deref,re_frame.core.subscribe);
looset_diagram_mvp.ui.util._GT_evt = re_frame.core.dispatch;
looset_diagram_mvp.ui.util.error_boundary = (function looset_diagram_mvp$ui$util$error_boundary(){
var error = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (this$,e,info){
return null;
}),new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),(function (e){
cljs.core.reset_BANG_.call(null,error,e);

return ({});
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__10265__delegate = function (p__10262,children){
var map__10263 = p__10262;
var map__10263__$1 = (((((!((map__10263 == null))))?(((((map__10263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10263):map__10263);
var if_error = cljs.core.get.call(null,map__10263__$1,new cljs.core.Keyword(null,"if-error","if-error",-1992288515));
if(cljs.core.truth_(cljs.core.deref.call(null,error))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),if_error], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.call(null,(function (p1__10261_SHARP_,p2__10260_SHARP_){
return cljs.core.with_meta.call(null,p2__10260_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__10261_SHARP_], null));
}),children)], null);
}
};
var G__10265 = function (p__10262,var_args){
var children = null;
if (arguments.length > 1) {
var G__10266__i = 0, G__10266__a = new Array(arguments.length -  1);
while (G__10266__i < G__10266__a.length) {G__10266__a[G__10266__i] = arguments[G__10266__i + 1]; ++G__10266__i;}
  children = new cljs.core.IndexedSeq(G__10266__a,0,null);
} 
return G__10265__delegate.call(this,p__10262,children);};
G__10265.cljs$lang$maxFixedArity = 1;
G__10265.cljs$lang$applyTo = (function (arglist__10267){
var p__10262 = cljs.core.first(arglist__10267);
var children = cljs.core.rest(arglist__10267);
return G__10265__delegate(p__10262,children);
});
G__10265.cljs$core$IFn$_invoke$arity$variadic = G__10265__delegate;
return G__10265;
})()
], null));
});
/**
 * Wrap component in the create-class fn so the react component-did-mount
 *   hook can be used.
 */
looset_diagram_mvp.ui.util.with_mount_fn = (function looset_diagram_mvp$ui$util$with_mount_fn(p__10268){
var vec__10269 = p__10268;
var n = cljs.core.nth.call(null,vec__10269,(0),null);
var map__10272 = cljs.core.nth.call(null,vec__10269,(1),null);
var map__10272__$1 = (((((!((map__10272 == null))))?(((((map__10272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10272):map__10272);
var component_did_mount = cljs.core.get.call(null,map__10272__$1,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518));
var to_render = vec__10269;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.update_in.call(null,to_render,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518)));
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),component_did_mount], null));
});
looset_diagram_mvp.ui.util.t = (function looset_diagram_mvp$ui$util$t(){
return " util test";
});

//# sourceMappingURL=util.js.map
