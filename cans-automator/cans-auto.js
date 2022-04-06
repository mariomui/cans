import { execa } from 'execa';
import Listr from 'listr';

const tasks = new Listr([
  {
    title: 'Git',
    task: (ctx, task) =>
      //ctx can be passed in the same Listr, and task allows you to skip
      execa('git', ['rev-parse', '--is-inside-work-tree']).then(
        ({ stdout }) => {
          if (stdout === true) {
            console.log(typeof result, result);
          } else {
            execa('git', ['--init']);
          }
        }
      ),
  },
  {
    title: 'Install package dependencies with npm',
    // enabled: (ctx) => !!ctx?.npm === false,
    // only enable if npm context variable is false;
    task: (ctx, task) =>
      execa('npm', ['install'])
        .then(() => {
          ctx.npm = true;
          console.log('here');
        })
        .catch(() => {
          ctx.npm = false;
          task.skip('Npm not available, install it via `npm install -g yarn`');
        }),
  },
  {
    title: 'Start scaffolding out',
    // enabled: (ctx) => !!ctx?.npm === false,
    // only enable if npm context variable is false;
    task: (ctx, task) =>
      execa('npm', ['run', 'plop'])
        .then(() => {})
        .catch(() => {
          task.skip('plop not available');
        }),
  },
]);

tasks.run().catch((err) => {
  console.error(err);
});
