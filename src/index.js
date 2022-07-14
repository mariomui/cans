#!/usr/bin/env node --experimental-specifier-resolution=node
import 'regenerator-runtime';
import minimist from 'minimist';
import { Plop, run } from 'plop';

const args = process.argv.slice(2);
const argv = minimist(args);

import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
Plop.prepare(
  {
    cwd: argv.cwd,
    // tells plop where the plopfile resides
    configPath: path.join(__dirname, 'plopfile.js'),
    preload: argv.preload || [],
    completion: argv.completion,
  },
  (env) => Plop.execute(env, run)
);
