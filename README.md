# Looset Diagram MVP

An Minimum Viable Product of [Looset Diagram](https://jponline.github.io/looset-landing/#looset-diagram), a graph of call references.

If you want to run this code in your machine you need to be able to run Clojure code through Leiningen [(instalation steps)](https://leiningen.org/).

You need to replace the files in the directory `interface-files`. The `files-to-analyze.edn` has a vector of maps as

```clojure
{:indentation-level-to-search 8 :file-path "/home/smokeonline/projects/looset/projects-example/Articulate/src/Articulate/Components/ArticulateComponent.cs"}
```
A command that can help you to extract this information is
- `find . | grep -e <file-extension>$`

The `indentation-level-to-search` is still an analyzis you must do by yourself. If you have code that looks like this

```python
def ansi_color(code, s):
    return '{}{}{}'.format(ansi(code), s, ansi(0))

def make_color_fn(code):
    return lambda s: ansi_color(code, s)
```

the `indentation-level-to-search` is 0. If you have

```python
class Container:
    @classmethod
    def from_id(cls, client, id):
        return cls(client, client.inspect_container(id), has_been_inspected=True)

    @classmethod
    def create(cls, client, **options):
        response = client.create_container(**options)
        return cls.from_id(client, response['Id'])
```

the `indentation-level-to-search` is 4.

Then you can run `lein run` to generate the new `src/ui/initial_state.cljs` file.

The frontend is basically a different project that uses [Figwheel](https://figwheel.org/), to fire up a local server you can run the following commands:

`npm install` - Need when running the code for the first time. It install node packages dependencies.

`npx webpack` - Need when running the code for the first time. Bundle the external javascript code into the index.bundle.js.

`lein fig:dev` - What will start a local server, available from http://localhost:5667/
