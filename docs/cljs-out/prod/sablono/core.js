// Compiled by ClojureScript 1.10.597 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__17054__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17051 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__17052 = cljs.core.seq.call(null,vec__17051);
var first__17053 = cljs.core.first.call(null,seq__17052);
var seq__17052__$1 = cljs.core.next.call(null,seq__17052);
var tag = first__17053;
var body = seq__17052__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17055__i = 0, G__17055__a = new Array(arguments.length -  0);
while (G__17055__i < G__17055__a.length) {G__17055__a[G__17055__i] = arguments[G__17055__i + 0]; ++G__17055__i;}
  args = new cljs.core.IndexedSeq(G__17055__a,0,null);
} 
return G__17054__delegate.call(this,args);};
G__17054.cljs$lang$maxFixedArity = 0;
G__17054.cljs$lang$applyTo = (function (arglist__17056){
var args = cljs.core.seq(arglist__17056);
return G__17054__delegate(args);
});
G__17054.cljs$core$IFn$_invoke$arity$variadic = G__17054__delegate;
return G__17054;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__17057(s__17058){
return (new cljs.core.LazySeq(null,(function (){
var s__17058__$1 = s__17058;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__17058__$1);
if(temp__5735__auto__){
var s__17058__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17058__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__17058__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__17060 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__17059 = (0);
while(true){
if((i__17059 < size__4581__auto__)){
var args = cljs.core._nth.call(null,c__4580__auto__,i__17059);
cljs.core.chunk_append.call(null,b__17060,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17061 = (i__17059 + (1));
i__17059 = G__17061;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17060),sablono$core$update_arglists_$_iter__17057.call(null,cljs.core.chunk_rest.call(null,s__17058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17060),null);
}
} else {
var args = cljs.core.first.call(null,s__17058__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17057.call(null,cljs.core.rest.call(null,s__17058__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___17067 = arguments.length;
var i__4790__auto___17068 = (0);
while(true){
if((i__4790__auto___17068 < len__4789__auto___17067)){
args__4795__auto__.push((arguments[i__4790__auto___17068]));

var G__17069 = (i__4790__auto___17068 + (1));
i__4790__auto___17068 = G__17069;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__17063(s__17064){
return (new cljs.core.LazySeq(null,(function (){
var s__17064__$1 = s__17064;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__17064__$1);
if(temp__5735__auto__){
var s__17064__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17064__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__17064__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__17066 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__17065 = (0);
while(true){
if((i__17065 < size__4581__auto__)){
var style = cljs.core._nth.call(null,c__4580__auto__,i__17065);
cljs.core.chunk_append.call(null,b__17066,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17070 = (i__17065 + (1));
i__17065 = G__17070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17066),sablono$core$iter__17063.call(null,cljs.core.chunk_rest.call(null,s__17064__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17066),null);
}
} else {
var style = cljs.core.first.call(null,s__17064__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17063.call(null,cljs.core.rest.call(null,s__17064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq17062){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17062));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to17071 = (function sablono$core$link_to17071(var_args){
var args__4795__auto__ = [];
var len__4789__auto___17074 = arguments.length;
var i__4790__auto___17075 = (0);
while(true){
if((i__4790__auto___17075 < len__4789__auto___17074)){
args__4795__auto__.push((arguments[i__4790__auto___17075]));

var G__17076 = (i__4790__auto___17075 + (1));
i__4790__auto___17075 = G__17076;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to17071.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to17071.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to17071.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to17071.cljs$lang$applyTo = (function (seq17072){
var G__17073 = cljs.core.first.call(null,seq17072);
var seq17072__$1 = cljs.core.next.call(null,seq17072);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17073,seq17072__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17071);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17077 = (function sablono$core$mail_to17077(var_args){
var args__4795__auto__ = [];
var len__4789__auto___17084 = arguments.length;
var i__4790__auto___17085 = (0);
while(true){
if((i__4790__auto___17085 < len__4789__auto___17084)){
args__4795__auto__.push((arguments[i__4790__auto___17085]));

var G__17086 = (i__4790__auto___17085 + (1));
i__4790__auto___17085 = G__17086;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to17077.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to17077.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17080){
var vec__17081 = p__17080;
var content = cljs.core.nth.call(null,vec__17081,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to17077.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to17077.cljs$lang$applyTo = (function (seq17078){
var G__17079 = cljs.core.first.call(null,seq17078);
var seq17078__$1 = cljs.core.next.call(null,seq17078);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17079,seq17078__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17077);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17087 = (function sablono$core$unordered_list17087(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list17087_$_iter__17088(s__17089){
return (new cljs.core.LazySeq(null,(function (){
var s__17089__$1 = s__17089;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__17089__$1);
if(temp__5735__auto__){
var s__17089__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17089__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__17089__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__17091 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__17090 = (0);
while(true){
if((i__17090 < size__4581__auto__)){
var x = cljs.core._nth.call(null,c__4580__auto__,i__17090);
cljs.core.chunk_append.call(null,b__17091,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17092 = (i__17090 + (1));
i__17090 = G__17092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17091),sablono$core$unordered_list17087_$_iter__17088.call(null,cljs.core.chunk_rest.call(null,s__17089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17091),null);
}
} else {
var x = cljs.core.first.call(null,s__17089__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17087_$_iter__17088.call(null,cljs.core.rest.call(null,s__17089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17087);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17093 = (function sablono$core$ordered_list17093(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list17093_$_iter__17094(s__17095){
return (new cljs.core.LazySeq(null,(function (){
var s__17095__$1 = s__17095;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__17095__$1);
if(temp__5735__auto__){
var s__17095__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17095__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__17095__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__17097 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__17096 = (0);
while(true){
if((i__17096 < size__4581__auto__)){
var x = cljs.core._nth.call(null,c__4580__auto__,i__17096);
cljs.core.chunk_append.call(null,b__17097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17098 = (i__17096 + (1));
i__17096 = G__17098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17097),sablono$core$ordered_list17093_$_iter__17094.call(null,cljs.core.chunk_rest.call(null,s__17095__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17097),null);
}
} else {
var x = cljs.core.first.call(null,s__17095__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17093_$_iter__17094.call(null,cljs.core.rest.call(null,s__17095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17093);
/**
 * Create an image element.
 */
sablono.core.image17099 = (function sablono$core$image17099(var_args){
var G__17101 = arguments.length;
switch (G__17101) {
case 1:
return sablono.core.image17099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image17099.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image17099.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image17099.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17099);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17103_SHARP_,p2__17104_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17103_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17104_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17105_SHARP_,p2__17106_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17105_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17106_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__17108 = arguments.length;
switch (G__17108) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field17110 = (function sablono$core$color_field17110(var_args){
var G__17112 = arguments.length;
switch (G__17112) {
case 1:
return sablono.core.color_field17110.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17110.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field17110.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__17041__auto__);
}));

(sablono.core.color_field17110.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.color_field17110.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17110);

/**
 * Creates a date input field.
 */
sablono.core.date_field17113 = (function sablono$core$date_field17113(var_args){
var G__17115 = arguments.length;
switch (G__17115) {
case 1:
return sablono.core.date_field17113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field17113.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__17041__auto__);
}));

(sablono.core.date_field17113.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.date_field17113.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17113);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17116 = (function sablono$core$datetime_field17116(var_args){
var G__17118 = arguments.length;
switch (G__17118) {
case 1:
return sablono.core.datetime_field17116.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17116.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field17116.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__17041__auto__);
}));

(sablono.core.datetime_field17116.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.datetime_field17116.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17116);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17119 = (function sablono$core$datetime_local_field17119(var_args){
var G__17121 = arguments.length;
switch (G__17121) {
case 1:
return sablono.core.datetime_local_field17119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field17119.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__17041__auto__);
}));

(sablono.core.datetime_local_field17119.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.datetime_local_field17119.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17119);

/**
 * Creates a email input field.
 */
sablono.core.email_field17122 = (function sablono$core$email_field17122(var_args){
var G__17124 = arguments.length;
switch (G__17124) {
case 1:
return sablono.core.email_field17122.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17122.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field17122.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__17041__auto__);
}));

(sablono.core.email_field17122.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.email_field17122.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17122);

/**
 * Creates a file input field.
 */
sablono.core.file_field17125 = (function sablono$core$file_field17125(var_args){
var G__17127 = arguments.length;
switch (G__17127) {
case 1:
return sablono.core.file_field17125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field17125.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__17041__auto__);
}));

(sablono.core.file_field17125.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.file_field17125.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17125);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17128 = (function sablono$core$hidden_field17128(var_args){
var G__17130 = arguments.length;
switch (G__17130) {
case 1:
return sablono.core.hidden_field17128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field17128.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__17041__auto__);
}));

(sablono.core.hidden_field17128.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.hidden_field17128.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17128);

/**
 * Creates a month input field.
 */
sablono.core.month_field17131 = (function sablono$core$month_field17131(var_args){
var G__17133 = arguments.length;
switch (G__17133) {
case 1:
return sablono.core.month_field17131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field17131.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__17041__auto__);
}));

(sablono.core.month_field17131.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.month_field17131.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17131);

/**
 * Creates a number input field.
 */
sablono.core.number_field17134 = (function sablono$core$number_field17134(var_args){
var G__17136 = arguments.length;
switch (G__17136) {
case 1:
return sablono.core.number_field17134.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17134.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field17134.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__17041__auto__);
}));

(sablono.core.number_field17134.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.number_field17134.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17134);

/**
 * Creates a password input field.
 */
sablono.core.password_field17137 = (function sablono$core$password_field17137(var_args){
var G__17139 = arguments.length;
switch (G__17139) {
case 1:
return sablono.core.password_field17137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field17137.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__17041__auto__);
}));

(sablono.core.password_field17137.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.password_field17137.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17137);

/**
 * Creates a range input field.
 */
sablono.core.range_field17140 = (function sablono$core$range_field17140(var_args){
var G__17142 = arguments.length;
switch (G__17142) {
case 1:
return sablono.core.range_field17140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field17140.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__17041__auto__);
}));

(sablono.core.range_field17140.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.range_field17140.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17140);

/**
 * Creates a search input field.
 */
sablono.core.search_field17143 = (function sablono$core$search_field17143(var_args){
var G__17145 = arguments.length;
switch (G__17145) {
case 1:
return sablono.core.search_field17143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field17143.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__17041__auto__);
}));

(sablono.core.search_field17143.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.search_field17143.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17143);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17146 = (function sablono$core$tel_field17146(var_args){
var G__17148 = arguments.length;
switch (G__17148) {
case 1:
return sablono.core.tel_field17146.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17146.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field17146.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__17041__auto__);
}));

(sablono.core.tel_field17146.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.tel_field17146.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17146);

/**
 * Creates a text input field.
 */
sablono.core.text_field17149 = (function sablono$core$text_field17149(var_args){
var G__17151 = arguments.length;
switch (G__17151) {
case 1:
return sablono.core.text_field17149.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17149.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field17149.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__17041__auto__);
}));

(sablono.core.text_field17149.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.text_field17149.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17149);

/**
 * Creates a time input field.
 */
sablono.core.time_field17152 = (function sablono$core$time_field17152(var_args){
var G__17154 = arguments.length;
switch (G__17154) {
case 1:
return sablono.core.time_field17152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field17152.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__17041__auto__);
}));

(sablono.core.time_field17152.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.time_field17152.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17152);

/**
 * Creates a url input field.
 */
sablono.core.url_field17155 = (function sablono$core$url_field17155(var_args){
var G__17157 = arguments.length;
switch (G__17157) {
case 1:
return sablono.core.url_field17155.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17155.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field17155.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__17041__auto__);
}));

(sablono.core.url_field17155.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.url_field17155.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17155);

/**
 * Creates a week input field.
 */
sablono.core.week_field17158 = (function sablono$core$week_field17158(var_args){
var G__17160 = arguments.length;
switch (G__17160) {
case 1:
return sablono.core.week_field17158.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17158.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field17158.cljs$core$IFn$_invoke$arity$1 = (function (name__17041__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__17041__auto__);
}));

(sablono.core.week_field17158.cljs$core$IFn$_invoke$arity$2 = (function (name__17041__auto__,value__17042__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__17041__auto__,value__17042__auto__);
}));

(sablono.core.week_field17158.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17158);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17178 = (function sablono$core$check_box17178(var_args){
var G__17180 = arguments.length;
switch (G__17180) {
case 1:
return sablono.core.check_box17178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17178.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box17178.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box17178.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box17178.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box17178.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17178);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17182 = (function sablono$core$radio_button17182(var_args){
var G__17184 = arguments.length;
switch (G__17184) {
case 1:
return sablono.core.radio_button17182.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17182.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button17182.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button17182.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button17182.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button17182.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17182);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17186 = (function sablono$core$select_options17186(coll){
var iter__4582__auto__ = (function sablono$core$select_options17186_$_iter__17187(s__17188){
return (new cljs.core.LazySeq(null,(function (){
var s__17188__$1 = s__17188;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__17188__$1);
if(temp__5735__auto__){
var s__17188__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17188__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__17188__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__17190 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__17189 = (0);
while(true){
if((i__17189 < size__4581__auto__)){
var x = cljs.core._nth.call(null,c__4580__auto__,i__17189);
cljs.core.chunk_append.call(null,b__17190,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17191 = x;
var text = cljs.core.nth.call(null,vec__17191,(0),null);
var val = cljs.core.nth.call(null,vec__17191,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17191,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options17186.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17197 = (i__17189 + (1));
i__17189 = G__17197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17190),sablono$core$select_options17186_$_iter__17187.call(null,cljs.core.chunk_rest.call(null,s__17188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17190),null);
}
} else {
var x = cljs.core.first.call(null,s__17188__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17194 = x;
var text = cljs.core.nth.call(null,vec__17194,(0),null);
var val = cljs.core.nth.call(null,vec__17194,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17194,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options17186.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17186_$_iter__17187.call(null,cljs.core.rest.call(null,s__17188__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17186);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17198 = (function sablono$core$drop_down17198(var_args){
var G__17200 = arguments.length;
switch (G__17200) {
case 2:
return sablono.core.drop_down17198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17198.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down17198.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17198.call(null,name,options,null);
}));

(sablono.core.drop_down17198.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down17198.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17198);
/**
 * Creates a text area element.
 */
sablono.core.text_area17202 = (function sablono$core$text_area17202(var_args){
var G__17204 = arguments.length;
switch (G__17204) {
case 1:
return sablono.core.text_area17202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area17202.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area17202.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area17202.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17202);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17206 = (function sablono$core$label17206(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17206);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17207 = (function sablono$core$submit_button17207(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17207);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17208 = (function sablono$core$reset_button17208(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17208);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17209 = (function sablono$core$form_to17209(var_args){
var args__4795__auto__ = [];
var len__4789__auto___17216 = arguments.length;
var i__4790__auto___17217 = (0);
while(true){
if((i__4790__auto___17217 < len__4789__auto___17216)){
args__4795__auto__.push((arguments[i__4790__auto___17217]));

var G__17218 = (i__4790__auto___17217 + (1));
i__4790__auto___17217 = G__17218;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to17209.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to17209.cljs$core$IFn$_invoke$arity$variadic = (function (p__17212,body){
var vec__17213 = p__17212;
var method = cljs.core.nth.call(null,vec__17213,(0),null);
var action = cljs.core.nth.call(null,vec__17213,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to17209.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to17209.cljs$lang$applyTo = (function (seq17210){
var G__17211 = cljs.core.first.call(null,seq17210);
var seq17210__$1 = cljs.core.next.call(null,seq17210);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17211,seq17210__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17209);

//# sourceMappingURL=core.js.map
