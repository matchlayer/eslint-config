'use strict';

module.exports = {
  extends: [
    '../lib/modules/esm',
    '../lib/preset/es2019',
  ].map(require.resolve),
};
