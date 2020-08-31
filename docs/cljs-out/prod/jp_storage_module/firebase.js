// Compiled by ClojureScript 1.10.597 {}
goog.provide('jp_storage_module.firebase');
goog.require('cljs.core');
goog.require('firebase');
jp_storage_module.firebase.global$module$firebase = goog.global["firebase"];
jp_storage_module.firebase.firebase_config = ({"apiKey": "AIzaSyAD28KxLm7JIXbVQdBYIacLy8qCrAJRu8s", "authDomain": "looset-diagram-mvp.firebaseapp.com", "databaseURL": "https://looset-diagram-mvp.firebaseio.com", "projectId": "looset-diagram-mvp", "appId": "1:291553830722:web:a77f6a888325a166344adb", "measurementId": "G-9993HGC71C"});
jp_storage_module.firebase.firebase_db = (function (){
if(cljs.core._EQ_.call(null,(0),firebase.apps.length)){
firebase.initializeApp(jp_storage_module.firebase.firebase_config);
} else {
}

return firebase.database();
})()
;
jp_storage_module.firebase.async_load = (function jp_storage_module$firebase$async_load(path,p__21787){
var map__21788 = p__21787;
var map__21788__$1 = (((((!((map__21788 == null))))?(((((map__21788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21788):map__21788);
var on_success = cljs.core.get.call(null,map__21788__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__21788__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return jp_storage_module.firebase.firebase_db.ref(path).once("value",(function (snapshot){
return on_success.call(null,(function (){var G__21790 = snapshot;
if((G__21790 == null)){
return null;
} else {
return G__21790.val();
}
})());
}),(function (error){
console.log("Erro ao ler dados do Firebase.",error);

return on_error.call(null);
}));
});

//# sourceMappingURL=firebase.js.map
