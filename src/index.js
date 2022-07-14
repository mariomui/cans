#!/usr/bin/env node
import minimist from 'minimist';
import 'regenerator-runtime';
import { Plop, run } from 'plop';

const args = process.argv.slice(2);
const argv = minimist(args);

import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
Plop.prepare(
  {
    cwd: argv.cwd,
    configPath: path.join(__dirname, 'plopfile.js'),
    preload: argv.preload || [],
    completion: argv.completion,
  },
  (env) => Plop.execute(env, run)
);