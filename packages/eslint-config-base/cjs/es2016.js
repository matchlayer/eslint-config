'use strict';

module.exports = {
  extends: [
    '../lib/modules/cjs',
    '../lib/preset/es2016',
  ].map(require.resolve),
};
