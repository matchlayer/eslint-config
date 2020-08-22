'use strict';

module.exports = {
  extends: [
    '../lib/modules/cjs',
    '../lib/preset/es2017',
  ].map(require.resolve),
};
