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
export const plopExitAction = _plopActionCreatorByTypeFactory('EXIT_TYPE');

// method that registers a function to an event.
export const registerPlopActionTypeExit = (plop) => {
  plop.setActionType('EXIT_TYPE', function (answers, config, plop) {
    return 'exited';
    // throw 'error message';
  });
};
// usage
/**
 *  registerPlopActionTypeExit(plop);
 *  Allows us to set our custom action
 */
