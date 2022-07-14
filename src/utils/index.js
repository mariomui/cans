import * as CONSTS from './consts.js';
import * as ACTION_HELPERS from './action_helpers.js';

// import the default export from the module 'thing' and bind it to the local name thing".
/*
if you {deconstruct} that just means directly go to the object.
*/

const createNodeScriptFactory = (
  title,
  command,
  { posix, thenCb = () => true, catchCb = _catchCb }
) => {
  return {
    title,
    task: (ctx, task) =>
      execa(command, posix)
        // execa('npm', ['install'])
        .then(thenCb)
        .catch(catchCb),
  };
};

function _catchCb(err) {
  console.log(err);
  return true;
}

export { CONSTS, createNodeScriptFactory, ACTION_HELPERS };
