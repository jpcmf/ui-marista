const webpack = require('webpack');
const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

let plugins = [];

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'index.html',
  template: __dirname + '/main.html'
}));

plugins.push(new extractTextPlugin('style.css'));

plugins.push(new webpack.ProvidePlugin({
  '$': 'jquery/dist/jquery.js',
  'jQuery': 'jquery/dist/jquery.js'
}));

plugins.push(new copyWebpackPlugin([
  { from: 'src/images/*', to: '' }
]));

plugins.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.bundle.js'
}));

if(process.env.NODE_ENV == 'production') {
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
  plugins.push(new babiliPlugin());

  plugins.push(new optimizeCSSAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
      discardComments: {
        removeAll: true
      }
    },
    canPrint: true
  }));
}

module.exports = {
  entry: {
    app: ['./src/js/app.js', 'font-awesome/scss/font-awesome.scss'],
    vendor: ['jquery', 'popper.js', 'bootstrap']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' }
        ]
      }
    ]
  },
  plugins
}
