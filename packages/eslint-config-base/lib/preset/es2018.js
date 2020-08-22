'use strict';

module.exports = {
  extends: [
    './es2017',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prefer-object-spread': 'error',
  },
};
