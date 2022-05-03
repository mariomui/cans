function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { exitAction } from './actions/index.js';
import path from 'node:path';
import fs from 'node:fs'; // import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);

var cwd = process.cwd();
export default function PlopFile(plop) {
  // controller generator
  exitAction.registerPlopActionTypeExit(plop);
  plop.setGenerator('exit', {
    prompts: [],
    actions: [exitAction.plopExitAction()]
  });
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [{
      type: 'crud',
      name: 'name',
      message: 'component name please'
    }],
    actions: [{
      type: 'add',
      path: 'src/controllers/{{name}}.js' // templateFile: 'plop-templates/controller.hbs',

    }]
  });
  plop.setGenerator('component', {
    description: 'shared component logic',
    prompts: [{
      type: 'react',
      name: 'name',
      message: 'component name please'
    }],
    actions: [{
      type: 'add',
      path: pathResolver(cwd, 'src/components/{{name}}.js'),
      skip: function () {
        var _skip = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
          var filePath, status;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  filePath = plop.renderString('src/components/{{name}}.js', name);
                  _context.prev = 1;
                  _context.next = 4;
                  return pathChecker(cwd, filePath);

                case 4:
                  status = _context.sent;

                  if (!(status === true)) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt("return", 'File already exists');

                case 7:
                  _context.next = 12;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](1);
                  console.log(_context.t0.desc, 'Creating file...');

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 9]]);
        }));

        function skip(_x) {
          return _skip.apply(this, arguments);
        }

        return skip;
      }() // templateFile: 'plop-templates/controller.hbs',

    }]
  });
}

function NotAFileError() {
  return new Error('Not a file');
}

function pathResolver(dir, filepath) {
  return path.join(dir, filepath);
}

function pathChecker(dir, filepath) {
  return new Promise(function (resolve, reject) {
    fs.stat(pathResolver(dir, filepath), function (err, stats) {
      if (err) return reject({
        err: err,
        desc: 'No File Found'
      });

      if (stats.isFile() === false) {
        return reject({
          err: NotAFileError(),
          desc: 'Exception from pathChecker function'
        });
      }

      if (stats.isFile() === true) {
        return resolve(true);
      }
    });
  });
}