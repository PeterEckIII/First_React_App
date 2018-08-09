'use strict';

// This is a custom Jest transformer turning style imports into empty objects.
<<<<<<< HEAD
// http://facebook.github.io/jest/docs/en/webpack.html
=======
// http://facebook.github.io/jest/docs/tutorial-webpack.html
>>>>>>> 2736c4bb44381a317494edaceaf15b4dae406b51

module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};
