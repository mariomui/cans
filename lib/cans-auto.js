import { execa } from 'execa';
import Listr from 'listr'; // you will alwasy need execa and lisr

var tasks = new Listr([{
  title: 'Git',
  task: function task(ctx, _task) {
    return (//ctx can be passed in the same Listr, and task allows you to skip
      execa('git', ['rev-parse', '--is-inside-work-tree']).then(function (_ref) {
        var stdout = _ref.stdout;

        if (stdout === 'true') {
          console.log('Git already initialized');
        } else {
          console.log('Initializing a git repo');
          execa('git', ['--init']);
        }
      })
    );
  }
}, {
  title: 'Install package dependencies with npm',
  // enabled: (ctx) => !!ctx?.npm === false,
  // only enable if npm context variable is false;
  task: function task(ctx, _task2) {
    return execa('npm', ['install', '--save-dev', '@babel/core', '@babel/node']) // execa('npm', ['install'])
    .then(function (_ref2) {
      var stdout = _ref2.stdout,
          command = _ref2.command;
      return true;
    })["catch"](function (err) {
      // ctx.npm = false;
      console.log(err);

      _task2.skip('Npm not available, install it via `npm install -g yarn`');

      return true;
    });
  }
}]);
tasks.run()["catch"](function (err) {
  console.error(err);
});