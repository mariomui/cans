import MyConfirmPluginConstructor from './plugins/my-plugins';

export default function (plop) {
  // controller generator
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
