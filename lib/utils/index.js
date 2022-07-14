import CONSTS from './consts.js';

var createNodeScriptFactory = function createNodeScriptFactory(title, command, _ref) {
  var posix = _ref.posix,
      _ref$thenCb = _ref.thenCb,
      thenCb = _ref$thenCb === void 0 ? function () {
    return true;
  } : _ref$thenCb,
      _ref$catchCb = _ref.catchCb,
      catchCb = _ref$catchCb === void 0 ? _catchCb : _ref$catchCb;
  return {
    title: title,
    task: function task(ctx, _task) {
      return execa(command, posix) // execa('npm', ['install'])
      .then(thenCb)["catch"](catchCb);
    }
  };
};

function _catchCb(err) {
  console.log(err);
  return true;
}

export { CONSTS, createNodeScriptFactory };