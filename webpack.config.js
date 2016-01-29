var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./javascripts/cat_facts.jsx",
  output: {
    path: path.join(__dirname, 'javascripts'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: 'source-maps',
  module: {
    loaders: [
      { test: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader" },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.node$/,
        loader: "node-loader"
      }
    ]
  }
};
