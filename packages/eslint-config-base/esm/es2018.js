'use strict';

module.exports = {
  extends: [
    '../lib/modules/esm',
    '../lib/preset/es2018',
  ].map(require.resolve),
};
