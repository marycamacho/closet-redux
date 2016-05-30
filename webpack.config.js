var path = require("path");
var target = process.env.npm_lifecycle_event;
var paths = {
  src: path.join(__dirname, "src"),
  dev: path.join(__dirname, "dev"),
  dist: path.join(__dirname, "dist")
};
if (target === "bundle") {

  module.exports = {
    context: paths.src,

    entry: './index.js',
    output: {
      path: paths.dev,
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
  };

}

if (target === "build") {

  module.exports = {
    context: paths.src,

    entry: './index.js',
    output: {
      path: paths.dist,
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
  };

}