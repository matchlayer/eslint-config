'use strict';

module.exports = {
  extends: [
    './es2015',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2016,
  },
  rules: {
    'prefer-exponentiation-operator': 'error',
  },
};
