/**
 * Deprecated.
 *
 * @see https://eslint.org/docs/rules/#deprecated
 */

'use strict';

module.exports = {
  rules: {
    // Enforces error handling in callbacks
    'handle-callback-err': 'warn',
    // Disallow new operators with calls to require
    'no-new-require': 'error',
  },
};
