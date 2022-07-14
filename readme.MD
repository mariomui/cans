# CANS

## How to use

* npm run cans

## What each file does

* cans auto

## For Developers

### versioning

* `npm run mversion {patch, minor major}`
  * fetches, versions, makes a change log and pushes up to main.

### publishing

* Steps:
  * run versioning
  * then run `npm run pub:patch`

## Future

* [ ] extract the mversion acl combo into their own little scripts for listr composition
* [ ] Spinnaker, replace scripts with spinnaker declarative yaml

## Lifecycle

* user npm installs @mariomui/cans
* node_modules/@mariomui/cans/lib folder is where file is.
* because we configged a shortcut bin script
  * user can run cans within the npm context
  * so create an cans script that just calls cans and then do npm run cans
  * you can see this in the package json file
  * I pointed it to lib/index.js as that is the production build
  * scripts running sequentially when you pub:patch
    * packer -> prepub:patch -> pub:patch
    * preversion(git fetches) -> mversion(validation if you are on main branch) -> version (commit)-> acl (record changelog) -> postversion(update cloud with versioning)
