function _plopActionCreatorByTypeFactory(type) {
  return (name = '', message = '') => ({
    type,
    name,
    message,
  });
}
const plopExitAction = _plopActionCreatorByTypeFactory('EXIT_TYPE');
const registerPlopActionTypeExit = (plop) => {
  plop.setActionType('EXIT_TYPE', function (answers, config, plop) {
    return 'exited';
    // throw 'error message';
  });
};

export { plopExitAction, registerPlopActionTypeExit };

export default function PlopFile(plop) {
  // controller generator
  registerPlopActionTypeExit(plop);
  plop.setGenerator('exit', {
    prompts: [],
    actions: [plopExitAction()],
  });
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'crud',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/controllers/{{name}}.js',
        // templateFile: 'plop-templates/controller.hbs',
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'shared component logic',
    prompts: [
      {
        type: 'react',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}.js',
        // templateFile: 'plop-templates/controller.hbs',
      },
    ],
  });
}
