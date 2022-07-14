
# For Developers

* npm run plop:dev
  * runs the cli stuff.
  
## Lifecycle

* npm run build:clean
  * uses babel to turn javascript code to es5, code found in lib folder
* build builds a new lib folder,
  * build:watch can happen.
  * plop:prod runs the index file of that lib folder, same thing our user does when it runs npm run cans or npx @mariomui/cans

## Actually development

* create some code in src
* plop:dev
* see it run.
* Plopfile in src has the list of options you can do.
* the index.js tells us where plop runs the plopfile.

## versioning

* `npm run mversion {patch, minor major}`
  * fetches, versions, makes a change log and pushes up to main.

## publishing

* Steps:
  * run versioning
  * then run `npm run pub:patch`

## Others

node:resolved runs resolution on import paths.
es6 url imports will take way too long to check the file extension, so it'll time out, doing a resolved node on
a js file means we are telling node to expect that the file
will be js.
If you run a node:resolved on a file with require in it, then the file will fail.
node resolved is specifically done so that we can still have import and export in the code but still not have the extension.
so it goes like node reads a file, uses the imports, sees the package json is using the new fangled modules, then applies that reasoning to the import method. Node would also treat all imports as having import and export methods.

if we transpiled all the code to es5 and then use node:resolved
the require statements would throw node off as it's expecting a different shape.
