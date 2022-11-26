import { initGitAndInstall } from '../cans-auto.js';
import { ACTION_HELPERS, CONSTS } from '../utils/index.js';
import * as babelLoadAction from './babel-load.js';
import * as exitAction from './exit.js';

const plopTestAction = ACTION_HELPERS.plopActionCreatorByTypeFactory(
  CONSTS.TEST
);

// method that registers a function to an event.
const registerPlopActionTypeTest = (plop) => {
  plop.setActionType(CONSTS.TEST, function (answers, config, plop) {
    initGitAndInstall();
    // throw 'error message';
  });
};
const testAction = {
  plopTestAction,
  registerPlopActionTypeTest,
};
export { exitAction, babelLoadAction, testAction };
// this does not work with default
