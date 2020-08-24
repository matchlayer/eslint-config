'use strict';

module.exports = {
  extends: [
    '../lib/modules/esm',
    '../lib/preset/es2020',
  ].map(require.resolve),
};
