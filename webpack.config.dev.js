import webpack from 'webpack'
import path from 'path'

var includes = [
  path.resolve(__dirname, 'app'),
  path.resolve(__dirname, 'platforms')
]

module.exports = {
  entry: [
        // For old browsers
    'eventsource-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './platforms/browser/index.js'
  ],
  output: {
    path: path.join(__dirname, '/public/static'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },

  module: {
    rules: [{
      test: /\.jsx|.js$/,
      exclude: /node_modules/,
      include: includes,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=1',
        'postcss-loader'
      ]
    }, {
      test: /\.less$/,
      include: includes,
      use: [
        'style-loader',
        'css-loader?importLoaders=1',
        'postcss-loader',
        'less-loader'
      ]
    },
    { test: /\.woff2?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
    { test: /\.ttf$/, loader: 'url-loader?limit=10000&minetype=application/octet-stream' },
    { test: /\.eot$/, loader: 'file-loader' },
    { test: /\.svg$/, loader: 'url-loader?limit=10000&minetype=image/svg+xml' },
    { test: /\.(png|jpg|jpeg|gif)$/i, loader: 'url-loader?limit=10000&name=[name].[ext]' },
    { test: /\.json$/, loader: 'json' },
    { test: /\.html?$/, loader: 'file-loader?name=[name].[ext]' }
    ]
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')
        ]
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: 'common.js' }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
