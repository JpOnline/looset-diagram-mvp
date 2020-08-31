(ns jp-storage-module.firebase
  (:require
    [firebase]
    ))

(def firebase-config
  #js {:apiKey "AIzaSyAD28KxLm7JIXbVQdBYIacLy8qCrAJRu8s"
       :authDomain "looset-diagram-mvp.firebaseapp.com"
       :databaseURL "https://looset-diagram-mvp.firebaseio.com"
       :projectId "looset-diagram-mvp"
       ;; :storageBucket ""
       ;; :messagingSenderId ""
       :appId "1:291553830722:web:a77f6a888325a166344adb"
       :measurementId "G-9993HGC71C"})

(def firebase-db
  (do
    (when (= 0 js/firebase.apps.length)
      (js/firebase.initializeApp firebase-config))
    (js/firebase.database)))

(defn async-load [path {:keys [on-success on-error]}]
  (-> firebase-db (.ref path) (.once "value"
     (fn [snapshot]
       (on-success (some-> snapshot .val)))
     (fn [error]
       (js/console.log "Erro ao ler dados do Firebase." error)
       (on-error)))))
