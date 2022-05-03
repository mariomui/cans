/**
 * @description makes a private method payload-maker: type, name, message
 */
function _plopActionCreatorByTypeFactory(type) {
  return function (name, message) {
    if (name === void 0) {
      name = '';
    }

    if (message === void 0) {
      message = '';
    }

    return {
      type: type,
      name: name,
      message: message
    };
  };
} // creates a dispatcher


var plopExitAction = _plopActionCreatorByTypeFactory('EXIT_TYPE'); // method that registers a function to an event.


var registerPlopActionTypeExit = function registerPlopActionTypeExit(plop) {
  plop.setActionType('EXIT_TYPE', function (answers, config, plop) {
    return 'exited'; // throw 'error message';
  });
}; // usage

/**
 *  registerPlopActionTypeExit(plop);
 *  Allows us to set our custom action
 */


export default {
  plopExitAction: plopExitAction,
  registerPlopActionTypeExit: registerPlopActionTypeExit
};