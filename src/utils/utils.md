# Utils

* A Utility class is understood to only have static methods and be stateless. You would not create an instance of such a class.
  * Math.pow() for example
* A Helper can be a utility class or it can be stateful or require an instance be created.
  * for example

For server stuff, it should all be kept in the same utils folder, it's not like splitting things into modules is needed.
What we want is flatter structures.
`utils/addTwoNumbers.js` is crazy.
Eventually you know you are gonna have to put that into something.

What i suggest is to do `utils/math.js`, then export MATH out to an `index.js`

The user would be export
in the `math.js` file
export function addTwoNumbers
in the index file
export * as Math from `'./math.js'`
In the index file you could have some random stuff that doesn't belong to math like isNullOrFalse

so now anyone who wants the utils stuff could just have it like so
{ Math , isNullOrFalse, etc }

Lets say we move Math into its own folder.
`export * as Math from "./subdirector/math.js"`
this doesn't disrupt math at all.
if we had imported {Math} from `'./utils/math.js'` then every single one import would need to change.

Also, if we were swapping v1 and v2.
export * as MathNew from `'./mathnew.js'`
import { MathNew as Math } from './utils

Math.addTwoNumbers()
api still stays the same. we can also gradually migrate the older components to use the new MathNew one at a time. without renaming anything.

* if a component uses Math.minusNumbers but needs the new version of addTwoNumbers. we can use a bridge
in the `utils.index.js` , we create a MathBridge which would then be
`import * as Mathnew from './Mathnew.js`
`import* as Math from './math.js`
`export const MathBridge =  { ...Math,...Mathnew }`
`export {Math, Mathnew}`
now you can have `Mathbridge` with all the functions of the old, but any thing `mathbridge woudl overwrite would be okay.`
-----

`export default XXX;`
`import straightupXXX from ''`
(you wouldn't be able to de-structure so avoid default anything unless its a major big component);
