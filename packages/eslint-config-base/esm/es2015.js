'use strict';

module.exports = {
  extends: [
    '../lib/modules/esm',
    '../lib/preset/es2015',
  ].map(require.resolve),
};
