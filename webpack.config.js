var path = require('path');

module.exports = {
    entry: './react/app.js',
    devtool: 'source-map',
    cache: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/built'),
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:3000/built/',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        //plugins: ["@babel/plugin-transform-react-jsx-source", "@babel/plugin-syntax-jsx"]
                    }
                }]
            }
        ]
    }
};

/*const path = require('path');

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
];*/