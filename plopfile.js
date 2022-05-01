import path from 'node:path';
import fs, { ftruncate } from 'node:fs';
const cwd = process.cwd();

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
        path: pathResolver(cwd, 'src/components/{{name}}.js'),
        skip: async function skip(name) {
          const filePath = plop.renderString(
            'src/components/{{name}}.js',
            name
          );
          try {
            const status = await pathChecker(cwd, filePath);
            if (status === true) {
              return 'File already exists';
            }
          } catch (err) {
            console.log(err.desc, 'Creating file...');
          }
        },
        // templateFile: 'plop-templates/controller.hbs',
      },
    ],
  });
}

function NotAFileError() {
  return new Error('Not a file');
}
function pathResolver(dir, filepath) {
  return path.join(dir, filepath);
}
function pathChecker(dir, filepath) {
  return new Promise((resolve, reject) => {
    fs.stat(pathResolver(dir, filepath), (err, stats) => {
      if (err) return reject({ err, desc: 'No File Found' });
      if (stats.isFile() === false) {
        return reject({
          err: NotAFileError(),
          desc: 'Exception from pathChecker function',
        });
      }
      if (stats.isFile() === true) {
        return resolve(true);
      }
    });
  });
}
