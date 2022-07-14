
# For Developers

* npm run plop:dev
  * runs the cli stuff.
  
## Lifecycle

* create some code in src
* npm run build:clean
  * uses babel to turn javascript code to es5

## versioning

* `npm run mversion {patch, minor major}`
  * fetches, versions, makes a change log and pushes up to main.

## publishing

* Steps:
  * run versioning
  * then run `npm run pub:patch`
