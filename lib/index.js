#!/usr/bin/env node
import minimist from 'minimist';
import 'regenerator-runtime';
import { Plop, run } from 'plop';
var args = process.argv.slice(2);
var argv = minimist(args);
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

var __dirname = dirname(fileURLToPath(import.meta.url));

Plop.prepare({
  cwd: argv.cwd,
  configPath: path.join(__dirname, 'plopfile.js'),
  preload: argv.preload || [],
  completion: argv.completion
}, function (env) {
  return Plop.execute(env, run);
});