const webpack = require('webpack');
const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

let plugins = [];

let HWPConfig = new htmlWebpackPlugin({
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'index.html',
  template: __dirname + '/main.html'
})

console.log(HWPConfig);


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

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'atividades.html',
  template: __dirname + '/atividades.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'eventos.html',
  template: __dirname + '/eventos.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'eventos-single.html',
  template: __dirname + '/eventos-single.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'calendario.html',
  template: __dirname + '/calendario.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'noticias.html',
  template: __dirname + '/noticias.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'fotos.html',
  template: __dirname + '/fotos.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'videos.html',
  template: __dirname + '/videos.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'biblioteca.html',
  template: __dirname + '/biblioteca.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'fale-conosco.html',
  template: __dirname + '/fale-conosco.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'instituto-marista.html',
  template: __dirname + '/instituto-marista.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'instituto-historia.html',
  template: __dirname + '/instituto-historia.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'instituto-fundador.html',
  template: __dirname + '/instituto-fundador.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'instituto-fundador-bio.html',
  template: __dirname + '/instituto-fundador-bio.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'instituto-fundador-bio-single.html',
  template: __dirname + '/instituto-fundador-bio-single.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'instituto-fundador-escritos.html',
  template: __dirname + '/instituto-fundador-escritos.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'instituto-fundador-escritos-single.html',
  template: __dirname + '/instituto-fundador-escritos-single.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'instituto-fundador-marcelino-arte.html',
  template: __dirname + '/instituto-fundador-marcelino-arte.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'instituto-capitulos.html',
  template: __dirname + '/instituto-capitulos.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'instituto-capitulos-single.html',
  template: __dirname + '/instituto-capitulos-single.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'ser-marista.html',
  template: __dirname + '/ser-marista.html'
}));

plugins.push(new htmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    removeComments: true
  },
  filename: 'missao-marista.html',
  template: __dirname + '/missao-marista.html'
}));

plugins.push(new extractTextPlugin('style.css'));

plugins.push(new webpack.ProvidePlugin({
  '$': 'jquery/dist/jquery.js',
  'jQuery': 'jquery/dist/jquery.js'
}));

plugins.push(new copyWebpackPlugin([
  { from: 'src/images/*', to: '' },
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
  // plugins: [

  // ]
}
