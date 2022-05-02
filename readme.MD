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
