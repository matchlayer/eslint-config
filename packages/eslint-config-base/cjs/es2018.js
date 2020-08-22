'use strict';

module.exports = {
  extends: [
    '../lib/modules/cjs',
    '../lib/preset/es2018',
  ].map(require.resolve),
};
