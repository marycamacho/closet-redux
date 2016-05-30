var path = require("path");
var webpack = require("webpack");
var target = process.env.npm_lifecycle_event;
var paths = {
  src: path.join(__dirname, "src"),
  dev: path.join(__dirname, "dev"),
  dist: path.join(__dirname, "dist")
};

module.exports = {
  context: paths.src,

  entry: './index.js',
  output: {
    path: paths.dev,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.js$/,
      exclude: /node_modules/,
      loader: 'babel'
      
    }]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};


