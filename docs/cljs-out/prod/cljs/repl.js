// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20934){
var map__20935 = p__20934;
var map__20935__$1 = (((((!((map__20935 == null))))?(((((map__20935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20935):map__20935);
var m = map__20935__$1;
var n = cljs.core.get.call(null,map__20935__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20937_20969 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20938_20970 = null;
var count__20939_20971 = (0);
var i__20940_20972 = (0);
while(true){
if((i__20940_20972 < count__20939_20971)){
var f_20973 = cljs.core._nth.call(null,chunk__20938_20970,i__20940_20972);
cljs.core.println.call(null,"  ",f_20973);


var G__20974 = seq__20937_20969;
var G__20975 = chunk__20938_20970;
var G__20976 = count__20939_20971;
var G__20977 = (i__20940_20972 + (1));
seq__20937_20969 = G__20974;
chunk__20938_20970 = G__20975;
count__20939_20971 = G__20976;
i__20940_20972 = G__20977;
continue;
} else {
var temp__5735__auto___20978 = cljs.core.seq.call(null,seq__20937_20969);
if(temp__5735__auto___20978){
var seq__20937_20979__$1 = temp__5735__auto___20978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20937_20979__$1)){
var c__4609__auto___20980 = cljs.core.chunk_first.call(null,seq__20937_20979__$1);
var G__20981 = cljs.core.chunk_rest.call(null,seq__20937_20979__$1);
var G__20982 = c__4609__auto___20980;
var G__20983 = cljs.core.count.call(null,c__4609__auto___20980);
var G__20984 = (0);
seq__20937_20969 = G__20981;
chunk__20938_20970 = G__20982;
count__20939_20971 = G__20983;
i__20940_20972 = G__20984;
continue;
} else {
var f_20985 = cljs.core.first.call(null,seq__20937_20979__$1);
cljs.core.println.call(null,"  ",f_20985);


var G__20986 = cljs.core.next.call(null,seq__20937_20979__$1);
var G__20987 = null;
var G__20988 = (0);
var G__20989 = (0);
seq__20937_20969 = G__20986;
chunk__20938_20970 = G__20987;
count__20939_20971 = G__20988;
i__20940_20972 = G__20989;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20990 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20990);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20990)))?cljs.core.second.call(null,arglists_20990):arglists_20990));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20941_20991 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20942_20992 = null;
var count__20943_20993 = (0);
var i__20944_20994 = (0);
while(true){
if((i__20944_20994 < count__20943_20993)){
var vec__20955_20995 = cljs.core._nth.call(null,chunk__20942_20992,i__20944_20994);
var name_20996 = cljs.core.nth.call(null,vec__20955_20995,(0),null);
var map__20958_20997 = cljs.core.nth.call(null,vec__20955_20995,(1),null);
var map__20958_20998__$1 = (((((!((map__20958_20997 == null))))?(((((map__20958_20997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20958_20997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20958_20997):map__20958_20997);
var doc_20999 = cljs.core.get.call(null,map__20958_20998__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21000 = cljs.core.get.call(null,map__20958_20998__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20996);

cljs.core.println.call(null," ",arglists_21000);

if(cljs.core.truth_(doc_20999)){
cljs.core.println.call(null," ",doc_20999);
} else {
}


var G__21001 = seq__20941_20991;
var G__21002 = chunk__20942_20992;
var G__21003 = count__20943_20993;
var G__21004 = (i__20944_20994 + (1));
seq__20941_20991 = G__21001;
chunk__20942_20992 = G__21002;
count__20943_20993 = G__21003;
i__20944_20994 = G__21004;
continue;
} else {
var temp__5735__auto___21005 = cljs.core.seq.call(null,seq__20941_20991);
if(temp__5735__auto___21005){
var seq__20941_21006__$1 = temp__5735__auto___21005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20941_21006__$1)){
var c__4609__auto___21007 = cljs.core.chunk_first.call(null,seq__20941_21006__$1);
var G__21008 = cljs.core.chunk_rest.call(null,seq__20941_21006__$1);
var G__21009 = c__4609__auto___21007;
var G__21010 = cljs.core.count.call(null,c__4609__auto___21007);
var G__21011 = (0);
seq__20941_20991 = G__21008;
chunk__20942_20992 = G__21009;
count__20943_20993 = G__21010;
i__20944_20994 = G__21011;
continue;
} else {
var vec__20960_21012 = cljs.core.first.call(null,seq__20941_21006__$1);
var name_21013 = cljs.core.nth.call(null,vec__20960_21012,(0),null);
var map__20963_21014 = cljs.core.nth.call(null,vec__20960_21012,(1),null);
var map__20963_21015__$1 = (((((!((map__20963_21014 == null))))?(((((map__20963_21014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20963_21014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20963_21014):map__20963_21014);
var doc_21016 = cljs.core.get.call(null,map__20963_21015__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21017 = cljs.core.get.call(null,map__20963_21015__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21013);

cljs.core.println.call(null," ",arglists_21017);

if(cljs.core.truth_(doc_21016)){
cljs.core.println.call(null," ",doc_21016);
} else {
}


var G__21018 = cljs.core.next.call(null,seq__20941_21006__$1);
var G__21019 = null;
var G__21020 = (0);
var G__21021 = (0);
seq__20941_20991 = G__21018;
chunk__20942_20992 = G__21019;
count__20943_20993 = G__21020;
i__20944_20994 = G__21021;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__20965 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20966 = null;
var count__20967 = (0);
var i__20968 = (0);
while(true){
if((i__20968 < count__20967)){
var role = cljs.core._nth.call(null,chunk__20966,i__20968);
var temp__5735__auto___21022__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___21022__$1)){
var spec_21023 = temp__5735__auto___21022__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21023));
} else {
}


var G__21024 = seq__20965;
var G__21025 = chunk__20966;
var G__21026 = count__20967;
var G__21027 = (i__20968 + (1));
seq__20965 = G__21024;
chunk__20966 = G__21025;
count__20967 = G__21026;
i__20968 = G__21027;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__20965);
if(temp__5735__auto____$1){
var seq__20965__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20965__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__20965__$1);
var G__21028 = cljs.core.chunk_rest.call(null,seq__20965__$1);
var G__21029 = c__4609__auto__;
var G__21030 = cljs.core.count.call(null,c__4609__auto__);
var G__21031 = (0);
seq__20965 = G__21028;
chunk__20966 = G__21029;
count__20967 = G__21030;
i__20968 = G__21031;
continue;
} else {
var role = cljs.core.first.call(null,seq__20965__$1);
var temp__5735__auto___21032__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___21032__$2)){
var spec_21033 = temp__5735__auto___21032__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21033));
} else {
}


var G__21034 = cljs.core.next.call(null,seq__20965__$1);
var G__21035 = null;
var G__21036 = (0);
var G__21037 = (0);
seq__20965 = G__21034;
chunk__20966 = G__21035;
count__20967 = G__21036;
i__20968 = G__21037;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21038 = cljs.core.conj.call(null,via,t);
var G__21039 = cljs.core.ex_cause.call(null,t);
via = G__21038;
t = G__21039;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21042 = datafied_throwable;
var map__21042__$1 = (((((!((map__21042 == null))))?(((((map__21042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21042):map__21042);
var via = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21042__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21043 = cljs.core.last.call(null,via);
var map__21043__$1 = (((((!((map__21043 == null))))?(((((map__21043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21043):map__21043);
var type = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21043__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21044 = data;
var map__21044__$1 = (((((!((map__21044 == null))))?(((((map__21044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21044):map__21044);
var problems = cljs.core.get.call(null,map__21044__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21044__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21044__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21045 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21045__$1 = (((((!((map__21045 == null))))?(((((map__21045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21045):map__21045);
var top_data = map__21045__$1;
var source = cljs.core.get.call(null,map__21045__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21050 = phase;
var G__21050__$1 = (((G__21050 instanceof cljs.core.Keyword))?G__21050.fqn:null);
switch (G__21050__$1) {
case "read-source":
var map__21051 = data;
var map__21051__$1 = (((((!((map__21051 == null))))?(((((map__21051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21051):map__21051);
var line = cljs.core.get.call(null,map__21051__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21051__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21053 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21053__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21053,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21053);
var G__21053__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21053__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21053__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21053__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21054 = top_data;
var G__21054__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21054,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21054);
var G__21054__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21054__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21054__$1);
var G__21054__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21054__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21054__$2);
var G__21054__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21054__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21054__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21054__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21054__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21055 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21055,(0),null);
var method = cljs.core.nth.call(null,vec__21055,(1),null);
var file = cljs.core.nth.call(null,vec__21055,(2),null);
var line = cljs.core.nth.call(null,vec__21055,(3),null);
var G__21058 = top_data;
var G__21058__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21058,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21058);
var G__21058__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21058__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21058__$1);
var G__21058__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__21058__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21058__$2);
var G__21058__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21058__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21058__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21058__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21058__$4;
}

break;
case "execution":
var vec__21059 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21059,(0),null);
var method = cljs.core.nth.call(null,vec__21059,(1),null);
var file = cljs.core.nth.call(null,vec__21059,(2),null);
var line = cljs.core.nth.call(null,vec__21059,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__21041_SHARP_){
var or__4185__auto__ = (p1__21041_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21041_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__21062 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21062__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21062,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21062);
var G__21062__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21062__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21062__$1);
var G__21062__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__21062__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21062__$2);
var G__21062__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21062__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21062__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21062__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21062__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21050__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21066){
var map__21067 = p__21066;
var map__21067__$1 = (((((!((map__21067 == null))))?(((((map__21067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21067):map__21067);
var triage_data = map__21067__$1;
var phase = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21067__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21069 = phase;
var G__21069__$1 = (((G__21069 instanceof cljs.core.Keyword))?G__21069.fqn:null);
switch (G__21069__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21070_21079 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21071_21080 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21072_21081 = true;
var _STAR_print_fn_STAR__temp_val__21073_21082 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21072_21081);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21073_21082);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21064_SHARP_){
return cljs.core.dissoc.call(null,p1__21064_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21071_21080);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21070_21079);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21074_21083 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21075_21084 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21076_21085 = true;
var _STAR_print_fn_STAR__temp_val__21077_21086 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21076_21085);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21077_21086);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21065_SHARP_){
return cljs.core.dissoc.call(null,p1__21065_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21075_21084);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21074_21083);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21069__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
