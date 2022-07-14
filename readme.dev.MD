
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
