const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const ENV = require('./env')
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'www'),
}

process.env.BABEL_ENV = ENV

const common = {
  entry: PATHS.src,
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: [
          PATHS.src
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: [
          PATHS.src
        ],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?url=false!postcss-loader',
        include: PATHS.src,
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel?cacheDirectory',
        include: PATHS.src,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '/img/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '/fonts/[name].[ext]'
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    postcss: [require('autoprefixer')]
  }
}

module.exports = merge(common, {})
