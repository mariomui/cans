import CONSTS from './consts.js';

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

export { CONSTS, createNodeScriptFactory };
