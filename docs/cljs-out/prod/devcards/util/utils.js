// Compiled by ClojureScript 1.10.597 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11591_11595 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11592_11596 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11593_11597 = true;
var _STAR_print_fn_STAR__temp_val__11594_11598 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11593_11597);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11594_11598);

try{cljs.pprint.pprint.call(null,obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11592_11596);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11591_11595);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
}catch (e11589){if((e11589 instanceof Error)){
var e1 = e11589;
try{return obj.toString();
}catch (e11590){if((e11590 instanceof Error)){
var e2 = e11590;
return "<<Un-printable Type>>";
} else {
throw e11590;

}
}} else {
throw e11589;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__11599 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__11600 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__11600);

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__11599);
}});

//# sourceMappingURL=utils.js.map
