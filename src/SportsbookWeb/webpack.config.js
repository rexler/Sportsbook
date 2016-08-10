var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sassLoaders = [
  'css-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src')
];

module.exports = {
  devtool: 'sourcemap',
  entry: {},
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.css$/, loader: 'style!css' },
       {
         test: /\.scss$/,
         loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
       }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'app')) === -1;
      }
    }),

    new ExtractTextPlugin('[name].css')
  ]
};
