(defproject looset-diagram-mvp "0.1.0-SNAPSHOT"
  :url "https://jponline.github.io/looset-landing/#looset-diagram"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.597"]
                 [re-frame "0.12.0"]
                 [reagent "0.10.0"]]
  :repl-options {:init-ns looset-diagram-mvp.core}

  :source-paths ["src"]

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:cards" ["trampoline" "run" "-m" "figwheel.main" "-b" "cards" "-r"]
            "fig:cards-togithub"   ["run" "-m" "figwheel.main" "-O" "none" "-bo" "cards"]
            "fig:dev" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:none-prod" ["run" "-m" "figwheel.main" "-O" "none" "-bo" "prod"]
            "fig:whitespace-prod" ["run" "-m" "figwheel.main" "-O" "whitespace" "-bo" "prod"]
            "fig:simple-prod" ["run" "-m" "figwheel.main" "-O" "simple" "-bo" "prod"]
            "fig:prod" ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "prod"]}

  :profiles {:dev
             {:resource-paths ["target"]
              :clean-targets ^{:protect false} ["target"]
              :dependencies [[com.bhauman/figwheel-main "0.2.0"]
                             [com.bhauman/rebel-readline-cljs "0.1.4"]
                             [devcards "0.2.6"]
                             [day8.re-frame/re-frame-10x "0.6.0"]
                             [day8.re-frame/tracing "0.5.3"]]}
             :cards
             {:resource-paths ["target"]
              :clean-targets ^{:protect false} ["target"]
              :dependencies [[com.bhauman/figwheel-main "0.2.0"]
                             [com.bhauman/rebel-readline-cljs "0.1.4"]
                             [devcards "0.2.6"]
                             [day8.re-frame/re-frame-10x "0.6.0"]
                             [day8.re-frame/tracing "0.5.3"]]}})
