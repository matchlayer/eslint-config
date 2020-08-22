'use strict';

module.exports = {
  extends: [
    '../lib/modules/cjs',
    '../lib/preset/es2020',
  ].map(require.resolve),
};
