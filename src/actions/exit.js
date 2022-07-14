import { CONSTS } from '../utils/index.js';

/**
 * @description makes a private method payload-maker: type, name, message
 */
function _plopActionCreatorByTypeFactory(type) {
  return (name = '', message = '') => ({
    type,
    name,
    message,
  });
}

// creates a dispatcher
const plopExitAction = _plopActionCreatorByTypeFactory(CONSTS.EXIT_TYPE);

// method that registers a function to an event.
const registerPlopActionTypeExit = (plop) => {
  plop.setActionType(CONSTS.EXIT_TYPE, function (answers, config, plop) {
    return 'exited';
    // throw 'error message';
  });
};
// usage
/**
 *  registerPlopActionTypeExit(plop);
 *  Allows us to set our custom action
 */

export default {
  plopExitAction,
  registerPlopActionTypeExit,
};
