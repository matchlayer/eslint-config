'use strict';

module.exports = {
  extends: [
    '../lib/modules/esm',
    '../lib/preset/es2016',
  ].map(require.resolve),
};
