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
    devtool: 'cheap-module-eval-source-map',
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

      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.gif$/,
        loader: "url-loade?mimetype=image/png"
      },
      {
        test: /\.woff(2)?(\?v[0-9].[0-9])?$/,
        loader: "url-loader?mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9])?$/,
        loader: "file-loader?name=[name].[ext]"
      }
      ]
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


