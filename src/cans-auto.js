import { execa } from 'execa';
import Listr from 'listr';
import fs from 'node:fs';
// you will alwasy need execa and lisr

/* 
  Contains a list of TASKS for plopfile to use.
*/
export const initGitAndInstallTask = new Listr([
  {
    title: 'Git',
    task: (ctx, task) => {
      //ctx can be passed in the same Listr, and task allows you to skip
      if (fs.existsSync('./.git')) {
        return;
      }
      execa('git', ['rev-parse', '--is-inside-work-tree']).then(
        ({ stdout }) => {
          if (stdout === 'true') {
            console.log('Git already initialized');
          } else {
            console.log('Initializing a git repo');
            execa('git', ['--init']);
          }
        }
      );
    },
  },
  {
    title: 'Install package dependencies with npm',
    // enabled: (ctx) => !!ctx?.npm === false,
    // only enable if npm context variable is false;
    task: (ctx, task) =>
      execa('npm', ['install', '--save-dev', '@babel/core', '@babel/node'])
        // execa('npm', ['install'])
        .then(({ stdout, command }) => {
          return true;
        })
        .catch((err) => {
          // ctx.npm = false;
          console.log(err);
          task.skip('Npm not available, install it via `npm install -g yarn`');
          return true;
        }),
  },
]);
