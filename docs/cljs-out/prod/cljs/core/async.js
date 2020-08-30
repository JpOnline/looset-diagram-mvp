// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13339 = arguments.length;
switch (G__13339) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13340 = (function (f,blockable,meta13341){
this.f = f;
this.blockable = blockable;
this.meta13341 = meta13341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13342,meta13341__$1){
var self__ = this;
var _13342__$1 = this;
return (new cljs.core.async.t_cljs$core$async13340(self__.f,self__.blockable,meta13341__$1));
}));

(cljs.core.async.t_cljs$core$async13340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13342){
var self__ = this;
var _13342__$1 = this;
return self__.meta13341;
}));

(cljs.core.async.t_cljs$core$async13340.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13341","meta13341",729959140,null)], null);
}));

(cljs.core.async.t_cljs$core$async13340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13340");

(cljs.core.async.t_cljs$core$async13340.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async13340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13340.
 */
cljs.core.async.__GT_t_cljs$core$async13340 = (function cljs$core$async$__GT_t_cljs$core$async13340(f__$1,blockable__$1,meta13341){
return (new cljs.core.async.t_cljs$core$async13340(f__$1,blockable__$1,meta13341));
});

}

return (new cljs.core.async.t_cljs$core$async13340(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13346 = arguments.length;
switch (G__13346) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13349 = arguments.length;
switch (G__13349) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13352 = arguments.length;
switch (G__13352) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13354 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13354);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_13354);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13356 = arguments.length;
switch (G__13356) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___13358 = n;
var x_13359 = (0);
while(true){
if((x_13359 < n__4666__auto___13358)){
(a[x_13359] = (0));

var G__13360 = (x_13359 + (1));
x_13359 = G__13360;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13361 = (i + (1));
i = G__13361;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13362 = (function (flag,meta13363){
this.flag = flag;
this.meta13363 = meta13363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13364,meta13363__$1){
var self__ = this;
var _13364__$1 = this;
return (new cljs.core.async.t_cljs$core$async13362(self__.flag,meta13363__$1));
}));

(cljs.core.async.t_cljs$core$async13362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13364){
var self__ = this;
var _13364__$1 = this;
return self__.meta13363;
}));

(cljs.core.async.t_cljs$core$async13362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13363","meta13363",-1916911532,null)], null);
}));

(cljs.core.async.t_cljs$core$async13362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13362");

(cljs.core.async.t_cljs$core$async13362.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async13362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13362.
 */
cljs.core.async.__GT_t_cljs$core$async13362 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13362(flag__$1,meta13363){
return (new cljs.core.async.t_cljs$core$async13362(flag__$1,meta13363));
});

}

return (new cljs.core.async.t_cljs$core$async13362(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13365 = (function (flag,cb,meta13366){
this.flag = flag;
this.cb = cb;
this.meta13366 = meta13366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13367,meta13366__$1){
var self__ = this;
var _13367__$1 = this;
return (new cljs.core.async.t_cljs$core$async13365(self__.flag,self__.cb,meta13366__$1));
}));

(cljs.core.async.t_cljs$core$async13365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13367){
var self__ = this;
var _13367__$1 = this;
return self__.meta13366;
}));

(cljs.core.async.t_cljs$core$async13365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13366","meta13366",402900031,null)], null);
}));

(cljs.core.async.t_cljs$core$async13365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13365");

(cljs.core.async.t_cljs$core$async13365.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async13365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13365.
 */
cljs.core.async.__GT_t_cljs$core$async13365 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13365(flag__$1,cb__$1,meta13366){
return (new cljs.core.async.t_cljs$core$async13365(flag__$1,cb__$1,meta13366));
});

}

return (new cljs.core.async.t_cljs$core$async13365(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13368_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13368_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13369_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13369_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13370 = (i + (1));
i = G__13370;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___13376 = arguments.length;
var i__4790__auto___13377 = (0);
while(true){
if((i__4790__auto___13377 < len__4789__auto___13376)){
args__4795__auto__.push((arguments[i__4790__auto___13377]));

var G__13378 = (i__4790__auto___13377 + (1));
i__4790__auto___13377 = G__13378;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13373){
var map__13374 = p__13373;
var map__13374__$1 = (((((!((map__13374 == null))))?(((((map__13374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13374):map__13374);
var opts = map__13374__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13371){
var G__13372 = cljs.core.first.call(null,seq13371);
var seq13371__$1 = cljs.core.next.call(null,seq13371);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13372,seq13371__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13380 = arguments.length;
switch (G__13380) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13279__auto___13426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_13404){
var state_val_13405 = (state_13404[(1)]);
if((state_val_13405 === (7))){
var inst_13400 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
var statearr_13406_13427 = state_13404__$1;
(statearr_13406_13427[(2)] = inst_13400);

(statearr_13406_13427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (1))){
var state_13404__$1 = state_13404;
var statearr_13407_13428 = state_13404__$1;
(statearr_13407_13428[(2)] = null);

(statearr_13407_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (4))){
var inst_13383 = (state_13404[(7)]);
var inst_13383__$1 = (state_13404[(2)]);
var inst_13384 = (inst_13383__$1 == null);
var state_13404__$1 = (function (){var statearr_13408 = state_13404;
(statearr_13408[(7)] = inst_13383__$1);

return statearr_13408;
})();
if(cljs.core.truth_(inst_13384)){
var statearr_13409_13429 = state_13404__$1;
(statearr_13409_13429[(1)] = (5));

} else {
var statearr_13410_13430 = state_13404__$1;
(statearr_13410_13430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (13))){
var state_13404__$1 = state_13404;
var statearr_13411_13431 = state_13404__$1;
(statearr_13411_13431[(2)] = null);

(statearr_13411_13431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (6))){
var inst_13383 = (state_13404[(7)]);
var state_13404__$1 = state_13404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13404__$1,(11),to,inst_13383);
} else {
if((state_val_13405 === (3))){
var inst_13402 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13404__$1,inst_13402);
} else {
if((state_val_13405 === (12))){
var state_13404__$1 = state_13404;
var statearr_13412_13432 = state_13404__$1;
(statearr_13412_13432[(2)] = null);

(statearr_13412_13432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (2))){
var state_13404__$1 = state_13404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13404__$1,(4),from);
} else {
if((state_val_13405 === (11))){
var inst_13393 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
if(cljs.core.truth_(inst_13393)){
var statearr_13413_13433 = state_13404__$1;
(statearr_13413_13433[(1)] = (12));

} else {
var statearr_13414_13434 = state_13404__$1;
(statearr_13414_13434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (9))){
var state_13404__$1 = state_13404;
var statearr_13415_13435 = state_13404__$1;
(statearr_13415_13435[(2)] = null);

(statearr_13415_13435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (5))){
var state_13404__$1 = state_13404;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13416_13436 = state_13404__$1;
(statearr_13416_13436[(1)] = (8));

} else {
var statearr_13417_13437 = state_13404__$1;
(statearr_13417_13437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (14))){
var inst_13398 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
var statearr_13418_13438 = state_13404__$1;
(statearr_13418_13438[(2)] = inst_13398);

(statearr_13418_13438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (10))){
var inst_13390 = (state_13404[(2)]);
var state_13404__$1 = state_13404;
var statearr_13419_13439 = state_13404__$1;
(statearr_13419_13439[(2)] = inst_13390);

(statearr_13419_13439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13405 === (8))){
var inst_13387 = cljs.core.async.close_BANG_.call(null,to);
var state_13404__$1 = state_13404;
var statearr_13420_13440 = state_13404__$1;
(statearr_13420_13440[(2)] = inst_13387);

(statearr_13420_13440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_13421 = [null,null,null,null,null,null,null,null];
(statearr_13421[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_13421[(1)] = (1));

return statearr_13421;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_13404){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_13404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e13422){if((e13422 instanceof Object)){
var ex__13188__auto__ = e13422;
var statearr_13423_13441 = state_13404;
(statearr_13423_13441[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13442 = state_13404;
state_13404 = G__13442;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_13404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_13404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_13424 = f__13280__auto__.call(null);
(statearr_13424[(6)] = c__13279__auto___13426);

return statearr_13424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__13443){
var vec__13444 = p__13443;
var v = cljs.core.nth.call(null,vec__13444,(0),null);
var p = cljs.core.nth.call(null,vec__13444,(1),null);
var job = vec__13444;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13279__auto___13615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_13451){
var state_val_13452 = (state_13451[(1)]);
if((state_val_13452 === (1))){
var state_13451__$1 = state_13451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13451__$1,(2),res,v);
} else {
if((state_val_13452 === (2))){
var inst_13448 = (state_13451[(2)]);
var inst_13449 = cljs.core.async.close_BANG_.call(null,res);
var state_13451__$1 = (function (){var statearr_13453 = state_13451;
(statearr_13453[(7)] = inst_13448);

return statearr_13453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13451__$1,inst_13449);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0 = (function (){
var statearr_13454 = [null,null,null,null,null,null,null,null];
(statearr_13454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__);

(statearr_13454[(1)] = (1));

return statearr_13454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1 = (function (state_13451){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_13451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e13455){if((e13455 instanceof Object)){
var ex__13188__auto__ = e13455;
var statearr_13456_13616 = state_13451;
(statearr_13456_13616[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13617 = state_13451;
state_13451 = G__13617;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__ = function(state_13451){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1.call(this,state_13451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_13457 = f__13280__auto__.call(null);
(statearr_13457[(6)] = c__13279__auto___13615);

return statearr_13457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__13458){
var vec__13459 = p__13458;
var v = cljs.core.nth.call(null,vec__13459,(0),null);
var p = cljs.core.nth.call(null,vec__13459,(1),null);
var job = vec__13459;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___13618 = n;
var __13619 = (0);
while(true){
if((__13619 < n__4666__auto___13618)){
var G__13462_13620 = type;
var G__13462_13621__$1 = (((G__13462_13620 instanceof cljs.core.Keyword))?G__13462_13620.fqn:null);
switch (G__13462_13621__$1) {
case "compute":
var c__13279__auto___13623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13619,c__13279__auto___13623,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async){
return (function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = ((function (__13619,c__13279__auto___13623,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async){
return (function (state_13475){
var state_val_13476 = (state_13475[(1)]);
if((state_val_13476 === (1))){
var state_13475__$1 = state_13475;
var statearr_13477_13624 = state_13475__$1;
(statearr_13477_13624[(2)] = null);

(statearr_13477_13624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13476 === (2))){
var state_13475__$1 = state_13475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13475__$1,(4),jobs);
} else {
if((state_val_13476 === (3))){
var inst_13473 = (state_13475[(2)]);
var state_13475__$1 = state_13475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13475__$1,inst_13473);
} else {
if((state_val_13476 === (4))){
var inst_13465 = (state_13475[(2)]);
var inst_13466 = process.call(null,inst_13465);
var state_13475__$1 = state_13475;
if(cljs.core.truth_(inst_13466)){
var statearr_13478_13625 = state_13475__$1;
(statearr_13478_13625[(1)] = (5));

} else {
var statearr_13479_13626 = state_13475__$1;
(statearr_13479_13626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13476 === (5))){
var state_13475__$1 = state_13475;
var statearr_13480_13627 = state_13475__$1;
(statearr_13480_13627[(2)] = null);

(statearr_13480_13627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13476 === (6))){
var state_13475__$1 = state_13475;
var statearr_13481_13628 = state_13475__$1;
(statearr_13481_13628[(2)] = null);

(statearr_13481_13628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13476 === (7))){
var inst_13471 = (state_13475[(2)]);
var state_13475__$1 = state_13475;
var statearr_13482_13629 = state_13475__$1;
(statearr_13482_13629[(2)] = inst_13471);

(statearr_13482_13629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13619,c__13279__auto___13623,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async))
;
return ((function (__13619,switch__13184__auto__,c__13279__auto___13623,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0 = (function (){
var statearr_13483 = [null,null,null,null,null,null,null];
(statearr_13483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__);

(statearr_13483[(1)] = (1));

return statearr_13483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1 = (function (state_13475){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_13475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e13484){if((e13484 instanceof Object)){
var ex__13188__auto__ = e13484;
var statearr_13485_13630 = state_13475;
(statearr_13485_13630[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13631 = state_13475;
state_13475 = G__13631;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__ = function(state_13475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1.call(this,state_13475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__;
})()
;})(__13619,switch__13184__auto__,c__13279__auto___13623,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async))
})();
var state__13281__auto__ = (function (){var statearr_13486 = f__13280__auto__.call(null);
(statearr_13486[(6)] = c__13279__auto___13623);

return statearr_13486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(__13619,c__13279__auto___13623,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async))
);


break;
case "async":
var c__13279__auto___13632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13619,c__13279__auto___13632,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async){
return (function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = ((function (__13619,c__13279__auto___13632,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async){
return (function (state_13499){
var state_val_13500 = (state_13499[(1)]);
if((state_val_13500 === (1))){
var state_13499__$1 = state_13499;
var statearr_13501_13633 = state_13499__$1;
(statearr_13501_13633[(2)] = null);

(statearr_13501_13633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13500 === (2))){
var state_13499__$1 = state_13499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13499__$1,(4),jobs);
} else {
if((state_val_13500 === (3))){
var inst_13497 = (state_13499[(2)]);
var state_13499__$1 = state_13499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13499__$1,inst_13497);
} else {
if((state_val_13500 === (4))){
var inst_13489 = (state_13499[(2)]);
var inst_13490 = async.call(null,inst_13489);
var state_13499__$1 = state_13499;
if(cljs.core.truth_(inst_13490)){
var statearr_13502_13634 = state_13499__$1;
(statearr_13502_13634[(1)] = (5));

} else {
var statearr_13503_13635 = state_13499__$1;
(statearr_13503_13635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13500 === (5))){
var state_13499__$1 = state_13499;
var statearr_13504_13636 = state_13499__$1;
(statearr_13504_13636[(2)] = null);

(statearr_13504_13636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13500 === (6))){
var state_13499__$1 = state_13499;
var statearr_13505_13637 = state_13499__$1;
(statearr_13505_13637[(2)] = null);

(statearr_13505_13637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13500 === (7))){
var inst_13495 = (state_13499[(2)]);
var state_13499__$1 = state_13499;
var statearr_13506_13638 = state_13499__$1;
(statearr_13506_13638[(2)] = inst_13495);

(statearr_13506_13638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13619,c__13279__auto___13632,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async))
;
return ((function (__13619,switch__13184__auto__,c__13279__auto___13632,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0 = (function (){
var statearr_13507 = [null,null,null,null,null,null,null];
(statearr_13507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__);

(statearr_13507[(1)] = (1));

return statearr_13507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1 = (function (state_13499){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_13499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e13508){if((e13508 instanceof Object)){
var ex__13188__auto__ = e13508;
var statearr_13509_13639 = state_13499;
(statearr_13509_13639[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13640 = state_13499;
state_13499 = G__13640;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__ = function(state_13499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1.call(this,state_13499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__;
})()
;})(__13619,switch__13184__auto__,c__13279__auto___13632,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async))
})();
var state__13281__auto__ = (function (){var statearr_13510 = f__13280__auto__.call(null);
(statearr_13510[(6)] = c__13279__auto___13632);

return statearr_13510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(__13619,c__13279__auto___13632,G__13462_13620,G__13462_13621__$1,n__4666__auto___13618,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13462_13621__$1)].join('')));

}

var G__13641 = (__13619 + (1));
__13619 = G__13641;
continue;
} else {
}
break;
}

var c__13279__auto___13642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_13532){
var state_val_13533 = (state_13532[(1)]);
if((state_val_13533 === (7))){
var inst_13528 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
var statearr_13534_13643 = state_13532__$1;
(statearr_13534_13643[(2)] = inst_13528);

(statearr_13534_13643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (1))){
var state_13532__$1 = state_13532;
var statearr_13535_13644 = state_13532__$1;
(statearr_13535_13644[(2)] = null);

(statearr_13535_13644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (4))){
var inst_13513 = (state_13532[(7)]);
var inst_13513__$1 = (state_13532[(2)]);
var inst_13514 = (inst_13513__$1 == null);
var state_13532__$1 = (function (){var statearr_13536 = state_13532;
(statearr_13536[(7)] = inst_13513__$1);

return statearr_13536;
})();
if(cljs.core.truth_(inst_13514)){
var statearr_13537_13645 = state_13532__$1;
(statearr_13537_13645[(1)] = (5));

} else {
var statearr_13538_13646 = state_13532__$1;
(statearr_13538_13646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (6))){
var inst_13513 = (state_13532[(7)]);
var inst_13518 = (state_13532[(8)]);
var inst_13518__$1 = cljs.core.async.chan.call(null,(1));
var inst_13519 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13520 = [inst_13513,inst_13518__$1];
var inst_13521 = (new cljs.core.PersistentVector(null,2,(5),inst_13519,inst_13520,null));
var state_13532__$1 = (function (){var statearr_13539 = state_13532;
(statearr_13539[(8)] = inst_13518__$1);

return statearr_13539;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13532__$1,(8),jobs,inst_13521);
} else {
if((state_val_13533 === (3))){
var inst_13530 = (state_13532[(2)]);
var state_13532__$1 = state_13532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13532__$1,inst_13530);
} else {
if((state_val_13533 === (2))){
var state_13532__$1 = state_13532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13532__$1,(4),from);
} else {
if((state_val_13533 === (9))){
var inst_13525 = (state_13532[(2)]);
var state_13532__$1 = (function (){var statearr_13540 = state_13532;
(statearr_13540[(9)] = inst_13525);

return statearr_13540;
})();
var statearr_13541_13647 = state_13532__$1;
(statearr_13541_13647[(2)] = null);

(statearr_13541_13647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (5))){
var inst_13516 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13532__$1 = state_13532;
var statearr_13542_13648 = state_13532__$1;
(statearr_13542_13648[(2)] = inst_13516);

(statearr_13542_13648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13533 === (8))){
var inst_13518 = (state_13532[(8)]);
var inst_13523 = (state_13532[(2)]);
var state_13532__$1 = (function (){var statearr_13543 = state_13532;
(statearr_13543[(10)] = inst_13523);

return statearr_13543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13532__$1,(9),results,inst_13518);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0 = (function (){
var statearr_13544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__);

(statearr_13544[(1)] = (1));

return statearr_13544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1 = (function (state_13532){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_13532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e13545){if((e13545 instanceof Object)){
var ex__13188__auto__ = e13545;
var statearr_13546_13649 = state_13532;
(statearr_13546_13649[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13650 = state_13532;
state_13532 = G__13650;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__ = function(state_13532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1.call(this,state_13532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_13547 = f__13280__auto__.call(null);
(statearr_13547[(6)] = c__13279__auto___13642);

return statearr_13547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_13585){
var state_val_13586 = (state_13585[(1)]);
if((state_val_13586 === (7))){
var inst_13581 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
var statearr_13587_13651 = state_13585__$1;
(statearr_13587_13651[(2)] = inst_13581);

(statearr_13587_13651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (20))){
var state_13585__$1 = state_13585;
var statearr_13588_13652 = state_13585__$1;
(statearr_13588_13652[(2)] = null);

(statearr_13588_13652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (1))){
var state_13585__$1 = state_13585;
var statearr_13589_13653 = state_13585__$1;
(statearr_13589_13653[(2)] = null);

(statearr_13589_13653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (4))){
var inst_13550 = (state_13585[(7)]);
var inst_13550__$1 = (state_13585[(2)]);
var inst_13551 = (inst_13550__$1 == null);
var state_13585__$1 = (function (){var statearr_13590 = state_13585;
(statearr_13590[(7)] = inst_13550__$1);

return statearr_13590;
})();
if(cljs.core.truth_(inst_13551)){
var statearr_13591_13654 = state_13585__$1;
(statearr_13591_13654[(1)] = (5));

} else {
var statearr_13592_13655 = state_13585__$1;
(statearr_13592_13655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (15))){
var inst_13563 = (state_13585[(8)]);
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13585__$1,(18),to,inst_13563);
} else {
if((state_val_13586 === (21))){
var inst_13576 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
var statearr_13593_13656 = state_13585__$1;
(statearr_13593_13656[(2)] = inst_13576);

(statearr_13593_13656[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (13))){
var inst_13578 = (state_13585[(2)]);
var state_13585__$1 = (function (){var statearr_13594 = state_13585;
(statearr_13594[(9)] = inst_13578);

return statearr_13594;
})();
var statearr_13595_13657 = state_13585__$1;
(statearr_13595_13657[(2)] = null);

(statearr_13595_13657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (6))){
var inst_13550 = (state_13585[(7)]);
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13585__$1,(11),inst_13550);
} else {
if((state_val_13586 === (17))){
var inst_13571 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
if(cljs.core.truth_(inst_13571)){
var statearr_13596_13658 = state_13585__$1;
(statearr_13596_13658[(1)] = (19));

} else {
var statearr_13597_13659 = state_13585__$1;
(statearr_13597_13659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (3))){
var inst_13583 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13585__$1,inst_13583);
} else {
if((state_val_13586 === (12))){
var inst_13560 = (state_13585[(10)]);
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13585__$1,(14),inst_13560);
} else {
if((state_val_13586 === (2))){
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13585__$1,(4),results);
} else {
if((state_val_13586 === (19))){
var state_13585__$1 = state_13585;
var statearr_13598_13660 = state_13585__$1;
(statearr_13598_13660[(2)] = null);

(statearr_13598_13660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (11))){
var inst_13560 = (state_13585[(2)]);
var state_13585__$1 = (function (){var statearr_13599 = state_13585;
(statearr_13599[(10)] = inst_13560);

return statearr_13599;
})();
var statearr_13600_13661 = state_13585__$1;
(statearr_13600_13661[(2)] = null);

(statearr_13600_13661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (9))){
var state_13585__$1 = state_13585;
var statearr_13601_13662 = state_13585__$1;
(statearr_13601_13662[(2)] = null);

(statearr_13601_13662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (5))){
var state_13585__$1 = state_13585;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13602_13663 = state_13585__$1;
(statearr_13602_13663[(1)] = (8));

} else {
var statearr_13603_13664 = state_13585__$1;
(statearr_13603_13664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (14))){
var inst_13563 = (state_13585[(8)]);
var inst_13563__$1 = (state_13585[(2)]);
var inst_13564 = (inst_13563__$1 == null);
var inst_13565 = cljs.core.not.call(null,inst_13564);
var state_13585__$1 = (function (){var statearr_13604 = state_13585;
(statearr_13604[(8)] = inst_13563__$1);

return statearr_13604;
})();
if(inst_13565){
var statearr_13605_13665 = state_13585__$1;
(statearr_13605_13665[(1)] = (15));

} else {
var statearr_13606_13666 = state_13585__$1;
(statearr_13606_13666[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (16))){
var state_13585__$1 = state_13585;
var statearr_13607_13667 = state_13585__$1;
(statearr_13607_13667[(2)] = false);

(statearr_13607_13667[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (10))){
var inst_13557 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
var statearr_13608_13668 = state_13585__$1;
(statearr_13608_13668[(2)] = inst_13557);

(statearr_13608_13668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (18))){
var inst_13568 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
var statearr_13609_13669 = state_13585__$1;
(statearr_13609_13669[(2)] = inst_13568);

(statearr_13609_13669[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13586 === (8))){
var inst_13554 = cljs.core.async.close_BANG_.call(null,to);
var state_13585__$1 = state_13585;
var statearr_13610_13670 = state_13585__$1;
(statearr_13610_13670[(2)] = inst_13554);

(statearr_13610_13670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0 = (function (){
var statearr_13611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13611[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__);

(statearr_13611[(1)] = (1));

return statearr_13611;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1 = (function (state_13585){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_13585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e13612){if((e13612 instanceof Object)){
var ex__13188__auto__ = e13612;
var statearr_13613_13671 = state_13585;
(statearr_13613_13671[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13672 = state_13585;
state_13585 = G__13672;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__ = function(state_13585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1.call(this,state_13585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_13614 = f__13280__auto__.call(null);
(statearr_13614[(6)] = c__13279__auto__);

return statearr_13614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));

return c__13279__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13674 = arguments.length;
switch (G__13674) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13677 = arguments.length;
switch (G__13677) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13680 = arguments.length;
switch (G__13680) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13279__auto___13729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_13706){
var state_val_13707 = (state_13706[(1)]);
if((state_val_13707 === (7))){
var inst_13702 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
var statearr_13708_13730 = state_13706__$1;
(statearr_13708_13730[(2)] = inst_13702);

(statearr_13708_13730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (1))){
var state_13706__$1 = state_13706;
var statearr_13709_13731 = state_13706__$1;
(statearr_13709_13731[(2)] = null);

(statearr_13709_13731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (4))){
var inst_13683 = (state_13706[(7)]);
var inst_13683__$1 = (state_13706[(2)]);
var inst_13684 = (inst_13683__$1 == null);
var state_13706__$1 = (function (){var statearr_13710 = state_13706;
(statearr_13710[(7)] = inst_13683__$1);

return statearr_13710;
})();
if(cljs.core.truth_(inst_13684)){
var statearr_13711_13732 = state_13706__$1;
(statearr_13711_13732[(1)] = (5));

} else {
var statearr_13712_13733 = state_13706__$1;
(statearr_13712_13733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (13))){
var state_13706__$1 = state_13706;
var statearr_13713_13734 = state_13706__$1;
(statearr_13713_13734[(2)] = null);

(statearr_13713_13734[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (6))){
var inst_13683 = (state_13706[(7)]);
var inst_13689 = p.call(null,inst_13683);
var state_13706__$1 = state_13706;
if(cljs.core.truth_(inst_13689)){
var statearr_13714_13735 = state_13706__$1;
(statearr_13714_13735[(1)] = (9));

} else {
var statearr_13715_13736 = state_13706__$1;
(statearr_13715_13736[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (3))){
var inst_13704 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13706__$1,inst_13704);
} else {
if((state_val_13707 === (12))){
var state_13706__$1 = state_13706;
var statearr_13716_13737 = state_13706__$1;
(statearr_13716_13737[(2)] = null);

(statearr_13716_13737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (2))){
var state_13706__$1 = state_13706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13706__$1,(4),ch);
} else {
if((state_val_13707 === (11))){
var inst_13683 = (state_13706[(7)]);
var inst_13693 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13706__$1,(8),inst_13693,inst_13683);
} else {
if((state_val_13707 === (9))){
var state_13706__$1 = state_13706;
var statearr_13717_13738 = state_13706__$1;
(statearr_13717_13738[(2)] = tc);

(statearr_13717_13738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (5))){
var inst_13686 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13687 = cljs.core.async.close_BANG_.call(null,fc);
var state_13706__$1 = (function (){var statearr_13718 = state_13706;
(statearr_13718[(8)] = inst_13686);

return statearr_13718;
})();
var statearr_13719_13739 = state_13706__$1;
(statearr_13719_13739[(2)] = inst_13687);

(statearr_13719_13739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (14))){
var inst_13700 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
var statearr_13720_13740 = state_13706__$1;
(statearr_13720_13740[(2)] = inst_13700);

(statearr_13720_13740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (10))){
var state_13706__$1 = state_13706;
var statearr_13721_13741 = state_13706__$1;
(statearr_13721_13741[(2)] = fc);

(statearr_13721_13741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (8))){
var inst_13695 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
if(cljs.core.truth_(inst_13695)){
var statearr_13722_13742 = state_13706__$1;
(statearr_13722_13742[(1)] = (12));

} else {
var statearr_13723_13743 = state_13706__$1;
(statearr_13723_13743[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_13724 = [null,null,null,null,null,null,null,null,null];
(statearr_13724[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_13724[(1)] = (1));

return statearr_13724;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_13706){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_13706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e13725){if((e13725 instanceof Object)){
var ex__13188__auto__ = e13725;
var statearr_13726_13744 = state_13706;
(statearr_13726_13744[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13745 = state_13706;
state_13706 = G__13745;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_13706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_13706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_13727 = f__13280__auto__.call(null);
(statearr_13727[(6)] = c__13279__auto___13729);

return statearr_13727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_13766){
var state_val_13767 = (state_13766[(1)]);
if((state_val_13767 === (7))){
var inst_13762 = (state_13766[(2)]);
var state_13766__$1 = state_13766;
var statearr_13768_13786 = state_13766__$1;
(statearr_13768_13786[(2)] = inst_13762);

(statearr_13768_13786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13767 === (1))){
var inst_13746 = init;
var state_13766__$1 = (function (){var statearr_13769 = state_13766;
(statearr_13769[(7)] = inst_13746);

return statearr_13769;
})();
var statearr_13770_13787 = state_13766__$1;
(statearr_13770_13787[(2)] = null);

(statearr_13770_13787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13767 === (4))){
var inst_13749 = (state_13766[(8)]);
var inst_13749__$1 = (state_13766[(2)]);
var inst_13750 = (inst_13749__$1 == null);
var state_13766__$1 = (function (){var statearr_13771 = state_13766;
(statearr_13771[(8)] = inst_13749__$1);

return statearr_13771;
})();
if(cljs.core.truth_(inst_13750)){
var statearr_13772_13788 = state_13766__$1;
(statearr_13772_13788[(1)] = (5));

} else {
var statearr_13773_13789 = state_13766__$1;
(statearr_13773_13789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13767 === (6))){
var inst_13753 = (state_13766[(9)]);
var inst_13746 = (state_13766[(7)]);
var inst_13749 = (state_13766[(8)]);
var inst_13753__$1 = f.call(null,inst_13746,inst_13749);
var inst_13754 = cljs.core.reduced_QMARK_.call(null,inst_13753__$1);
var state_13766__$1 = (function (){var statearr_13774 = state_13766;
(statearr_13774[(9)] = inst_13753__$1);

return statearr_13774;
})();
if(inst_13754){
var statearr_13775_13790 = state_13766__$1;
(statearr_13775_13790[(1)] = (8));

} else {
var statearr_13776_13791 = state_13766__$1;
(statearr_13776_13791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13767 === (3))){
var inst_13764 = (state_13766[(2)]);
var state_13766__$1 = state_13766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13766__$1,inst_13764);
} else {
if((state_val_13767 === (2))){
var state_13766__$1 = state_13766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13766__$1,(4),ch);
} else {
if((state_val_13767 === (9))){
var inst_13753 = (state_13766[(9)]);
var inst_13746 = inst_13753;
var state_13766__$1 = (function (){var statearr_13777 = state_13766;
(statearr_13777[(7)] = inst_13746);

return statearr_13777;
})();
var statearr_13778_13792 = state_13766__$1;
(statearr_13778_13792[(2)] = null);

(statearr_13778_13792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13767 === (5))){
var inst_13746 = (state_13766[(7)]);
var state_13766__$1 = state_13766;
var statearr_13779_13793 = state_13766__$1;
(statearr_13779_13793[(2)] = inst_13746);

(statearr_13779_13793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13767 === (10))){
var inst_13760 = (state_13766[(2)]);
var state_13766__$1 = state_13766;
var statearr_13780_13794 = state_13766__$1;
(statearr_13780_13794[(2)] = inst_13760);

(statearr_13780_13794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13767 === (8))){
var inst_13753 = (state_13766[(9)]);
var inst_13756 = cljs.core.deref.call(null,inst_13753);
var state_13766__$1 = state_13766;
var statearr_13781_13795 = state_13766__$1;
(statearr_13781_13795[(2)] = inst_13756);

(statearr_13781_13795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13185__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13185__auto____0 = (function (){
var statearr_13782 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13782[(0)] = cljs$core$async$reduce_$_state_machine__13185__auto__);

(statearr_13782[(1)] = (1));

return statearr_13782;
});
var cljs$core$async$reduce_$_state_machine__13185__auto____1 = (function (state_13766){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_13766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e13783){if((e13783 instanceof Object)){
var ex__13188__auto__ = e13783;
var statearr_13784_13796 = state_13766;
(statearr_13784_13796[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13797 = state_13766;
state_13766 = G__13797;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13185__auto__ = function(state_13766){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13185__auto____1.call(this,state_13766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13185__auto____0;
cljs$core$async$reduce_$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13185__auto____1;
return cljs$core$async$reduce_$_state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_13785 = f__13280__auto__.call(null);
(statearr_13785[(6)] = c__13279__auto__);

return statearr_13785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));

return c__13279__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_13803){
var state_val_13804 = (state_13803[(1)]);
if((state_val_13804 === (1))){
var inst_13798 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13803__$1 = state_13803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13803__$1,(2),inst_13798);
} else {
if((state_val_13804 === (2))){
var inst_13800 = (state_13803[(2)]);
var inst_13801 = f__$1.call(null,inst_13800);
var state_13803__$1 = state_13803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13803__$1,inst_13801);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13185__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13185__auto____0 = (function (){
var statearr_13805 = [null,null,null,null,null,null,null];
(statearr_13805[(0)] = cljs$core$async$transduce_$_state_machine__13185__auto__);

(statearr_13805[(1)] = (1));

return statearr_13805;
});
var cljs$core$async$transduce_$_state_machine__13185__auto____1 = (function (state_13803){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_13803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e13806){if((e13806 instanceof Object)){
var ex__13188__auto__ = e13806;
var statearr_13807_13809 = state_13803;
(statearr_13807_13809[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13810 = state_13803;
state_13803 = G__13810;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13185__auto__ = function(state_13803){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13185__auto____1.call(this,state_13803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13185__auto____0;
cljs$core$async$transduce_$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13185__auto____1;
return cljs$core$async$transduce_$_state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_13808 = f__13280__auto__.call(null);
(statearr_13808[(6)] = c__13279__auto__);

return statearr_13808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));

return c__13279__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13812 = arguments.length;
switch (G__13812) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_13837){
var state_val_13838 = (state_13837[(1)]);
if((state_val_13838 === (7))){
var inst_13819 = (state_13837[(2)]);
var state_13837__$1 = state_13837;
var statearr_13839_13860 = state_13837__$1;
(statearr_13839_13860[(2)] = inst_13819);

(statearr_13839_13860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13838 === (1))){
var inst_13813 = cljs.core.seq.call(null,coll);
var inst_13814 = inst_13813;
var state_13837__$1 = (function (){var statearr_13840 = state_13837;
(statearr_13840[(7)] = inst_13814);

return statearr_13840;
})();
var statearr_13841_13861 = state_13837__$1;
(statearr_13841_13861[(2)] = null);

(statearr_13841_13861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13838 === (4))){
var inst_13814 = (state_13837[(7)]);
var inst_13817 = cljs.core.first.call(null,inst_13814);
var state_13837__$1 = state_13837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13837__$1,(7),ch,inst_13817);
} else {
if((state_val_13838 === (13))){
var inst_13831 = (state_13837[(2)]);
var state_13837__$1 = state_13837;
var statearr_13842_13862 = state_13837__$1;
(statearr_13842_13862[(2)] = inst_13831);

(statearr_13842_13862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13838 === (6))){
var inst_13822 = (state_13837[(2)]);
var state_13837__$1 = state_13837;
if(cljs.core.truth_(inst_13822)){
var statearr_13843_13863 = state_13837__$1;
(statearr_13843_13863[(1)] = (8));

} else {
var statearr_13844_13864 = state_13837__$1;
(statearr_13844_13864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13838 === (3))){
var inst_13835 = (state_13837[(2)]);
var state_13837__$1 = state_13837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13837__$1,inst_13835);
} else {
if((state_val_13838 === (12))){
var state_13837__$1 = state_13837;
var statearr_13845_13865 = state_13837__$1;
(statearr_13845_13865[(2)] = null);

(statearr_13845_13865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13838 === (2))){
var inst_13814 = (state_13837[(7)]);
var state_13837__$1 = state_13837;
if(cljs.core.truth_(inst_13814)){
var statearr_13846_13866 = state_13837__$1;
(statearr_13846_13866[(1)] = (4));

} else {
var statearr_13847_13867 = state_13837__$1;
(statearr_13847_13867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13838 === (11))){
var inst_13828 = cljs.core.async.close_BANG_.call(null,ch);
var state_13837__$1 = state_13837;
var statearr_13848_13868 = state_13837__$1;
(statearr_13848_13868[(2)] = inst_13828);

(statearr_13848_13868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13838 === (9))){
var state_13837__$1 = state_13837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13849_13869 = state_13837__$1;
(statearr_13849_13869[(1)] = (11));

} else {
var statearr_13850_13870 = state_13837__$1;
(statearr_13850_13870[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13838 === (5))){
var inst_13814 = (state_13837[(7)]);
var state_13837__$1 = state_13837;
var statearr_13851_13871 = state_13837__$1;
(statearr_13851_13871[(2)] = inst_13814);

(statearr_13851_13871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13838 === (10))){
var inst_13833 = (state_13837[(2)]);
var state_13837__$1 = state_13837;
var statearr_13852_13872 = state_13837__$1;
(statearr_13852_13872[(2)] = inst_13833);

(statearr_13852_13872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13838 === (8))){
var inst_13814 = (state_13837[(7)]);
var inst_13824 = cljs.core.next.call(null,inst_13814);
var inst_13814__$1 = inst_13824;
var state_13837__$1 = (function (){var statearr_13853 = state_13837;
(statearr_13853[(7)] = inst_13814__$1);

return statearr_13853;
})();
var statearr_13854_13873 = state_13837__$1;
(statearr_13854_13873[(2)] = null);

(statearr_13854_13873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_13855 = [null,null,null,null,null,null,null,null];
(statearr_13855[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_13855[(1)] = (1));

return statearr_13855;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_13837){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_13837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e13856){if((e13856 instanceof Object)){
var ex__13188__auto__ = e13856;
var statearr_13857_13874 = state_13837;
(statearr_13857_13874[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13875 = state_13837;
state_13837 = G__13875;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_13837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_13837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_13858 = f__13280__auto__.call(null);
(statearr_13858[(6)] = c__13279__auto__);

return statearr_13858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));

return c__13279__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13876 = (function (ch,cs,meta13877){
this.ch = ch;
this.cs = cs;
this.meta13877 = meta13877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13878,meta13877__$1){
var self__ = this;
var _13878__$1 = this;
return (new cljs.core.async.t_cljs$core$async13876(self__.ch,self__.cs,meta13877__$1));
}));

(cljs.core.async.t_cljs$core$async13876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13878){
var self__ = this;
var _13878__$1 = this;
return self__.meta13877;
}));

(cljs.core.async.t_cljs$core$async13876.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13876.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13876.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13876.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13876.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13877","meta13877",-19550590,null)], null);
}));

(cljs.core.async.t_cljs$core$async13876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13876");

(cljs.core.async.t_cljs$core$async13876.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async13876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13876.
 */
cljs.core.async.__GT_t_cljs$core$async13876 = (function cljs$core$async$mult_$___GT_t_cljs$core$async13876(ch__$1,cs__$1,meta13877){
return (new cljs.core.async.t_cljs$core$async13876(ch__$1,cs__$1,meta13877));
});

}

return (new cljs.core.async.t_cljs$core$async13876(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__13279__auto___14098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_14013){
var state_val_14014 = (state_14013[(1)]);
if((state_val_14014 === (7))){
var inst_14009 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14015_14099 = state_14013__$1;
(statearr_14015_14099[(2)] = inst_14009);

(statearr_14015_14099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (20))){
var inst_13912 = (state_14013[(7)]);
var inst_13924 = cljs.core.first.call(null,inst_13912);
var inst_13925 = cljs.core.nth.call(null,inst_13924,(0),null);
var inst_13926 = cljs.core.nth.call(null,inst_13924,(1),null);
var state_14013__$1 = (function (){var statearr_14016 = state_14013;
(statearr_14016[(8)] = inst_13925);

return statearr_14016;
})();
if(cljs.core.truth_(inst_13926)){
var statearr_14017_14100 = state_14013__$1;
(statearr_14017_14100[(1)] = (22));

} else {
var statearr_14018_14101 = state_14013__$1;
(statearr_14018_14101[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (27))){
var inst_13954 = (state_14013[(9)]);
var inst_13956 = (state_14013[(10)]);
var inst_13881 = (state_14013[(11)]);
var inst_13961 = (state_14013[(12)]);
var inst_13961__$1 = cljs.core._nth.call(null,inst_13954,inst_13956);
var inst_13962 = cljs.core.async.put_BANG_.call(null,inst_13961__$1,inst_13881,done);
var state_14013__$1 = (function (){var statearr_14019 = state_14013;
(statearr_14019[(12)] = inst_13961__$1);

return statearr_14019;
})();
if(cljs.core.truth_(inst_13962)){
var statearr_14020_14102 = state_14013__$1;
(statearr_14020_14102[(1)] = (30));

} else {
var statearr_14021_14103 = state_14013__$1;
(statearr_14021_14103[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (1))){
var state_14013__$1 = state_14013;
var statearr_14022_14104 = state_14013__$1;
(statearr_14022_14104[(2)] = null);

(statearr_14022_14104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (24))){
var inst_13912 = (state_14013[(7)]);
var inst_13931 = (state_14013[(2)]);
var inst_13932 = cljs.core.next.call(null,inst_13912);
var inst_13890 = inst_13932;
var inst_13891 = null;
var inst_13892 = (0);
var inst_13893 = (0);
var state_14013__$1 = (function (){var statearr_14023 = state_14013;
(statearr_14023[(13)] = inst_13931);

(statearr_14023[(14)] = inst_13892);

(statearr_14023[(15)] = inst_13891);

(statearr_14023[(16)] = inst_13893);

(statearr_14023[(17)] = inst_13890);

return statearr_14023;
})();
var statearr_14024_14105 = state_14013__$1;
(statearr_14024_14105[(2)] = null);

(statearr_14024_14105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (39))){
var state_14013__$1 = state_14013;
var statearr_14028_14106 = state_14013__$1;
(statearr_14028_14106[(2)] = null);

(statearr_14028_14106[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (4))){
var inst_13881 = (state_14013[(11)]);
var inst_13881__$1 = (state_14013[(2)]);
var inst_13882 = (inst_13881__$1 == null);
var state_14013__$1 = (function (){var statearr_14029 = state_14013;
(statearr_14029[(11)] = inst_13881__$1);

return statearr_14029;
})();
if(cljs.core.truth_(inst_13882)){
var statearr_14030_14107 = state_14013__$1;
(statearr_14030_14107[(1)] = (5));

} else {
var statearr_14031_14108 = state_14013__$1;
(statearr_14031_14108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (15))){
var inst_13892 = (state_14013[(14)]);
var inst_13891 = (state_14013[(15)]);
var inst_13893 = (state_14013[(16)]);
var inst_13890 = (state_14013[(17)]);
var inst_13908 = (state_14013[(2)]);
var inst_13909 = (inst_13893 + (1));
var tmp14025 = inst_13892;
var tmp14026 = inst_13891;
var tmp14027 = inst_13890;
var inst_13890__$1 = tmp14027;
var inst_13891__$1 = tmp14026;
var inst_13892__$1 = tmp14025;
var inst_13893__$1 = inst_13909;
var state_14013__$1 = (function (){var statearr_14032 = state_14013;
(statearr_14032[(14)] = inst_13892__$1);

(statearr_14032[(15)] = inst_13891__$1);

(statearr_14032[(18)] = inst_13908);

(statearr_14032[(16)] = inst_13893__$1);

(statearr_14032[(17)] = inst_13890__$1);

return statearr_14032;
})();
var statearr_14033_14109 = state_14013__$1;
(statearr_14033_14109[(2)] = null);

(statearr_14033_14109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (21))){
var inst_13935 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14037_14110 = state_14013__$1;
(statearr_14037_14110[(2)] = inst_13935);

(statearr_14037_14110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (31))){
var inst_13961 = (state_14013[(12)]);
var inst_13965 = done.call(null,null);
var inst_13966 = cljs.core.async.untap_STAR_.call(null,m,inst_13961);
var state_14013__$1 = (function (){var statearr_14038 = state_14013;
(statearr_14038[(19)] = inst_13965);

return statearr_14038;
})();
var statearr_14039_14111 = state_14013__$1;
(statearr_14039_14111[(2)] = inst_13966);

(statearr_14039_14111[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (32))){
var inst_13953 = (state_14013[(20)]);
var inst_13955 = (state_14013[(21)]);
var inst_13954 = (state_14013[(9)]);
var inst_13956 = (state_14013[(10)]);
var inst_13968 = (state_14013[(2)]);
var inst_13969 = (inst_13956 + (1));
var tmp14034 = inst_13953;
var tmp14035 = inst_13955;
var tmp14036 = inst_13954;
var inst_13953__$1 = tmp14034;
var inst_13954__$1 = tmp14036;
var inst_13955__$1 = tmp14035;
var inst_13956__$1 = inst_13969;
var state_14013__$1 = (function (){var statearr_14040 = state_14013;
(statearr_14040[(20)] = inst_13953__$1);

(statearr_14040[(21)] = inst_13955__$1);

(statearr_14040[(9)] = inst_13954__$1);

(statearr_14040[(10)] = inst_13956__$1);

(statearr_14040[(22)] = inst_13968);

return statearr_14040;
})();
var statearr_14041_14112 = state_14013__$1;
(statearr_14041_14112[(2)] = null);

(statearr_14041_14112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (40))){
var inst_13981 = (state_14013[(23)]);
var inst_13985 = done.call(null,null);
var inst_13986 = cljs.core.async.untap_STAR_.call(null,m,inst_13981);
var state_14013__$1 = (function (){var statearr_14042 = state_14013;
(statearr_14042[(24)] = inst_13985);

return statearr_14042;
})();
var statearr_14043_14113 = state_14013__$1;
(statearr_14043_14113[(2)] = inst_13986);

(statearr_14043_14113[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (33))){
var inst_13972 = (state_14013[(25)]);
var inst_13974 = cljs.core.chunked_seq_QMARK_.call(null,inst_13972);
var state_14013__$1 = state_14013;
if(inst_13974){
var statearr_14044_14114 = state_14013__$1;
(statearr_14044_14114[(1)] = (36));

} else {
var statearr_14045_14115 = state_14013__$1;
(statearr_14045_14115[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (13))){
var inst_13902 = (state_14013[(26)]);
var inst_13905 = cljs.core.async.close_BANG_.call(null,inst_13902);
var state_14013__$1 = state_14013;
var statearr_14046_14116 = state_14013__$1;
(statearr_14046_14116[(2)] = inst_13905);

(statearr_14046_14116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (22))){
var inst_13925 = (state_14013[(8)]);
var inst_13928 = cljs.core.async.close_BANG_.call(null,inst_13925);
var state_14013__$1 = state_14013;
var statearr_14047_14117 = state_14013__$1;
(statearr_14047_14117[(2)] = inst_13928);

(statearr_14047_14117[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (36))){
var inst_13972 = (state_14013[(25)]);
var inst_13976 = cljs.core.chunk_first.call(null,inst_13972);
var inst_13977 = cljs.core.chunk_rest.call(null,inst_13972);
var inst_13978 = cljs.core.count.call(null,inst_13976);
var inst_13953 = inst_13977;
var inst_13954 = inst_13976;
var inst_13955 = inst_13978;
var inst_13956 = (0);
var state_14013__$1 = (function (){var statearr_14048 = state_14013;
(statearr_14048[(20)] = inst_13953);

(statearr_14048[(21)] = inst_13955);

(statearr_14048[(9)] = inst_13954);

(statearr_14048[(10)] = inst_13956);

return statearr_14048;
})();
var statearr_14049_14118 = state_14013__$1;
(statearr_14049_14118[(2)] = null);

(statearr_14049_14118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (41))){
var inst_13972 = (state_14013[(25)]);
var inst_13988 = (state_14013[(2)]);
var inst_13989 = cljs.core.next.call(null,inst_13972);
var inst_13953 = inst_13989;
var inst_13954 = null;
var inst_13955 = (0);
var inst_13956 = (0);
var state_14013__$1 = (function (){var statearr_14050 = state_14013;
(statearr_14050[(20)] = inst_13953);

(statearr_14050[(21)] = inst_13955);

(statearr_14050[(9)] = inst_13954);

(statearr_14050[(10)] = inst_13956);

(statearr_14050[(27)] = inst_13988);

return statearr_14050;
})();
var statearr_14051_14119 = state_14013__$1;
(statearr_14051_14119[(2)] = null);

(statearr_14051_14119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (43))){
var state_14013__$1 = state_14013;
var statearr_14052_14120 = state_14013__$1;
(statearr_14052_14120[(2)] = null);

(statearr_14052_14120[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (29))){
var inst_13997 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14053_14121 = state_14013__$1;
(statearr_14053_14121[(2)] = inst_13997);

(statearr_14053_14121[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (44))){
var inst_14006 = (state_14013[(2)]);
var state_14013__$1 = (function (){var statearr_14054 = state_14013;
(statearr_14054[(28)] = inst_14006);

return statearr_14054;
})();
var statearr_14055_14122 = state_14013__$1;
(statearr_14055_14122[(2)] = null);

(statearr_14055_14122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (6))){
var inst_13945 = (state_14013[(29)]);
var inst_13944 = cljs.core.deref.call(null,cs);
var inst_13945__$1 = cljs.core.keys.call(null,inst_13944);
var inst_13946 = cljs.core.count.call(null,inst_13945__$1);
var inst_13947 = cljs.core.reset_BANG_.call(null,dctr,inst_13946);
var inst_13952 = cljs.core.seq.call(null,inst_13945__$1);
var inst_13953 = inst_13952;
var inst_13954 = null;
var inst_13955 = (0);
var inst_13956 = (0);
var state_14013__$1 = (function (){var statearr_14056 = state_14013;
(statearr_14056[(30)] = inst_13947);

(statearr_14056[(20)] = inst_13953);

(statearr_14056[(21)] = inst_13955);

(statearr_14056[(9)] = inst_13954);

(statearr_14056[(10)] = inst_13956);

(statearr_14056[(29)] = inst_13945__$1);

return statearr_14056;
})();
var statearr_14057_14123 = state_14013__$1;
(statearr_14057_14123[(2)] = null);

(statearr_14057_14123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (28))){
var inst_13953 = (state_14013[(20)]);
var inst_13972 = (state_14013[(25)]);
var inst_13972__$1 = cljs.core.seq.call(null,inst_13953);
var state_14013__$1 = (function (){var statearr_14058 = state_14013;
(statearr_14058[(25)] = inst_13972__$1);

return statearr_14058;
})();
if(inst_13972__$1){
var statearr_14059_14124 = state_14013__$1;
(statearr_14059_14124[(1)] = (33));

} else {
var statearr_14060_14125 = state_14013__$1;
(statearr_14060_14125[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (25))){
var inst_13955 = (state_14013[(21)]);
var inst_13956 = (state_14013[(10)]);
var inst_13958 = (inst_13956 < inst_13955);
var inst_13959 = inst_13958;
var state_14013__$1 = state_14013;
if(cljs.core.truth_(inst_13959)){
var statearr_14061_14126 = state_14013__$1;
(statearr_14061_14126[(1)] = (27));

} else {
var statearr_14062_14127 = state_14013__$1;
(statearr_14062_14127[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (34))){
var state_14013__$1 = state_14013;
var statearr_14063_14128 = state_14013__$1;
(statearr_14063_14128[(2)] = null);

(statearr_14063_14128[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (17))){
var state_14013__$1 = state_14013;
var statearr_14064_14129 = state_14013__$1;
(statearr_14064_14129[(2)] = null);

(statearr_14064_14129[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (3))){
var inst_14011 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14013__$1,inst_14011);
} else {
if((state_val_14014 === (12))){
var inst_13940 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14065_14130 = state_14013__$1;
(statearr_14065_14130[(2)] = inst_13940);

(statearr_14065_14130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (2))){
var state_14013__$1 = state_14013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14013__$1,(4),ch);
} else {
if((state_val_14014 === (23))){
var state_14013__$1 = state_14013;
var statearr_14066_14131 = state_14013__$1;
(statearr_14066_14131[(2)] = null);

(statearr_14066_14131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (35))){
var inst_13995 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14067_14132 = state_14013__$1;
(statearr_14067_14132[(2)] = inst_13995);

(statearr_14067_14132[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (19))){
var inst_13912 = (state_14013[(7)]);
var inst_13916 = cljs.core.chunk_first.call(null,inst_13912);
var inst_13917 = cljs.core.chunk_rest.call(null,inst_13912);
var inst_13918 = cljs.core.count.call(null,inst_13916);
var inst_13890 = inst_13917;
var inst_13891 = inst_13916;
var inst_13892 = inst_13918;
var inst_13893 = (0);
var state_14013__$1 = (function (){var statearr_14068 = state_14013;
(statearr_14068[(14)] = inst_13892);

(statearr_14068[(15)] = inst_13891);

(statearr_14068[(16)] = inst_13893);

(statearr_14068[(17)] = inst_13890);

return statearr_14068;
})();
var statearr_14069_14133 = state_14013__$1;
(statearr_14069_14133[(2)] = null);

(statearr_14069_14133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (11))){
var inst_13912 = (state_14013[(7)]);
var inst_13890 = (state_14013[(17)]);
var inst_13912__$1 = cljs.core.seq.call(null,inst_13890);
var state_14013__$1 = (function (){var statearr_14070 = state_14013;
(statearr_14070[(7)] = inst_13912__$1);

return statearr_14070;
})();
if(inst_13912__$1){
var statearr_14071_14134 = state_14013__$1;
(statearr_14071_14134[(1)] = (16));

} else {
var statearr_14072_14135 = state_14013__$1;
(statearr_14072_14135[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (9))){
var inst_13942 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14073_14136 = state_14013__$1;
(statearr_14073_14136[(2)] = inst_13942);

(statearr_14073_14136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (5))){
var inst_13888 = cljs.core.deref.call(null,cs);
var inst_13889 = cljs.core.seq.call(null,inst_13888);
var inst_13890 = inst_13889;
var inst_13891 = null;
var inst_13892 = (0);
var inst_13893 = (0);
var state_14013__$1 = (function (){var statearr_14074 = state_14013;
(statearr_14074[(14)] = inst_13892);

(statearr_14074[(15)] = inst_13891);

(statearr_14074[(16)] = inst_13893);

(statearr_14074[(17)] = inst_13890);

return statearr_14074;
})();
var statearr_14075_14137 = state_14013__$1;
(statearr_14075_14137[(2)] = null);

(statearr_14075_14137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (14))){
var state_14013__$1 = state_14013;
var statearr_14076_14138 = state_14013__$1;
(statearr_14076_14138[(2)] = null);

(statearr_14076_14138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (45))){
var inst_14003 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14077_14139 = state_14013__$1;
(statearr_14077_14139[(2)] = inst_14003);

(statearr_14077_14139[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (26))){
var inst_13945 = (state_14013[(29)]);
var inst_13999 = (state_14013[(2)]);
var inst_14000 = cljs.core.seq.call(null,inst_13945);
var state_14013__$1 = (function (){var statearr_14078 = state_14013;
(statearr_14078[(31)] = inst_13999);

return statearr_14078;
})();
if(inst_14000){
var statearr_14079_14140 = state_14013__$1;
(statearr_14079_14140[(1)] = (42));

} else {
var statearr_14080_14141 = state_14013__$1;
(statearr_14080_14141[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (16))){
var inst_13912 = (state_14013[(7)]);
var inst_13914 = cljs.core.chunked_seq_QMARK_.call(null,inst_13912);
var state_14013__$1 = state_14013;
if(inst_13914){
var statearr_14081_14142 = state_14013__$1;
(statearr_14081_14142[(1)] = (19));

} else {
var statearr_14082_14143 = state_14013__$1;
(statearr_14082_14143[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (38))){
var inst_13992 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14083_14144 = state_14013__$1;
(statearr_14083_14144[(2)] = inst_13992);

(statearr_14083_14144[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (30))){
var state_14013__$1 = state_14013;
var statearr_14084_14145 = state_14013__$1;
(statearr_14084_14145[(2)] = null);

(statearr_14084_14145[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (10))){
var inst_13891 = (state_14013[(15)]);
var inst_13893 = (state_14013[(16)]);
var inst_13901 = cljs.core._nth.call(null,inst_13891,inst_13893);
var inst_13902 = cljs.core.nth.call(null,inst_13901,(0),null);
var inst_13903 = cljs.core.nth.call(null,inst_13901,(1),null);
var state_14013__$1 = (function (){var statearr_14085 = state_14013;
(statearr_14085[(26)] = inst_13902);

return statearr_14085;
})();
if(cljs.core.truth_(inst_13903)){
var statearr_14086_14146 = state_14013__$1;
(statearr_14086_14146[(1)] = (13));

} else {
var statearr_14087_14147 = state_14013__$1;
(statearr_14087_14147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (18))){
var inst_13938 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14088_14148 = state_14013__$1;
(statearr_14088_14148[(2)] = inst_13938);

(statearr_14088_14148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (42))){
var state_14013__$1 = state_14013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14013__$1,(45),dchan);
} else {
if((state_val_14014 === (37))){
var inst_13981 = (state_14013[(23)]);
var inst_13881 = (state_14013[(11)]);
var inst_13972 = (state_14013[(25)]);
var inst_13981__$1 = cljs.core.first.call(null,inst_13972);
var inst_13982 = cljs.core.async.put_BANG_.call(null,inst_13981__$1,inst_13881,done);
var state_14013__$1 = (function (){var statearr_14089 = state_14013;
(statearr_14089[(23)] = inst_13981__$1);

return statearr_14089;
})();
if(cljs.core.truth_(inst_13982)){
var statearr_14090_14149 = state_14013__$1;
(statearr_14090_14149[(1)] = (39));

} else {
var statearr_14091_14150 = state_14013__$1;
(statearr_14091_14150[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (8))){
var inst_13892 = (state_14013[(14)]);
var inst_13893 = (state_14013[(16)]);
var inst_13895 = (inst_13893 < inst_13892);
var inst_13896 = inst_13895;
var state_14013__$1 = state_14013;
if(cljs.core.truth_(inst_13896)){
var statearr_14092_14151 = state_14013__$1;
(statearr_14092_14151[(1)] = (10));

} else {
var statearr_14093_14152 = state_14013__$1;
(statearr_14093_14152[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13185__auto__ = null;
var cljs$core$async$mult_$_state_machine__13185__auto____0 = (function (){
var statearr_14094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14094[(0)] = cljs$core$async$mult_$_state_machine__13185__auto__);

(statearr_14094[(1)] = (1));

return statearr_14094;
});
var cljs$core$async$mult_$_state_machine__13185__auto____1 = (function (state_14013){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_14013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e14095){if((e14095 instanceof Object)){
var ex__13188__auto__ = e14095;
var statearr_14096_14153 = state_14013;
(statearr_14096_14153[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14154 = state_14013;
state_14013 = G__14154;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13185__auto__ = function(state_14013){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13185__auto____1.call(this,state_14013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13185__auto____0;
cljs$core$async$mult_$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13185__auto____1;
return cljs$core$async$mult_$_state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_14097 = f__13280__auto__.call(null);
(statearr_14097[(6)] = c__13279__auto___14098);

return statearr_14097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14156 = arguments.length;
switch (G__14156) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___14168 = arguments.length;
var i__4790__auto___14169 = (0);
while(true){
if((i__4790__auto___14169 < len__4789__auto___14168)){
args__4795__auto__.push((arguments[i__4790__auto___14169]));

var G__14170 = (i__4790__auto___14169 + (1));
i__4790__auto___14169 = G__14170;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14162){
var map__14163 = p__14162;
var map__14163__$1 = (((((!((map__14163 == null))))?(((((map__14163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14163):map__14163);
var opts = map__14163__$1;
var statearr_14165_14171 = state;
(statearr_14165_14171[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_14166_14172 = state;
(statearr_14166_14172[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_14167_14173 = state;
(statearr_14167_14173[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14158){
var G__14159 = cljs.core.first.call(null,seq14158);
var seq14158__$1 = cljs.core.next.call(null,seq14158);
var G__14160 = cljs.core.first.call(null,seq14158__$1);
var seq14158__$2 = cljs.core.next.call(null,seq14158__$1);
var G__14161 = cljs.core.first.call(null,seq14158__$2);
var seq14158__$3 = cljs.core.next.call(null,seq14158__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14159,G__14160,G__14161,seq14158__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14174 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14175){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14175 = meta14175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14176,meta14175__$1){
var self__ = this;
var _14176__$1 = this;
return (new cljs.core.async.t_cljs$core$async14174(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14175__$1));
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14176){
var self__ = this;
var _14176__$1 = this;
return self__.meta14175;
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14175","meta14175",853951447,null)], null);
}));

(cljs.core.async.t_cljs$core$async14174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14174");

(cljs.core.async.t_cljs$core$async14174.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async14174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14174.
 */
cljs.core.async.__GT_t_cljs$core$async14174 = (function cljs$core$async$mix_$___GT_t_cljs$core$async14174(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14175){
return (new cljs.core.async.t_cljs$core$async14174(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14175));
});

}

return (new cljs.core.async.t_cljs$core$async14174(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13279__auto___14338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_14278){
var state_val_14279 = (state_14278[(1)]);
if((state_val_14279 === (7))){
var inst_14193 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14280_14339 = state_14278__$1;
(statearr_14280_14339[(2)] = inst_14193);

(statearr_14280_14339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (20))){
var inst_14205 = (state_14278[(7)]);
var state_14278__$1 = state_14278;
var statearr_14281_14340 = state_14278__$1;
(statearr_14281_14340[(2)] = inst_14205);

(statearr_14281_14340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (27))){
var state_14278__$1 = state_14278;
var statearr_14282_14341 = state_14278__$1;
(statearr_14282_14341[(2)] = null);

(statearr_14282_14341[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (1))){
var inst_14180 = (state_14278[(8)]);
var inst_14180__$1 = calc_state.call(null);
var inst_14182 = (inst_14180__$1 == null);
var inst_14183 = cljs.core.not.call(null,inst_14182);
var state_14278__$1 = (function (){var statearr_14283 = state_14278;
(statearr_14283[(8)] = inst_14180__$1);

return statearr_14283;
})();
if(inst_14183){
var statearr_14284_14342 = state_14278__$1;
(statearr_14284_14342[(1)] = (2));

} else {
var statearr_14285_14343 = state_14278__$1;
(statearr_14285_14343[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (24))){
var inst_14252 = (state_14278[(9)]);
var inst_14238 = (state_14278[(10)]);
var inst_14229 = (state_14278[(11)]);
var inst_14252__$1 = inst_14229.call(null,inst_14238);
var state_14278__$1 = (function (){var statearr_14286 = state_14278;
(statearr_14286[(9)] = inst_14252__$1);

return statearr_14286;
})();
if(cljs.core.truth_(inst_14252__$1)){
var statearr_14287_14344 = state_14278__$1;
(statearr_14287_14344[(1)] = (29));

} else {
var statearr_14288_14345 = state_14278__$1;
(statearr_14288_14345[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (4))){
var inst_14196 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
if(cljs.core.truth_(inst_14196)){
var statearr_14289_14346 = state_14278__$1;
(statearr_14289_14346[(1)] = (8));

} else {
var statearr_14290_14347 = state_14278__$1;
(statearr_14290_14347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (15))){
var inst_14223 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
if(cljs.core.truth_(inst_14223)){
var statearr_14291_14348 = state_14278__$1;
(statearr_14291_14348[(1)] = (19));

} else {
var statearr_14292_14349 = state_14278__$1;
(statearr_14292_14349[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (21))){
var inst_14228 = (state_14278[(12)]);
var inst_14228__$1 = (state_14278[(2)]);
var inst_14229 = cljs.core.get.call(null,inst_14228__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14230 = cljs.core.get.call(null,inst_14228__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14231 = cljs.core.get.call(null,inst_14228__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14278__$1 = (function (){var statearr_14293 = state_14278;
(statearr_14293[(11)] = inst_14229);

(statearr_14293[(13)] = inst_14230);

(statearr_14293[(12)] = inst_14228__$1);

return statearr_14293;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14278__$1,(22),inst_14231);
} else {
if((state_val_14279 === (31))){
var inst_14260 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
if(cljs.core.truth_(inst_14260)){
var statearr_14294_14350 = state_14278__$1;
(statearr_14294_14350[(1)] = (32));

} else {
var statearr_14295_14351 = state_14278__$1;
(statearr_14295_14351[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (32))){
var inst_14237 = (state_14278[(14)]);
var state_14278__$1 = state_14278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14278__$1,(35),out,inst_14237);
} else {
if((state_val_14279 === (33))){
var inst_14228 = (state_14278[(12)]);
var inst_14205 = inst_14228;
var state_14278__$1 = (function (){var statearr_14296 = state_14278;
(statearr_14296[(7)] = inst_14205);

return statearr_14296;
})();
var statearr_14297_14352 = state_14278__$1;
(statearr_14297_14352[(2)] = null);

(statearr_14297_14352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (13))){
var inst_14205 = (state_14278[(7)]);
var inst_14212 = inst_14205.cljs$lang$protocol_mask$partition0$;
var inst_14213 = (inst_14212 & (64));
var inst_14214 = inst_14205.cljs$core$ISeq$;
var inst_14215 = (cljs.core.PROTOCOL_SENTINEL === inst_14214);
var inst_14216 = ((inst_14213) || (inst_14215));
var state_14278__$1 = state_14278;
if(cljs.core.truth_(inst_14216)){
var statearr_14298_14353 = state_14278__$1;
(statearr_14298_14353[(1)] = (16));

} else {
var statearr_14299_14354 = state_14278__$1;
(statearr_14299_14354[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (22))){
var inst_14237 = (state_14278[(14)]);
var inst_14238 = (state_14278[(10)]);
var inst_14236 = (state_14278[(2)]);
var inst_14237__$1 = cljs.core.nth.call(null,inst_14236,(0),null);
var inst_14238__$1 = cljs.core.nth.call(null,inst_14236,(1),null);
var inst_14239 = (inst_14237__$1 == null);
var inst_14240 = cljs.core._EQ_.call(null,inst_14238__$1,change);
var inst_14241 = ((inst_14239) || (inst_14240));
var state_14278__$1 = (function (){var statearr_14300 = state_14278;
(statearr_14300[(14)] = inst_14237__$1);

(statearr_14300[(10)] = inst_14238__$1);

return statearr_14300;
})();
if(cljs.core.truth_(inst_14241)){
var statearr_14301_14355 = state_14278__$1;
(statearr_14301_14355[(1)] = (23));

} else {
var statearr_14302_14356 = state_14278__$1;
(statearr_14302_14356[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (36))){
var inst_14228 = (state_14278[(12)]);
var inst_14205 = inst_14228;
var state_14278__$1 = (function (){var statearr_14303 = state_14278;
(statearr_14303[(7)] = inst_14205);

return statearr_14303;
})();
var statearr_14304_14357 = state_14278__$1;
(statearr_14304_14357[(2)] = null);

(statearr_14304_14357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (29))){
var inst_14252 = (state_14278[(9)]);
var state_14278__$1 = state_14278;
var statearr_14305_14358 = state_14278__$1;
(statearr_14305_14358[(2)] = inst_14252);

(statearr_14305_14358[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (6))){
var state_14278__$1 = state_14278;
var statearr_14306_14359 = state_14278__$1;
(statearr_14306_14359[(2)] = false);

(statearr_14306_14359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (28))){
var inst_14248 = (state_14278[(2)]);
var inst_14249 = calc_state.call(null);
var inst_14205 = inst_14249;
var state_14278__$1 = (function (){var statearr_14307 = state_14278;
(statearr_14307[(15)] = inst_14248);

(statearr_14307[(7)] = inst_14205);

return statearr_14307;
})();
var statearr_14308_14360 = state_14278__$1;
(statearr_14308_14360[(2)] = null);

(statearr_14308_14360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (25))){
var inst_14274 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14309_14361 = state_14278__$1;
(statearr_14309_14361[(2)] = inst_14274);

(statearr_14309_14361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (34))){
var inst_14272 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14310_14362 = state_14278__$1;
(statearr_14310_14362[(2)] = inst_14272);

(statearr_14310_14362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (17))){
var state_14278__$1 = state_14278;
var statearr_14311_14363 = state_14278__$1;
(statearr_14311_14363[(2)] = false);

(statearr_14311_14363[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (3))){
var state_14278__$1 = state_14278;
var statearr_14312_14364 = state_14278__$1;
(statearr_14312_14364[(2)] = false);

(statearr_14312_14364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (12))){
var inst_14276 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14278__$1,inst_14276);
} else {
if((state_val_14279 === (2))){
var inst_14180 = (state_14278[(8)]);
var inst_14185 = inst_14180.cljs$lang$protocol_mask$partition0$;
var inst_14186 = (inst_14185 & (64));
var inst_14187 = inst_14180.cljs$core$ISeq$;
var inst_14188 = (cljs.core.PROTOCOL_SENTINEL === inst_14187);
var inst_14189 = ((inst_14186) || (inst_14188));
var state_14278__$1 = state_14278;
if(cljs.core.truth_(inst_14189)){
var statearr_14313_14365 = state_14278__$1;
(statearr_14313_14365[(1)] = (5));

} else {
var statearr_14314_14366 = state_14278__$1;
(statearr_14314_14366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (23))){
var inst_14237 = (state_14278[(14)]);
var inst_14243 = (inst_14237 == null);
var state_14278__$1 = state_14278;
if(cljs.core.truth_(inst_14243)){
var statearr_14315_14367 = state_14278__$1;
(statearr_14315_14367[(1)] = (26));

} else {
var statearr_14316_14368 = state_14278__$1;
(statearr_14316_14368[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (35))){
var inst_14263 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
if(cljs.core.truth_(inst_14263)){
var statearr_14317_14369 = state_14278__$1;
(statearr_14317_14369[(1)] = (36));

} else {
var statearr_14318_14370 = state_14278__$1;
(statearr_14318_14370[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (19))){
var inst_14205 = (state_14278[(7)]);
var inst_14225 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14205);
var state_14278__$1 = state_14278;
var statearr_14319_14371 = state_14278__$1;
(statearr_14319_14371[(2)] = inst_14225);

(statearr_14319_14371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (11))){
var inst_14205 = (state_14278[(7)]);
var inst_14209 = (inst_14205 == null);
var inst_14210 = cljs.core.not.call(null,inst_14209);
var state_14278__$1 = state_14278;
if(inst_14210){
var statearr_14320_14372 = state_14278__$1;
(statearr_14320_14372[(1)] = (13));

} else {
var statearr_14321_14373 = state_14278__$1;
(statearr_14321_14373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (9))){
var inst_14180 = (state_14278[(8)]);
var state_14278__$1 = state_14278;
var statearr_14322_14374 = state_14278__$1;
(statearr_14322_14374[(2)] = inst_14180);

(statearr_14322_14374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (5))){
var state_14278__$1 = state_14278;
var statearr_14323_14375 = state_14278__$1;
(statearr_14323_14375[(2)] = true);

(statearr_14323_14375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (14))){
var state_14278__$1 = state_14278;
var statearr_14324_14376 = state_14278__$1;
(statearr_14324_14376[(2)] = false);

(statearr_14324_14376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (26))){
var inst_14238 = (state_14278[(10)]);
var inst_14245 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14238);
var state_14278__$1 = state_14278;
var statearr_14325_14377 = state_14278__$1;
(statearr_14325_14377[(2)] = inst_14245);

(statearr_14325_14377[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (16))){
var state_14278__$1 = state_14278;
var statearr_14326_14378 = state_14278__$1;
(statearr_14326_14378[(2)] = true);

(statearr_14326_14378[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (38))){
var inst_14268 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14327_14379 = state_14278__$1;
(statearr_14327_14379[(2)] = inst_14268);

(statearr_14327_14379[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (30))){
var inst_14238 = (state_14278[(10)]);
var inst_14229 = (state_14278[(11)]);
var inst_14230 = (state_14278[(13)]);
var inst_14255 = cljs.core.empty_QMARK_.call(null,inst_14229);
var inst_14256 = inst_14230.call(null,inst_14238);
var inst_14257 = cljs.core.not.call(null,inst_14256);
var inst_14258 = ((inst_14255) && (inst_14257));
var state_14278__$1 = state_14278;
var statearr_14328_14380 = state_14278__$1;
(statearr_14328_14380[(2)] = inst_14258);

(statearr_14328_14380[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (10))){
var inst_14180 = (state_14278[(8)]);
var inst_14201 = (state_14278[(2)]);
var inst_14202 = cljs.core.get.call(null,inst_14201,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14203 = cljs.core.get.call(null,inst_14201,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14204 = cljs.core.get.call(null,inst_14201,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14205 = inst_14180;
var state_14278__$1 = (function (){var statearr_14329 = state_14278;
(statearr_14329[(16)] = inst_14202);

(statearr_14329[(17)] = inst_14203);

(statearr_14329[(7)] = inst_14205);

(statearr_14329[(18)] = inst_14204);

return statearr_14329;
})();
var statearr_14330_14381 = state_14278__$1;
(statearr_14330_14381[(2)] = null);

(statearr_14330_14381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (18))){
var inst_14220 = (state_14278[(2)]);
var state_14278__$1 = state_14278;
var statearr_14331_14382 = state_14278__$1;
(statearr_14331_14382[(2)] = inst_14220);

(statearr_14331_14382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (37))){
var state_14278__$1 = state_14278;
var statearr_14332_14383 = state_14278__$1;
(statearr_14332_14383[(2)] = null);

(statearr_14332_14383[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14279 === (8))){
var inst_14180 = (state_14278[(8)]);
var inst_14198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14180);
var state_14278__$1 = state_14278;
var statearr_14333_14384 = state_14278__$1;
(statearr_14333_14384[(2)] = inst_14198);

(statearr_14333_14384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13185__auto__ = null;
var cljs$core$async$mix_$_state_machine__13185__auto____0 = (function (){
var statearr_14334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14334[(0)] = cljs$core$async$mix_$_state_machine__13185__auto__);

(statearr_14334[(1)] = (1));

return statearr_14334;
});
var cljs$core$async$mix_$_state_machine__13185__auto____1 = (function (state_14278){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_14278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e14335){if((e14335 instanceof Object)){
var ex__13188__auto__ = e14335;
var statearr_14336_14385 = state_14278;
(statearr_14336_14385[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14386 = state_14278;
state_14278 = G__14386;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13185__auto__ = function(state_14278){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13185__auto____1.call(this,state_14278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13185__auto____0;
cljs$core$async$mix_$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13185__auto____1;
return cljs$core$async$mix_$_state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_14337 = f__13280__auto__.call(null);
(statearr_14337[(6)] = c__13279__auto___14338);

return statearr_14337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14388 = arguments.length;
switch (G__14388) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14392 = arguments.length;
switch (G__14392) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__14390_SHARP_){
if(cljs.core.truth_(p1__14390_SHARP_.call(null,topic))){
return p1__14390_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14390_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14393 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14394){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14394 = meta14394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14395,meta14394__$1){
var self__ = this;
var _14395__$1 = this;
return (new cljs.core.async.t_cljs$core$async14393(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14394__$1));
}));

(cljs.core.async.t_cljs$core$async14393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14395){
var self__ = this;
var _14395__$1 = this;
return self__.meta14394;
}));

(cljs.core.async.t_cljs$core$async14393.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14393.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14393.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14393.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14393.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14393.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14393.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14394","meta14394",1469882579,null)], null);
}));

(cljs.core.async.t_cljs$core$async14393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14393");

(cljs.core.async.t_cljs$core$async14393.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async14393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14393.
 */
cljs.core.async.__GT_t_cljs$core$async14393 = (function cljs$core$async$__GT_t_cljs$core$async14393(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14394){
return (new cljs.core.async.t_cljs$core$async14393(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14394));
});

}

return (new cljs.core.async.t_cljs$core$async14393(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13279__auto___14513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_14467){
var state_val_14468 = (state_14467[(1)]);
if((state_val_14468 === (7))){
var inst_14463 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14469_14514 = state_14467__$1;
(statearr_14469_14514[(2)] = inst_14463);

(statearr_14469_14514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (20))){
var state_14467__$1 = state_14467;
var statearr_14470_14515 = state_14467__$1;
(statearr_14470_14515[(2)] = null);

(statearr_14470_14515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (1))){
var state_14467__$1 = state_14467;
var statearr_14471_14516 = state_14467__$1;
(statearr_14471_14516[(2)] = null);

(statearr_14471_14516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (24))){
var inst_14446 = (state_14467[(7)]);
var inst_14455 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14446);
var state_14467__$1 = state_14467;
var statearr_14472_14517 = state_14467__$1;
(statearr_14472_14517[(2)] = inst_14455);

(statearr_14472_14517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (4))){
var inst_14398 = (state_14467[(8)]);
var inst_14398__$1 = (state_14467[(2)]);
var inst_14399 = (inst_14398__$1 == null);
var state_14467__$1 = (function (){var statearr_14473 = state_14467;
(statearr_14473[(8)] = inst_14398__$1);

return statearr_14473;
})();
if(cljs.core.truth_(inst_14399)){
var statearr_14474_14518 = state_14467__$1;
(statearr_14474_14518[(1)] = (5));

} else {
var statearr_14475_14519 = state_14467__$1;
(statearr_14475_14519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (15))){
var inst_14440 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14476_14520 = state_14467__$1;
(statearr_14476_14520[(2)] = inst_14440);

(statearr_14476_14520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (21))){
var inst_14460 = (state_14467[(2)]);
var state_14467__$1 = (function (){var statearr_14477 = state_14467;
(statearr_14477[(9)] = inst_14460);

return statearr_14477;
})();
var statearr_14478_14521 = state_14467__$1;
(statearr_14478_14521[(2)] = null);

(statearr_14478_14521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (13))){
var inst_14422 = (state_14467[(10)]);
var inst_14424 = cljs.core.chunked_seq_QMARK_.call(null,inst_14422);
var state_14467__$1 = state_14467;
if(inst_14424){
var statearr_14479_14522 = state_14467__$1;
(statearr_14479_14522[(1)] = (16));

} else {
var statearr_14480_14523 = state_14467__$1;
(statearr_14480_14523[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (22))){
var inst_14452 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
if(cljs.core.truth_(inst_14452)){
var statearr_14481_14524 = state_14467__$1;
(statearr_14481_14524[(1)] = (23));

} else {
var statearr_14482_14525 = state_14467__$1;
(statearr_14482_14525[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (6))){
var inst_14398 = (state_14467[(8)]);
var inst_14446 = (state_14467[(7)]);
var inst_14448 = (state_14467[(11)]);
var inst_14446__$1 = topic_fn.call(null,inst_14398);
var inst_14447 = cljs.core.deref.call(null,mults);
var inst_14448__$1 = cljs.core.get.call(null,inst_14447,inst_14446__$1);
var state_14467__$1 = (function (){var statearr_14483 = state_14467;
(statearr_14483[(7)] = inst_14446__$1);

(statearr_14483[(11)] = inst_14448__$1);

return statearr_14483;
})();
if(cljs.core.truth_(inst_14448__$1)){
var statearr_14484_14526 = state_14467__$1;
(statearr_14484_14526[(1)] = (19));

} else {
var statearr_14485_14527 = state_14467__$1;
(statearr_14485_14527[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (25))){
var inst_14457 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14486_14528 = state_14467__$1;
(statearr_14486_14528[(2)] = inst_14457);

(statearr_14486_14528[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (17))){
var inst_14422 = (state_14467[(10)]);
var inst_14431 = cljs.core.first.call(null,inst_14422);
var inst_14432 = cljs.core.async.muxch_STAR_.call(null,inst_14431);
var inst_14433 = cljs.core.async.close_BANG_.call(null,inst_14432);
var inst_14434 = cljs.core.next.call(null,inst_14422);
var inst_14408 = inst_14434;
var inst_14409 = null;
var inst_14410 = (0);
var inst_14411 = (0);
var state_14467__$1 = (function (){var statearr_14487 = state_14467;
(statearr_14487[(12)] = inst_14408);

(statearr_14487[(13)] = inst_14410);

(statearr_14487[(14)] = inst_14409);

(statearr_14487[(15)] = inst_14433);

(statearr_14487[(16)] = inst_14411);

return statearr_14487;
})();
var statearr_14488_14529 = state_14467__$1;
(statearr_14488_14529[(2)] = null);

(statearr_14488_14529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (3))){
var inst_14465 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14467__$1,inst_14465);
} else {
if((state_val_14468 === (12))){
var inst_14442 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14489_14530 = state_14467__$1;
(statearr_14489_14530[(2)] = inst_14442);

(statearr_14489_14530[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (2))){
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14467__$1,(4),ch);
} else {
if((state_val_14468 === (23))){
var state_14467__$1 = state_14467;
var statearr_14490_14531 = state_14467__$1;
(statearr_14490_14531[(2)] = null);

(statearr_14490_14531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (19))){
var inst_14398 = (state_14467[(8)]);
var inst_14448 = (state_14467[(11)]);
var inst_14450 = cljs.core.async.muxch_STAR_.call(null,inst_14448);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14467__$1,(22),inst_14450,inst_14398);
} else {
if((state_val_14468 === (11))){
var inst_14408 = (state_14467[(12)]);
var inst_14422 = (state_14467[(10)]);
var inst_14422__$1 = cljs.core.seq.call(null,inst_14408);
var state_14467__$1 = (function (){var statearr_14491 = state_14467;
(statearr_14491[(10)] = inst_14422__$1);

return statearr_14491;
})();
if(inst_14422__$1){
var statearr_14492_14532 = state_14467__$1;
(statearr_14492_14532[(1)] = (13));

} else {
var statearr_14493_14533 = state_14467__$1;
(statearr_14493_14533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (9))){
var inst_14444 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14494_14534 = state_14467__$1;
(statearr_14494_14534[(2)] = inst_14444);

(statearr_14494_14534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (5))){
var inst_14405 = cljs.core.deref.call(null,mults);
var inst_14406 = cljs.core.vals.call(null,inst_14405);
var inst_14407 = cljs.core.seq.call(null,inst_14406);
var inst_14408 = inst_14407;
var inst_14409 = null;
var inst_14410 = (0);
var inst_14411 = (0);
var state_14467__$1 = (function (){var statearr_14495 = state_14467;
(statearr_14495[(12)] = inst_14408);

(statearr_14495[(13)] = inst_14410);

(statearr_14495[(14)] = inst_14409);

(statearr_14495[(16)] = inst_14411);

return statearr_14495;
})();
var statearr_14496_14535 = state_14467__$1;
(statearr_14496_14535[(2)] = null);

(statearr_14496_14535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (14))){
var state_14467__$1 = state_14467;
var statearr_14500_14536 = state_14467__$1;
(statearr_14500_14536[(2)] = null);

(statearr_14500_14536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (16))){
var inst_14422 = (state_14467[(10)]);
var inst_14426 = cljs.core.chunk_first.call(null,inst_14422);
var inst_14427 = cljs.core.chunk_rest.call(null,inst_14422);
var inst_14428 = cljs.core.count.call(null,inst_14426);
var inst_14408 = inst_14427;
var inst_14409 = inst_14426;
var inst_14410 = inst_14428;
var inst_14411 = (0);
var state_14467__$1 = (function (){var statearr_14501 = state_14467;
(statearr_14501[(12)] = inst_14408);

(statearr_14501[(13)] = inst_14410);

(statearr_14501[(14)] = inst_14409);

(statearr_14501[(16)] = inst_14411);

return statearr_14501;
})();
var statearr_14502_14537 = state_14467__$1;
(statearr_14502_14537[(2)] = null);

(statearr_14502_14537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (10))){
var inst_14408 = (state_14467[(12)]);
var inst_14410 = (state_14467[(13)]);
var inst_14409 = (state_14467[(14)]);
var inst_14411 = (state_14467[(16)]);
var inst_14416 = cljs.core._nth.call(null,inst_14409,inst_14411);
var inst_14417 = cljs.core.async.muxch_STAR_.call(null,inst_14416);
var inst_14418 = cljs.core.async.close_BANG_.call(null,inst_14417);
var inst_14419 = (inst_14411 + (1));
var tmp14497 = inst_14408;
var tmp14498 = inst_14410;
var tmp14499 = inst_14409;
var inst_14408__$1 = tmp14497;
var inst_14409__$1 = tmp14499;
var inst_14410__$1 = tmp14498;
var inst_14411__$1 = inst_14419;
var state_14467__$1 = (function (){var statearr_14503 = state_14467;
(statearr_14503[(12)] = inst_14408__$1);

(statearr_14503[(13)] = inst_14410__$1);

(statearr_14503[(14)] = inst_14409__$1);

(statearr_14503[(16)] = inst_14411__$1);

(statearr_14503[(17)] = inst_14418);

return statearr_14503;
})();
var statearr_14504_14538 = state_14467__$1;
(statearr_14504_14538[(2)] = null);

(statearr_14504_14538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (18))){
var inst_14437 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14505_14539 = state_14467__$1;
(statearr_14505_14539[(2)] = inst_14437);

(statearr_14505_14539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (8))){
var inst_14410 = (state_14467[(13)]);
var inst_14411 = (state_14467[(16)]);
var inst_14413 = (inst_14411 < inst_14410);
var inst_14414 = inst_14413;
var state_14467__$1 = state_14467;
if(cljs.core.truth_(inst_14414)){
var statearr_14506_14540 = state_14467__$1;
(statearr_14506_14540[(1)] = (10));

} else {
var statearr_14507_14541 = state_14467__$1;
(statearr_14507_14541[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_14508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14508[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_14508[(1)] = (1));

return statearr_14508;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_14467){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_14467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e14509){if((e14509 instanceof Object)){
var ex__13188__auto__ = e14509;
var statearr_14510_14542 = state_14467;
(statearr_14510_14542[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14543 = state_14467;
state_14467 = G__14543;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_14467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_14467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_14511 = f__13280__auto__.call(null);
(statearr_14511[(6)] = c__13279__auto___14513);

return statearr_14511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14545 = arguments.length;
switch (G__14545) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14548 = arguments.length;
switch (G__14548) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14551 = arguments.length;
switch (G__14551) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__13279__auto___14618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_14590){
var state_val_14591 = (state_14590[(1)]);
if((state_val_14591 === (7))){
var state_14590__$1 = state_14590;
var statearr_14592_14619 = state_14590__$1;
(statearr_14592_14619[(2)] = null);

(statearr_14592_14619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (1))){
var state_14590__$1 = state_14590;
var statearr_14593_14620 = state_14590__$1;
(statearr_14593_14620[(2)] = null);

(statearr_14593_14620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (4))){
var inst_14554 = (state_14590[(7)]);
var inst_14556 = (inst_14554 < cnt);
var state_14590__$1 = state_14590;
if(cljs.core.truth_(inst_14556)){
var statearr_14594_14621 = state_14590__$1;
(statearr_14594_14621[(1)] = (6));

} else {
var statearr_14595_14622 = state_14590__$1;
(statearr_14595_14622[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (15))){
var inst_14586 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14596_14623 = state_14590__$1;
(statearr_14596_14623[(2)] = inst_14586);

(statearr_14596_14623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (13))){
var inst_14579 = cljs.core.async.close_BANG_.call(null,out);
var state_14590__$1 = state_14590;
var statearr_14597_14624 = state_14590__$1;
(statearr_14597_14624[(2)] = inst_14579);

(statearr_14597_14624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (6))){
var state_14590__$1 = state_14590;
var statearr_14598_14625 = state_14590__$1;
(statearr_14598_14625[(2)] = null);

(statearr_14598_14625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (3))){
var inst_14588 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14590__$1,inst_14588);
} else {
if((state_val_14591 === (12))){
var inst_14576 = (state_14590[(8)]);
var inst_14576__$1 = (state_14590[(2)]);
var inst_14577 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14576__$1);
var state_14590__$1 = (function (){var statearr_14599 = state_14590;
(statearr_14599[(8)] = inst_14576__$1);

return statearr_14599;
})();
if(cljs.core.truth_(inst_14577)){
var statearr_14600_14626 = state_14590__$1;
(statearr_14600_14626[(1)] = (13));

} else {
var statearr_14601_14627 = state_14590__$1;
(statearr_14601_14627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (2))){
var inst_14553 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14554 = (0);
var state_14590__$1 = (function (){var statearr_14602 = state_14590;
(statearr_14602[(9)] = inst_14553);

(statearr_14602[(7)] = inst_14554);

return statearr_14602;
})();
var statearr_14603_14628 = state_14590__$1;
(statearr_14603_14628[(2)] = null);

(statearr_14603_14628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (11))){
var inst_14554 = (state_14590[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14590,(10),Object,null,(9));
var inst_14563 = chs__$1.call(null,inst_14554);
var inst_14564 = done.call(null,inst_14554);
var inst_14565 = cljs.core.async.take_BANG_.call(null,inst_14563,inst_14564);
var state_14590__$1 = state_14590;
var statearr_14604_14629 = state_14590__$1;
(statearr_14604_14629[(2)] = inst_14565);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14590__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (9))){
var inst_14554 = (state_14590[(7)]);
var inst_14567 = (state_14590[(2)]);
var inst_14568 = (inst_14554 + (1));
var inst_14554__$1 = inst_14568;
var state_14590__$1 = (function (){var statearr_14605 = state_14590;
(statearr_14605[(10)] = inst_14567);

(statearr_14605[(7)] = inst_14554__$1);

return statearr_14605;
})();
var statearr_14606_14630 = state_14590__$1;
(statearr_14606_14630[(2)] = null);

(statearr_14606_14630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (5))){
var inst_14574 = (state_14590[(2)]);
var state_14590__$1 = (function (){var statearr_14607 = state_14590;
(statearr_14607[(11)] = inst_14574);

return statearr_14607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14590__$1,(12),dchan);
} else {
if((state_val_14591 === (14))){
var inst_14576 = (state_14590[(8)]);
var inst_14581 = cljs.core.apply.call(null,f,inst_14576);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14590__$1,(16),out,inst_14581);
} else {
if((state_val_14591 === (16))){
var inst_14583 = (state_14590[(2)]);
var state_14590__$1 = (function (){var statearr_14608 = state_14590;
(statearr_14608[(12)] = inst_14583);

return statearr_14608;
})();
var statearr_14609_14631 = state_14590__$1;
(statearr_14609_14631[(2)] = null);

(statearr_14609_14631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (10))){
var inst_14558 = (state_14590[(2)]);
var inst_14559 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14590__$1 = (function (){var statearr_14610 = state_14590;
(statearr_14610[(13)] = inst_14558);

return statearr_14610;
})();
var statearr_14611_14632 = state_14590__$1;
(statearr_14611_14632[(2)] = inst_14559);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14590__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (8))){
var inst_14572 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14612_14633 = state_14590__$1;
(statearr_14612_14633[(2)] = inst_14572);

(statearr_14612_14633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_14613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14613[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_14613[(1)] = (1));

return statearr_14613;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_14590){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_14590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e14614){if((e14614 instanceof Object)){
var ex__13188__auto__ = e14614;
var statearr_14615_14634 = state_14590;
(statearr_14615_14634[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14635 = state_14590;
state_14590 = G__14635;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_14590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_14590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_14616 = f__13280__auto__.call(null);
(statearr_14616[(6)] = c__13279__auto___14618);

return statearr_14616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14638 = arguments.length;
switch (G__14638) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___14692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_14670){
var state_val_14671 = (state_14670[(1)]);
if((state_val_14671 === (7))){
var inst_14650 = (state_14670[(7)]);
var inst_14649 = (state_14670[(8)]);
var inst_14649__$1 = (state_14670[(2)]);
var inst_14650__$1 = cljs.core.nth.call(null,inst_14649__$1,(0),null);
var inst_14651 = cljs.core.nth.call(null,inst_14649__$1,(1),null);
var inst_14652 = (inst_14650__$1 == null);
var state_14670__$1 = (function (){var statearr_14672 = state_14670;
(statearr_14672[(7)] = inst_14650__$1);

(statearr_14672[(8)] = inst_14649__$1);

(statearr_14672[(9)] = inst_14651);

return statearr_14672;
})();
if(cljs.core.truth_(inst_14652)){
var statearr_14673_14693 = state_14670__$1;
(statearr_14673_14693[(1)] = (8));

} else {
var statearr_14674_14694 = state_14670__$1;
(statearr_14674_14694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (1))){
var inst_14639 = cljs.core.vec.call(null,chs);
var inst_14640 = inst_14639;
var state_14670__$1 = (function (){var statearr_14675 = state_14670;
(statearr_14675[(10)] = inst_14640);

return statearr_14675;
})();
var statearr_14676_14695 = state_14670__$1;
(statearr_14676_14695[(2)] = null);

(statearr_14676_14695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (4))){
var inst_14640 = (state_14670[(10)]);
var state_14670__$1 = state_14670;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14670__$1,(7),inst_14640);
} else {
if((state_val_14671 === (6))){
var inst_14666 = (state_14670[(2)]);
var state_14670__$1 = state_14670;
var statearr_14677_14696 = state_14670__$1;
(statearr_14677_14696[(2)] = inst_14666);

(statearr_14677_14696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (3))){
var inst_14668 = (state_14670[(2)]);
var state_14670__$1 = state_14670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14670__$1,inst_14668);
} else {
if((state_val_14671 === (2))){
var inst_14640 = (state_14670[(10)]);
var inst_14642 = cljs.core.count.call(null,inst_14640);
var inst_14643 = (inst_14642 > (0));
var state_14670__$1 = state_14670;
if(cljs.core.truth_(inst_14643)){
var statearr_14679_14697 = state_14670__$1;
(statearr_14679_14697[(1)] = (4));

} else {
var statearr_14680_14698 = state_14670__$1;
(statearr_14680_14698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (11))){
var inst_14640 = (state_14670[(10)]);
var inst_14659 = (state_14670[(2)]);
var tmp14678 = inst_14640;
var inst_14640__$1 = tmp14678;
var state_14670__$1 = (function (){var statearr_14681 = state_14670;
(statearr_14681[(11)] = inst_14659);

(statearr_14681[(10)] = inst_14640__$1);

return statearr_14681;
})();
var statearr_14682_14699 = state_14670__$1;
(statearr_14682_14699[(2)] = null);

(statearr_14682_14699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (9))){
var inst_14650 = (state_14670[(7)]);
var state_14670__$1 = state_14670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14670__$1,(11),out,inst_14650);
} else {
if((state_val_14671 === (5))){
var inst_14664 = cljs.core.async.close_BANG_.call(null,out);
var state_14670__$1 = state_14670;
var statearr_14683_14700 = state_14670__$1;
(statearr_14683_14700[(2)] = inst_14664);

(statearr_14683_14700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (10))){
var inst_14662 = (state_14670[(2)]);
var state_14670__$1 = state_14670;
var statearr_14684_14701 = state_14670__$1;
(statearr_14684_14701[(2)] = inst_14662);

(statearr_14684_14701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14671 === (8))){
var inst_14650 = (state_14670[(7)]);
var inst_14649 = (state_14670[(8)]);
var inst_14640 = (state_14670[(10)]);
var inst_14651 = (state_14670[(9)]);
var inst_14654 = (function (){var cs = inst_14640;
var vec__14645 = inst_14649;
var v = inst_14650;
var c = inst_14651;
return (function (p1__14636_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14636_SHARP_);
});
})();
var inst_14655 = cljs.core.filterv.call(null,inst_14654,inst_14640);
var inst_14640__$1 = inst_14655;
var state_14670__$1 = (function (){var statearr_14685 = state_14670;
(statearr_14685[(10)] = inst_14640__$1);

return statearr_14685;
})();
var statearr_14686_14702 = state_14670__$1;
(statearr_14686_14702[(2)] = null);

(statearr_14686_14702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_14687 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14687[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_14687[(1)] = (1));

return statearr_14687;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_14670){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_14670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e14688){if((e14688 instanceof Object)){
var ex__13188__auto__ = e14688;
var statearr_14689_14703 = state_14670;
(statearr_14689_14703[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14704 = state_14670;
state_14670 = G__14704;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_14670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_14670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_14690 = f__13280__auto__.call(null);
(statearr_14690[(6)] = c__13279__auto___14692);

return statearr_14690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14706 = arguments.length;
switch (G__14706) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___14751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_14730){
var state_val_14731 = (state_14730[(1)]);
if((state_val_14731 === (7))){
var inst_14712 = (state_14730[(7)]);
var inst_14712__$1 = (state_14730[(2)]);
var inst_14713 = (inst_14712__$1 == null);
var inst_14714 = cljs.core.not.call(null,inst_14713);
var state_14730__$1 = (function (){var statearr_14732 = state_14730;
(statearr_14732[(7)] = inst_14712__$1);

return statearr_14732;
})();
if(inst_14714){
var statearr_14733_14752 = state_14730__$1;
(statearr_14733_14752[(1)] = (8));

} else {
var statearr_14734_14753 = state_14730__$1;
(statearr_14734_14753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (1))){
var inst_14707 = (0);
var state_14730__$1 = (function (){var statearr_14735 = state_14730;
(statearr_14735[(8)] = inst_14707);

return statearr_14735;
})();
var statearr_14736_14754 = state_14730__$1;
(statearr_14736_14754[(2)] = null);

(statearr_14736_14754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (4))){
var state_14730__$1 = state_14730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14730__$1,(7),ch);
} else {
if((state_val_14731 === (6))){
var inst_14725 = (state_14730[(2)]);
var state_14730__$1 = state_14730;
var statearr_14737_14755 = state_14730__$1;
(statearr_14737_14755[(2)] = inst_14725);

(statearr_14737_14755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (3))){
var inst_14727 = (state_14730[(2)]);
var inst_14728 = cljs.core.async.close_BANG_.call(null,out);
var state_14730__$1 = (function (){var statearr_14738 = state_14730;
(statearr_14738[(9)] = inst_14727);

return statearr_14738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14730__$1,inst_14728);
} else {
if((state_val_14731 === (2))){
var inst_14707 = (state_14730[(8)]);
var inst_14709 = (inst_14707 < n);
var state_14730__$1 = state_14730;
if(cljs.core.truth_(inst_14709)){
var statearr_14739_14756 = state_14730__$1;
(statearr_14739_14756[(1)] = (4));

} else {
var statearr_14740_14757 = state_14730__$1;
(statearr_14740_14757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (11))){
var inst_14707 = (state_14730[(8)]);
var inst_14717 = (state_14730[(2)]);
var inst_14718 = (inst_14707 + (1));
var inst_14707__$1 = inst_14718;
var state_14730__$1 = (function (){var statearr_14741 = state_14730;
(statearr_14741[(8)] = inst_14707__$1);

(statearr_14741[(10)] = inst_14717);

return statearr_14741;
})();
var statearr_14742_14758 = state_14730__$1;
(statearr_14742_14758[(2)] = null);

(statearr_14742_14758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (9))){
var state_14730__$1 = state_14730;
var statearr_14743_14759 = state_14730__$1;
(statearr_14743_14759[(2)] = null);

(statearr_14743_14759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (5))){
var state_14730__$1 = state_14730;
var statearr_14744_14760 = state_14730__$1;
(statearr_14744_14760[(2)] = null);

(statearr_14744_14760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (10))){
var inst_14722 = (state_14730[(2)]);
var state_14730__$1 = state_14730;
var statearr_14745_14761 = state_14730__$1;
(statearr_14745_14761[(2)] = inst_14722);

(statearr_14745_14761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (8))){
var inst_14712 = (state_14730[(7)]);
var state_14730__$1 = state_14730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14730__$1,(11),out,inst_14712);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_14746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14746[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_14746[(1)] = (1));

return statearr_14746;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_14730){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_14730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e14747){if((e14747 instanceof Object)){
var ex__13188__auto__ = e14747;
var statearr_14748_14762 = state_14730;
(statearr_14748_14762[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14763 = state_14730;
state_14730 = G__14763;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_14730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_14730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_14749 = f__13280__auto__.call(null);
(statearr_14749[(6)] = c__13279__auto___14751);

return statearr_14749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14765 = (function (f,ch,meta14766){
this.f = f;
this.ch = ch;
this.meta14766 = meta14766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14767,meta14766__$1){
var self__ = this;
var _14767__$1 = this;
return (new cljs.core.async.t_cljs$core$async14765(self__.f,self__.ch,meta14766__$1));
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14767){
var self__ = this;
var _14767__$1 = this;
return self__.meta14766;
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14768 = (function (f,ch,meta14766,_,fn1,meta14769){
this.f = f;
this.ch = ch;
this.meta14766 = meta14766;
this._ = _;
this.fn1 = fn1;
this.meta14769 = meta14769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14770,meta14769__$1){
var self__ = this;
var _14770__$1 = this;
return (new cljs.core.async.t_cljs$core$async14768(self__.f,self__.ch,self__.meta14766,self__._,self__.fn1,meta14769__$1));
}));

(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14770){
var self__ = this;
var _14770__$1 = this;
return self__.meta14769;
}));

(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__14764_SHARP_){
return f1.call(null,(((p1__14764_SHARP_ == null))?null:self__.f.call(null,p1__14764_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async14768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14766","meta14766",860635932,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14765","cljs.core.async/t_cljs$core$async14765",-256563213,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14769","meta14769",1259237757,null)], null);
}));

(cljs.core.async.t_cljs$core$async14768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14768");

(cljs.core.async.t_cljs$core$async14768.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async14768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14768.
 */
cljs.core.async.__GT_t_cljs$core$async14768 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14768(f__$1,ch__$1,meta14766__$1,___$2,fn1__$1,meta14769){
return (new cljs.core.async.t_cljs$core$async14768(f__$1,ch__$1,meta14766__$1,___$2,fn1__$1,meta14769));
});

}

return (new cljs.core.async.t_cljs$core$async14768(self__.f,self__.ch,self__.meta14766,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14766","meta14766",860635932,null)], null);
}));

(cljs.core.async.t_cljs$core$async14765.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14765");

(cljs.core.async.t_cljs$core$async14765.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async14765");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14765.
 */
cljs.core.async.__GT_t_cljs$core$async14765 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14765(f__$1,ch__$1,meta14766){
return (new cljs.core.async.t_cljs$core$async14765(f__$1,ch__$1,meta14766));
});

}

return (new cljs.core.async.t_cljs$core$async14765(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14771 = (function (f,ch,meta14772){
this.f = f;
this.ch = ch;
this.meta14772 = meta14772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14773,meta14772__$1){
var self__ = this;
var _14773__$1 = this;
return (new cljs.core.async.t_cljs$core$async14771(self__.f,self__.ch,meta14772__$1));
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14773){
var self__ = this;
var _14773__$1 = this;
return self__.meta14772;
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async14771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14772","meta14772",1973484857,null)], null);
}));

(cljs.core.async.t_cljs$core$async14771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14771");

(cljs.core.async.t_cljs$core$async14771.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async14771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14771.
 */
cljs.core.async.__GT_t_cljs$core$async14771 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14771(f__$1,ch__$1,meta14772){
return (new cljs.core.async.t_cljs$core$async14771(f__$1,ch__$1,meta14772));
});

}

return (new cljs.core.async.t_cljs$core$async14771(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14774 = (function (p,ch,meta14775){
this.p = p;
this.ch = ch;
this.meta14775 = meta14775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14776,meta14775__$1){
var self__ = this;
var _14776__$1 = this;
return (new cljs.core.async.t_cljs$core$async14774(self__.p,self__.ch,meta14775__$1));
}));

(cljs.core.async.t_cljs$core$async14774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14776){
var self__ = this;
var _14776__$1 = this;
return self__.meta14775;
}));

(cljs.core.async.t_cljs$core$async14774.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14774.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14774.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14774.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14774.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14774.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14774.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14775","meta14775",683548064,null)], null);
}));

(cljs.core.async.t_cljs$core$async14774.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14774");

(cljs.core.async.t_cljs$core$async14774.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async14774");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14774.
 */
cljs.core.async.__GT_t_cljs$core$async14774 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14774(p__$1,ch__$1,meta14775){
return (new cljs.core.async.t_cljs$core$async14774(p__$1,ch__$1,meta14775));
});

}

return (new cljs.core.async.t_cljs$core$async14774(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14778 = arguments.length;
switch (G__14778) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___14818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_14799){
var state_val_14800 = (state_14799[(1)]);
if((state_val_14800 === (7))){
var inst_14795 = (state_14799[(2)]);
var state_14799__$1 = state_14799;
var statearr_14801_14819 = state_14799__$1;
(statearr_14801_14819[(2)] = inst_14795);

(statearr_14801_14819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14800 === (1))){
var state_14799__$1 = state_14799;
var statearr_14802_14820 = state_14799__$1;
(statearr_14802_14820[(2)] = null);

(statearr_14802_14820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14800 === (4))){
var inst_14781 = (state_14799[(7)]);
var inst_14781__$1 = (state_14799[(2)]);
var inst_14782 = (inst_14781__$1 == null);
var state_14799__$1 = (function (){var statearr_14803 = state_14799;
(statearr_14803[(7)] = inst_14781__$1);

return statearr_14803;
})();
if(cljs.core.truth_(inst_14782)){
var statearr_14804_14821 = state_14799__$1;
(statearr_14804_14821[(1)] = (5));

} else {
var statearr_14805_14822 = state_14799__$1;
(statearr_14805_14822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14800 === (6))){
var inst_14781 = (state_14799[(7)]);
var inst_14786 = p.call(null,inst_14781);
var state_14799__$1 = state_14799;
if(cljs.core.truth_(inst_14786)){
var statearr_14806_14823 = state_14799__$1;
(statearr_14806_14823[(1)] = (8));

} else {
var statearr_14807_14824 = state_14799__$1;
(statearr_14807_14824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14800 === (3))){
var inst_14797 = (state_14799[(2)]);
var state_14799__$1 = state_14799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14799__$1,inst_14797);
} else {
if((state_val_14800 === (2))){
var state_14799__$1 = state_14799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14799__$1,(4),ch);
} else {
if((state_val_14800 === (11))){
var inst_14789 = (state_14799[(2)]);
var state_14799__$1 = state_14799;
var statearr_14808_14825 = state_14799__$1;
(statearr_14808_14825[(2)] = inst_14789);

(statearr_14808_14825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14800 === (9))){
var state_14799__$1 = state_14799;
var statearr_14809_14826 = state_14799__$1;
(statearr_14809_14826[(2)] = null);

(statearr_14809_14826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14800 === (5))){
var inst_14784 = cljs.core.async.close_BANG_.call(null,out);
var state_14799__$1 = state_14799;
var statearr_14810_14827 = state_14799__$1;
(statearr_14810_14827[(2)] = inst_14784);

(statearr_14810_14827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14800 === (10))){
var inst_14792 = (state_14799[(2)]);
var state_14799__$1 = (function (){var statearr_14811 = state_14799;
(statearr_14811[(8)] = inst_14792);

return statearr_14811;
})();
var statearr_14812_14828 = state_14799__$1;
(statearr_14812_14828[(2)] = null);

(statearr_14812_14828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14800 === (8))){
var inst_14781 = (state_14799[(7)]);
var state_14799__$1 = state_14799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14799__$1,(11),out,inst_14781);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_14813 = [null,null,null,null,null,null,null,null,null];
(statearr_14813[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_14813[(1)] = (1));

return statearr_14813;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_14799){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_14799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e14814){if((e14814 instanceof Object)){
var ex__13188__auto__ = e14814;
var statearr_14815_14829 = state_14799;
(statearr_14815_14829[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14830 = state_14799;
state_14799 = G__14830;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_14799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_14799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_14816 = f__13280__auto__.call(null);
(statearr_14816[(6)] = c__13279__auto___14818);

return statearr_14816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14832 = arguments.length;
switch (G__14832) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_14895){
var state_val_14896 = (state_14895[(1)]);
if((state_val_14896 === (7))){
var inst_14891 = (state_14895[(2)]);
var state_14895__$1 = state_14895;
var statearr_14897_14935 = state_14895__$1;
(statearr_14897_14935[(2)] = inst_14891);

(statearr_14897_14935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (20))){
var inst_14861 = (state_14895[(7)]);
var inst_14872 = (state_14895[(2)]);
var inst_14873 = cljs.core.next.call(null,inst_14861);
var inst_14847 = inst_14873;
var inst_14848 = null;
var inst_14849 = (0);
var inst_14850 = (0);
var state_14895__$1 = (function (){var statearr_14898 = state_14895;
(statearr_14898[(8)] = inst_14872);

(statearr_14898[(9)] = inst_14847);

(statearr_14898[(10)] = inst_14848);

(statearr_14898[(11)] = inst_14850);

(statearr_14898[(12)] = inst_14849);

return statearr_14898;
})();
var statearr_14899_14936 = state_14895__$1;
(statearr_14899_14936[(2)] = null);

(statearr_14899_14936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (1))){
var state_14895__$1 = state_14895;
var statearr_14900_14937 = state_14895__$1;
(statearr_14900_14937[(2)] = null);

(statearr_14900_14937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (4))){
var inst_14836 = (state_14895[(13)]);
var inst_14836__$1 = (state_14895[(2)]);
var inst_14837 = (inst_14836__$1 == null);
var state_14895__$1 = (function (){var statearr_14901 = state_14895;
(statearr_14901[(13)] = inst_14836__$1);

return statearr_14901;
})();
if(cljs.core.truth_(inst_14837)){
var statearr_14902_14938 = state_14895__$1;
(statearr_14902_14938[(1)] = (5));

} else {
var statearr_14903_14939 = state_14895__$1;
(statearr_14903_14939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (15))){
var state_14895__$1 = state_14895;
var statearr_14907_14940 = state_14895__$1;
(statearr_14907_14940[(2)] = null);

(statearr_14907_14940[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (21))){
var state_14895__$1 = state_14895;
var statearr_14908_14941 = state_14895__$1;
(statearr_14908_14941[(2)] = null);

(statearr_14908_14941[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (13))){
var inst_14847 = (state_14895[(9)]);
var inst_14848 = (state_14895[(10)]);
var inst_14850 = (state_14895[(11)]);
var inst_14849 = (state_14895[(12)]);
var inst_14857 = (state_14895[(2)]);
var inst_14858 = (inst_14850 + (1));
var tmp14904 = inst_14847;
var tmp14905 = inst_14848;
var tmp14906 = inst_14849;
var inst_14847__$1 = tmp14904;
var inst_14848__$1 = tmp14905;
var inst_14849__$1 = tmp14906;
var inst_14850__$1 = inst_14858;
var state_14895__$1 = (function (){var statearr_14909 = state_14895;
(statearr_14909[(9)] = inst_14847__$1);

(statearr_14909[(14)] = inst_14857);

(statearr_14909[(10)] = inst_14848__$1);

(statearr_14909[(11)] = inst_14850__$1);

(statearr_14909[(12)] = inst_14849__$1);

return statearr_14909;
})();
var statearr_14910_14942 = state_14895__$1;
(statearr_14910_14942[(2)] = null);

(statearr_14910_14942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (22))){
var state_14895__$1 = state_14895;
var statearr_14911_14943 = state_14895__$1;
(statearr_14911_14943[(2)] = null);

(statearr_14911_14943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (6))){
var inst_14836 = (state_14895[(13)]);
var inst_14845 = f.call(null,inst_14836);
var inst_14846 = cljs.core.seq.call(null,inst_14845);
var inst_14847 = inst_14846;
var inst_14848 = null;
var inst_14849 = (0);
var inst_14850 = (0);
var state_14895__$1 = (function (){var statearr_14912 = state_14895;
(statearr_14912[(9)] = inst_14847);

(statearr_14912[(10)] = inst_14848);

(statearr_14912[(11)] = inst_14850);

(statearr_14912[(12)] = inst_14849);

return statearr_14912;
})();
var statearr_14913_14944 = state_14895__$1;
(statearr_14913_14944[(2)] = null);

(statearr_14913_14944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (17))){
var inst_14861 = (state_14895[(7)]);
var inst_14865 = cljs.core.chunk_first.call(null,inst_14861);
var inst_14866 = cljs.core.chunk_rest.call(null,inst_14861);
var inst_14867 = cljs.core.count.call(null,inst_14865);
var inst_14847 = inst_14866;
var inst_14848 = inst_14865;
var inst_14849 = inst_14867;
var inst_14850 = (0);
var state_14895__$1 = (function (){var statearr_14914 = state_14895;
(statearr_14914[(9)] = inst_14847);

(statearr_14914[(10)] = inst_14848);

(statearr_14914[(11)] = inst_14850);

(statearr_14914[(12)] = inst_14849);

return statearr_14914;
})();
var statearr_14915_14945 = state_14895__$1;
(statearr_14915_14945[(2)] = null);

(statearr_14915_14945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (3))){
var inst_14893 = (state_14895[(2)]);
var state_14895__$1 = state_14895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14895__$1,inst_14893);
} else {
if((state_val_14896 === (12))){
var inst_14881 = (state_14895[(2)]);
var state_14895__$1 = state_14895;
var statearr_14916_14946 = state_14895__$1;
(statearr_14916_14946[(2)] = inst_14881);

(statearr_14916_14946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (2))){
var state_14895__$1 = state_14895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14895__$1,(4),in$);
} else {
if((state_val_14896 === (23))){
var inst_14889 = (state_14895[(2)]);
var state_14895__$1 = state_14895;
var statearr_14917_14947 = state_14895__$1;
(statearr_14917_14947[(2)] = inst_14889);

(statearr_14917_14947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (19))){
var inst_14876 = (state_14895[(2)]);
var state_14895__$1 = state_14895;
var statearr_14918_14948 = state_14895__$1;
(statearr_14918_14948[(2)] = inst_14876);

(statearr_14918_14948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (11))){
var inst_14847 = (state_14895[(9)]);
var inst_14861 = (state_14895[(7)]);
var inst_14861__$1 = cljs.core.seq.call(null,inst_14847);
var state_14895__$1 = (function (){var statearr_14919 = state_14895;
(statearr_14919[(7)] = inst_14861__$1);

return statearr_14919;
})();
if(inst_14861__$1){
var statearr_14920_14949 = state_14895__$1;
(statearr_14920_14949[(1)] = (14));

} else {
var statearr_14921_14950 = state_14895__$1;
(statearr_14921_14950[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (9))){
var inst_14883 = (state_14895[(2)]);
var inst_14884 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14895__$1 = (function (){var statearr_14922 = state_14895;
(statearr_14922[(15)] = inst_14883);

return statearr_14922;
})();
if(cljs.core.truth_(inst_14884)){
var statearr_14923_14951 = state_14895__$1;
(statearr_14923_14951[(1)] = (21));

} else {
var statearr_14924_14952 = state_14895__$1;
(statearr_14924_14952[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (5))){
var inst_14839 = cljs.core.async.close_BANG_.call(null,out);
var state_14895__$1 = state_14895;
var statearr_14925_14953 = state_14895__$1;
(statearr_14925_14953[(2)] = inst_14839);

(statearr_14925_14953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (14))){
var inst_14861 = (state_14895[(7)]);
var inst_14863 = cljs.core.chunked_seq_QMARK_.call(null,inst_14861);
var state_14895__$1 = state_14895;
if(inst_14863){
var statearr_14926_14954 = state_14895__$1;
(statearr_14926_14954[(1)] = (17));

} else {
var statearr_14927_14955 = state_14895__$1;
(statearr_14927_14955[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (16))){
var inst_14879 = (state_14895[(2)]);
var state_14895__$1 = state_14895;
var statearr_14928_14956 = state_14895__$1;
(statearr_14928_14956[(2)] = inst_14879);

(statearr_14928_14956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14896 === (10))){
var inst_14848 = (state_14895[(10)]);
var inst_14850 = (state_14895[(11)]);
var inst_14855 = cljs.core._nth.call(null,inst_14848,inst_14850);
var state_14895__$1 = state_14895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14895__$1,(13),out,inst_14855);
} else {
if((state_val_14896 === (18))){
var inst_14861 = (state_14895[(7)]);
var inst_14870 = cljs.core.first.call(null,inst_14861);
var state_14895__$1 = state_14895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14895__$1,(20),out,inst_14870);
} else {
if((state_val_14896 === (8))){
var inst_14850 = (state_14895[(11)]);
var inst_14849 = (state_14895[(12)]);
var inst_14852 = (inst_14850 < inst_14849);
var inst_14853 = inst_14852;
var state_14895__$1 = state_14895;
if(cljs.core.truth_(inst_14853)){
var statearr_14929_14957 = state_14895__$1;
(statearr_14929_14957[(1)] = (10));

} else {
var statearr_14930_14958 = state_14895__$1;
(statearr_14930_14958[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13185__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13185__auto____0 = (function (){
var statearr_14931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14931[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13185__auto__);

(statearr_14931[(1)] = (1));

return statearr_14931;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13185__auto____1 = (function (state_14895){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_14895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e14932){if((e14932 instanceof Object)){
var ex__13188__auto__ = e14932;
var statearr_14933_14959 = state_14895;
(statearr_14933_14959[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14960 = state_14895;
state_14895 = G__14960;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13185__auto__ = function(state_14895){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13185__auto____1.call(this,state_14895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13185__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13185__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_14934 = f__13280__auto__.call(null);
(statearr_14934[(6)] = c__13279__auto__);

return statearr_14934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));

return c__13279__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14962 = arguments.length;
switch (G__14962) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__14965 = arguments.length;
switch (G__14965) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__14968 = arguments.length;
switch (G__14968) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___15015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_14992){
var state_val_14993 = (state_14992[(1)]);
if((state_val_14993 === (7))){
var inst_14987 = (state_14992[(2)]);
var state_14992__$1 = state_14992;
var statearr_14994_15016 = state_14992__$1;
(statearr_14994_15016[(2)] = inst_14987);

(statearr_14994_15016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (1))){
var inst_14969 = null;
var state_14992__$1 = (function (){var statearr_14995 = state_14992;
(statearr_14995[(7)] = inst_14969);

return statearr_14995;
})();
var statearr_14996_15017 = state_14992__$1;
(statearr_14996_15017[(2)] = null);

(statearr_14996_15017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (4))){
var inst_14972 = (state_14992[(8)]);
var inst_14972__$1 = (state_14992[(2)]);
var inst_14973 = (inst_14972__$1 == null);
var inst_14974 = cljs.core.not.call(null,inst_14973);
var state_14992__$1 = (function (){var statearr_14997 = state_14992;
(statearr_14997[(8)] = inst_14972__$1);

return statearr_14997;
})();
if(inst_14974){
var statearr_14998_15018 = state_14992__$1;
(statearr_14998_15018[(1)] = (5));

} else {
var statearr_14999_15019 = state_14992__$1;
(statearr_14999_15019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (6))){
var state_14992__$1 = state_14992;
var statearr_15000_15020 = state_14992__$1;
(statearr_15000_15020[(2)] = null);

(statearr_15000_15020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (3))){
var inst_14989 = (state_14992[(2)]);
var inst_14990 = cljs.core.async.close_BANG_.call(null,out);
var state_14992__$1 = (function (){var statearr_15001 = state_14992;
(statearr_15001[(9)] = inst_14989);

return statearr_15001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14992__$1,inst_14990);
} else {
if((state_val_14993 === (2))){
var state_14992__$1 = state_14992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14992__$1,(4),ch);
} else {
if((state_val_14993 === (11))){
var inst_14972 = (state_14992[(8)]);
var inst_14981 = (state_14992[(2)]);
var inst_14969 = inst_14972;
var state_14992__$1 = (function (){var statearr_15002 = state_14992;
(statearr_15002[(7)] = inst_14969);

(statearr_15002[(10)] = inst_14981);

return statearr_15002;
})();
var statearr_15003_15021 = state_14992__$1;
(statearr_15003_15021[(2)] = null);

(statearr_15003_15021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (9))){
var inst_14972 = (state_14992[(8)]);
var state_14992__$1 = state_14992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14992__$1,(11),out,inst_14972);
} else {
if((state_val_14993 === (5))){
var inst_14972 = (state_14992[(8)]);
var inst_14969 = (state_14992[(7)]);
var inst_14976 = cljs.core._EQ_.call(null,inst_14972,inst_14969);
var state_14992__$1 = state_14992;
if(inst_14976){
var statearr_15005_15022 = state_14992__$1;
(statearr_15005_15022[(1)] = (8));

} else {
var statearr_15006_15023 = state_14992__$1;
(statearr_15006_15023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (10))){
var inst_14984 = (state_14992[(2)]);
var state_14992__$1 = state_14992;
var statearr_15007_15024 = state_14992__$1;
(statearr_15007_15024[(2)] = inst_14984);

(statearr_15007_15024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14993 === (8))){
var inst_14969 = (state_14992[(7)]);
var tmp15004 = inst_14969;
var inst_14969__$1 = tmp15004;
var state_14992__$1 = (function (){var statearr_15008 = state_14992;
(statearr_15008[(7)] = inst_14969__$1);

return statearr_15008;
})();
var statearr_15009_15025 = state_14992__$1;
(statearr_15009_15025[(2)] = null);

(statearr_15009_15025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_15010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15010[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_15010[(1)] = (1));

return statearr_15010;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_14992){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_14992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e15011){if((e15011 instanceof Object)){
var ex__13188__auto__ = e15011;
var statearr_15012_15026 = state_14992;
(statearr_15012_15026[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15027 = state_14992;
state_14992 = G__15027;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_14992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_14992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_15013 = f__13280__auto__.call(null);
(statearr_15013[(6)] = c__13279__auto___15015);

return statearr_15013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15029 = arguments.length;
switch (G__15029) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___15095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_15067){
var state_val_15068 = (state_15067[(1)]);
if((state_val_15068 === (7))){
var inst_15063 = (state_15067[(2)]);
var state_15067__$1 = state_15067;
var statearr_15069_15096 = state_15067__$1;
(statearr_15069_15096[(2)] = inst_15063);

(statearr_15069_15096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (1))){
var inst_15030 = (new Array(n));
var inst_15031 = inst_15030;
var inst_15032 = (0);
var state_15067__$1 = (function (){var statearr_15070 = state_15067;
(statearr_15070[(7)] = inst_15032);

(statearr_15070[(8)] = inst_15031);

return statearr_15070;
})();
var statearr_15071_15097 = state_15067__$1;
(statearr_15071_15097[(2)] = null);

(statearr_15071_15097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (4))){
var inst_15035 = (state_15067[(9)]);
var inst_15035__$1 = (state_15067[(2)]);
var inst_15036 = (inst_15035__$1 == null);
var inst_15037 = cljs.core.not.call(null,inst_15036);
var state_15067__$1 = (function (){var statearr_15072 = state_15067;
(statearr_15072[(9)] = inst_15035__$1);

return statearr_15072;
})();
if(inst_15037){
var statearr_15073_15098 = state_15067__$1;
(statearr_15073_15098[(1)] = (5));

} else {
var statearr_15074_15099 = state_15067__$1;
(statearr_15074_15099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (15))){
var inst_15057 = (state_15067[(2)]);
var state_15067__$1 = state_15067;
var statearr_15075_15100 = state_15067__$1;
(statearr_15075_15100[(2)] = inst_15057);

(statearr_15075_15100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (13))){
var state_15067__$1 = state_15067;
var statearr_15076_15101 = state_15067__$1;
(statearr_15076_15101[(2)] = null);

(statearr_15076_15101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (6))){
var inst_15032 = (state_15067[(7)]);
var inst_15053 = (inst_15032 > (0));
var state_15067__$1 = state_15067;
if(cljs.core.truth_(inst_15053)){
var statearr_15077_15102 = state_15067__$1;
(statearr_15077_15102[(1)] = (12));

} else {
var statearr_15078_15103 = state_15067__$1;
(statearr_15078_15103[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (3))){
var inst_15065 = (state_15067[(2)]);
var state_15067__$1 = state_15067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15067__$1,inst_15065);
} else {
if((state_val_15068 === (12))){
var inst_15031 = (state_15067[(8)]);
var inst_15055 = cljs.core.vec.call(null,inst_15031);
var state_15067__$1 = state_15067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15067__$1,(15),out,inst_15055);
} else {
if((state_val_15068 === (2))){
var state_15067__$1 = state_15067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15067__$1,(4),ch);
} else {
if((state_val_15068 === (11))){
var inst_15047 = (state_15067[(2)]);
var inst_15048 = (new Array(n));
var inst_15031 = inst_15048;
var inst_15032 = (0);
var state_15067__$1 = (function (){var statearr_15079 = state_15067;
(statearr_15079[(10)] = inst_15047);

(statearr_15079[(7)] = inst_15032);

(statearr_15079[(8)] = inst_15031);

return statearr_15079;
})();
var statearr_15080_15104 = state_15067__$1;
(statearr_15080_15104[(2)] = null);

(statearr_15080_15104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (9))){
var inst_15031 = (state_15067[(8)]);
var inst_15045 = cljs.core.vec.call(null,inst_15031);
var state_15067__$1 = state_15067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15067__$1,(11),out,inst_15045);
} else {
if((state_val_15068 === (5))){
var inst_15040 = (state_15067[(11)]);
var inst_15032 = (state_15067[(7)]);
var inst_15035 = (state_15067[(9)]);
var inst_15031 = (state_15067[(8)]);
var inst_15039 = (inst_15031[inst_15032] = inst_15035);
var inst_15040__$1 = (inst_15032 + (1));
var inst_15041 = (inst_15040__$1 < n);
var state_15067__$1 = (function (){var statearr_15081 = state_15067;
(statearr_15081[(12)] = inst_15039);

(statearr_15081[(11)] = inst_15040__$1);

return statearr_15081;
})();
if(cljs.core.truth_(inst_15041)){
var statearr_15082_15105 = state_15067__$1;
(statearr_15082_15105[(1)] = (8));

} else {
var statearr_15083_15106 = state_15067__$1;
(statearr_15083_15106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (14))){
var inst_15060 = (state_15067[(2)]);
var inst_15061 = cljs.core.async.close_BANG_.call(null,out);
var state_15067__$1 = (function (){var statearr_15085 = state_15067;
(statearr_15085[(13)] = inst_15060);

return statearr_15085;
})();
var statearr_15086_15107 = state_15067__$1;
(statearr_15086_15107[(2)] = inst_15061);

(statearr_15086_15107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (10))){
var inst_15051 = (state_15067[(2)]);
var state_15067__$1 = state_15067;
var statearr_15087_15108 = state_15067__$1;
(statearr_15087_15108[(2)] = inst_15051);

(statearr_15087_15108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15068 === (8))){
var inst_15040 = (state_15067[(11)]);
var inst_15031 = (state_15067[(8)]);
var tmp15084 = inst_15031;
var inst_15031__$1 = tmp15084;
var inst_15032 = inst_15040;
var state_15067__$1 = (function (){var statearr_15088 = state_15067;
(statearr_15088[(7)] = inst_15032);

(statearr_15088[(8)] = inst_15031__$1);

return statearr_15088;
})();
var statearr_15089_15109 = state_15067__$1;
(statearr_15089_15109[(2)] = null);

(statearr_15089_15109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_15090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15090[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_15090[(1)] = (1));

return statearr_15090;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_15067){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_15067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e15091){if((e15091 instanceof Object)){
var ex__13188__auto__ = e15091;
var statearr_15092_15110 = state_15067;
(statearr_15092_15110[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15111 = state_15067;
state_15067 = G__15111;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_15067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_15067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_15093 = f__13280__auto__.call(null);
(statearr_15093[(6)] = c__13279__auto___15095);

return statearr_15093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15113 = arguments.length;
switch (G__15113) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___15183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13280__auto__ = (function (){var switch__13184__auto__ = (function (state_15155){
var state_val_15156 = (state_15155[(1)]);
if((state_val_15156 === (7))){
var inst_15151 = (state_15155[(2)]);
var state_15155__$1 = state_15155;
var statearr_15157_15184 = state_15155__$1;
(statearr_15157_15184[(2)] = inst_15151);

(statearr_15157_15184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15156 === (1))){
var inst_15114 = [];
var inst_15115 = inst_15114;
var inst_15116 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15155__$1 = (function (){var statearr_15158 = state_15155;
(statearr_15158[(7)] = inst_15116);

(statearr_15158[(8)] = inst_15115);

return statearr_15158;
})();
var statearr_15159_15185 = state_15155__$1;
(statearr_15159_15185[(2)] = null);

(statearr_15159_15185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15156 === (4))){
var inst_15119 = (state_15155[(9)]);
var inst_15119__$1 = (state_15155[(2)]);
var inst_15120 = (inst_15119__$1 == null);
var inst_15121 = cljs.core.not.call(null,inst_15120);
var state_15155__$1 = (function (){var statearr_15160 = state_15155;
(statearr_15160[(9)] = inst_15119__$1);

return statearr_15160;
})();
if(inst_15121){
var statearr_15161_15186 = state_15155__$1;
(statearr_15161_15186[(1)] = (5));

} else {
var statearr_15162_15187 = state_15155__$1;
(statearr_15162_15187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15156 === (15))){
var inst_15145 = (state_15155[(2)]);
var state_15155__$1 = state_15155;
var statearr_15163_15188 = state_15155__$1;
(statearr_15163_15188[(2)] = inst_15145);

(statearr_15163_15188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15156 === (13))){
var state_15155__$1 = state_15155;
var statearr_15164_15189 = state_15155__$1;
(statearr_15164_15189[(2)] = null);

(statearr_15164_15189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15156 === (6))){
var inst_15115 = (state_15155[(8)]);
var inst_15140 = inst_15115.length;
var inst_15141 = (inst_15140 > (0));
var state_15155__$1 = state_15155;
if(cljs.core.truth_(inst_15141)){
var statearr_15165_15190 = state_15155__$1;
(statearr_15165_15190[(1)] = (12));

} else {
var statearr_15166_15191 = state_15155__$1;
(statearr_15166_15191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15156 === (3))){
var inst_15153 = (state_15155[(2)]);
var state_15155__$1 = state_15155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15155__$1,inst_15153);
} else {
if((state_val_15156 === (12))){
var inst_15115 = (state_15155[(8)]);
var inst_15143 = cljs.core.vec.call(null,inst_15115);
var state_15155__$1 = state_15155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15155__$1,(15),out,inst_15143);
} else {
if((state_val_15156 === (2))){
var state_15155__$1 = state_15155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15155__$1,(4),ch);
} else {
if((state_val_15156 === (11))){
var inst_15119 = (state_15155[(9)]);
var inst_15123 = (state_15155[(10)]);
var inst_15133 = (state_15155[(2)]);
var inst_15134 = [];
var inst_15135 = inst_15134.push(inst_15119);
var inst_15115 = inst_15134;
var inst_15116 = inst_15123;
var state_15155__$1 = (function (){var statearr_15167 = state_15155;
(statearr_15167[(11)] = inst_15133);

(statearr_15167[(7)] = inst_15116);

(statearr_15167[(8)] = inst_15115);

(statearr_15167[(12)] = inst_15135);

return statearr_15167;
})();
var statearr_15168_15192 = state_15155__$1;
(statearr_15168_15192[(2)] = null);

(statearr_15168_15192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15156 === (9))){
var inst_15115 = (state_15155[(8)]);
var inst_15131 = cljs.core.vec.call(null,inst_15115);
var state_15155__$1 = state_15155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15155__$1,(11),out,inst_15131);
} else {
if((state_val_15156 === (5))){
var inst_15119 = (state_15155[(9)]);
var inst_15116 = (state_15155[(7)]);
var inst_15123 = (state_15155[(10)]);
var inst_15123__$1 = f.call(null,inst_15119);
var inst_15124 = cljs.core._EQ_.call(null,inst_15123__$1,inst_15116);
var inst_15125 = cljs.core.keyword_identical_QMARK_.call(null,inst_15116,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15126 = ((inst_15124) || (inst_15125));
var state_15155__$1 = (function (){var statearr_15169 = state_15155;
(statearr_15169[(10)] = inst_15123__$1);

return statearr_15169;
})();
if(cljs.core.truth_(inst_15126)){
var statearr_15170_15193 = state_15155__$1;
(statearr_15170_15193[(1)] = (8));

} else {
var statearr_15171_15194 = state_15155__$1;
(statearr_15171_15194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15156 === (14))){
var inst_15148 = (state_15155[(2)]);
var inst_15149 = cljs.core.async.close_BANG_.call(null,out);
var state_15155__$1 = (function (){var statearr_15173 = state_15155;
(statearr_15173[(13)] = inst_15148);

return statearr_15173;
})();
var statearr_15174_15195 = state_15155__$1;
(statearr_15174_15195[(2)] = inst_15149);

(statearr_15174_15195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15156 === (10))){
var inst_15138 = (state_15155[(2)]);
var state_15155__$1 = state_15155;
var statearr_15175_15196 = state_15155__$1;
(statearr_15175_15196[(2)] = inst_15138);

(statearr_15175_15196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15156 === (8))){
var inst_15119 = (state_15155[(9)]);
var inst_15123 = (state_15155[(10)]);
var inst_15115 = (state_15155[(8)]);
var inst_15128 = inst_15115.push(inst_15119);
var tmp15172 = inst_15115;
var inst_15115__$1 = tmp15172;
var inst_15116 = inst_15123;
var state_15155__$1 = (function (){var statearr_15176 = state_15155;
(statearr_15176[(7)] = inst_15116);

(statearr_15176[(14)] = inst_15128);

(statearr_15176[(8)] = inst_15115__$1);

return statearr_15176;
})();
var statearr_15177_15197 = state_15155__$1;
(statearr_15177_15197[(2)] = null);

(statearr_15177_15197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13185__auto__ = null;
var cljs$core$async$state_machine__13185__auto____0 = (function (){
var statearr_15178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15178[(0)] = cljs$core$async$state_machine__13185__auto__);

(statearr_15178[(1)] = (1));

return statearr_15178;
});
var cljs$core$async$state_machine__13185__auto____1 = (function (state_15155){
while(true){
var ret_value__13186__auto__ = (function (){try{while(true){
var result__13187__auto__ = switch__13184__auto__.call(null,state_15155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13187__auto__;
}
break;
}
}catch (e15179){if((e15179 instanceof Object)){
var ex__13188__auto__ = e15179;
var statearr_15180_15198 = state_15155;
(statearr_15180_15198[(5)] = ex__13188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15199 = state_15155;
state_15155 = G__15199;
continue;
} else {
return ret_value__13186__auto__;
}
break;
}
});
cljs$core$async$state_machine__13185__auto__ = function(state_15155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13185__auto____1.call(this,state_15155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13185__auto____0;
cljs$core$async$state_machine__13185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13185__auto____1;
return cljs$core$async$state_machine__13185__auto__;
})()
})();
var state__13281__auto__ = (function (){var statearr_15181 = f__13280__auto__.call(null);
(statearr_15181[(6)] = c__13279__auto___15183);

return statearr_15181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
