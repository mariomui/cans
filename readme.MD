# CANS (downstream)

## How to use

* installing as a dev dependency
  * npm install @mariomui/cans
* create an npm script
  * cans : "cans"
* npm run cans
  * this calls file located in bin
    * the location is `lib/index.js`
    * lib is the output folder of cans after it installs or

## Future

* [ ] extract the `mversion acl` combo into their own little scripts for `listr` composition
* [ ] Spinnaker, replace scripts with spinnaker declarative yaml

## Lifecycle

* user npm installs @mariomui/cans
* node_modules/@mariomui/cans/lib folder is where file is.
* because we `configged` a shortcut bin script
  * user can run cans within the npm context
  * so create an cans script that just calls cans and then do npm run cans
  * you can see this in the package json file
  * I pointed it to `lib/index.js` as that is the production build
  * scripts running sequentially when you pub:patch
    * packer -> `prepub:patch` -> pub:patch
    * `preversion`(git fetches) -> `mversion`(validation if you are on main branch) -> version (commit)-> `acl` (record changelog) -> `postversion`(update cloud with versioning)

*
