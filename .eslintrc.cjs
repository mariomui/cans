module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@babel'],
  rules: {},
  babelOptions: {
    configFile: 'babel.config.cjs',
  },
};
