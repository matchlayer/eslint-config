'use strict';

module.exports = {
  extends: [
    '../lib/modules/cjs',
    '../lib/preset/es2019',
  ].map(require.resolve),
};
