const path = require('path');

module.exports = [
  {
    output: {
      filename: './categories.js',
      path: path.resolve(__dirname, 'public/js'),
    },
    entry: './public/js-react/categories.js',
    mode: 'production',
  },
  {
    output: {
      filename: './goods.js',
      path: path.resolve(__dirname, 'public/js'),
    },
    entry: './public/js-react/goods.js',
    mode: 'production',
  },
  {
    output: {
      filename: './index.js',
      path: path.resolve(__dirname, 'public/js'),
    },
    entry: './public/js-react/index.js',
    mode: 'production',
  },
  {
    output: {
      filename: './main.js',
      path: path.resolve(__dirname, 'public/js'),
    },
    entry: './public/js-react/main.js',
    mode: 'production',
  },
  {
    output: {
      filename: './logreg.js',
      path: path.resolve(__dirname, 'public/js'),
    },
    entry: './public/js-react/logreg.js',
    mode: 'production',
  },
  {
    output: {
      filename: './goods_create.js',
      path: path.resolve(__dirname, 'public/js'),
    },
    entry: './public/js-react/goods_create.js',
    mode: 'production',
  },
];