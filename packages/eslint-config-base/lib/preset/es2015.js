'use strict';

module.exports = {
  plugins: [
    'import',
    'jsdoc',
  ],
  extends: [
    '../rules/best-practices',
    '../rules/deprecated',
    '../rules/errors',
    '../rules/es6',
    '../rules/import',
    '../rules/jsdoc',
    '../rules/strict',
    '../rules/style',
    '../rules/variables',
  ].map(require.resolve),
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2015,
  },
  overrides: [
    {
      files: './*.config.js',
      env: {
        node: true,
      },
      extends: [
        '../modules/cjs',
      ],
    },
  ],
};
