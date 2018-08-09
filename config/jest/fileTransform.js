'use strict';

const path = require('path');

// This is a custom Jest transformer turning file imports into filenames.
<<<<<<< HEAD
// http://facebook.github.io/jest/docs/en/webpack.html
=======
// http://facebook.github.io/jest/docs/tutorial-webpack.html
>>>>>>> 2736c4bb44381a317494edaceaf15b4dae406b51

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
