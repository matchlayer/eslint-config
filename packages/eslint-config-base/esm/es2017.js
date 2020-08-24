'use strict';

module.exports = {
  extends: [
    '../lib/modules/esm',
    '../lib/preset/es2017',
  ].map(require.resolve),
};
