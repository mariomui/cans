import { CONSTS, ACTION_HELPERS } from '../utils/index.js';

// creates a dispatcher
const plopExitAction = ACTION_HELPERS.plopActionCreatorByTypeFactory(
  CONSTS.EXIT_TYPE
);

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

export { plopExitAction, registerPlopActionTypeExit };
