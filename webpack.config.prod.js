process.env.NODE_ENV = 'production'

var webpack = require('webpack')
var path = require('path')
var fs = require('fs')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModules = fs.readdirSync('node_modules')
var includes = [
    path.resolve(__dirname, 'app'),
    path.resolve(__dirname, 'platforms')
]

module.exports = [{
    name: 'browser side render',
    entry: [
        './platforms/browser/index.js'
    ],
    devtool: 'cheap-source-map',
    output: {
        path: 'public/build',
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
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?importLoaders=1!postcss-loader' })
            }, {
                test: /\.less$/,
                include: includes,
                loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: "css-loader?importLoaders=1!less-loader!postcss-loader" })
            },
            { test: /\.woff2?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
            { test: /\.ttf$/, loader: 'url-loader?limit=10000&minetype=application/octet-stream' },
            { test: /\.eot$/, loader: 'file-loader' },
            { test: /\.svg$/, loader: 'url-loader?limit=10000&minetype=image/svg+xml' },
            { test: /\.(png|jpg|jpeg|gif)$/i, loader: 'url-loader?limit=10000&name=[name].[ext]' },
            { test: /\.json$/, loader: 'json' }, { test: /\.html?$/, loader: 'file?name=[name].[ext]' }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer')
                ]
            }
        }),
        new ExtractTextPlugin({ filename: "all.min.css", allChunks: true }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: 'common.js' }),
        new webpack.HotModuleReplacementPlugin()
    ]
}, {
    name: 'server side render',
    devtool: 'cheap-source-map',
    entry: ['./platforms/server/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
        publicPath: '/build/',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    node: {
        fs: 'empty',
        __dirname: true,
        __filename: true
    },
    externals: [
    function (context, request, callback) {
      var pathStart = request.split('/')[0]
      if (pathStart && (pathStart[0] === '!') || nodeModules.indexOf(pathStart) >= 0 && request !== 'webpack/hot/signal.js') {
        return callback(null, 'commonjs ' + request)
      }
      callback()
    }
  ],
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: includes,
                loader: 'babel-loader',
                query: {
                    plugins: [
                        ["babel-plugin-transform-require-ignore", {
                            "extensions": [".less", ".css"]
                        }]
                    ]
                }
            }, {
                test: /\.(css|less)$/,
                loader: 'null'
            },
            { test: /\.woff2?$/, loader: 'null' },
            { test: /\.ttf$/, loader: 'null' },
            { test: /\.eot$/, loader: 'null' },
            { test: /\.svg$/, loader: 'null' },
            { test: /\.(png|jpg|jpeg|gif|webp)$/i, loader: 'url-loader?limit=10000' },
            { test: /\.json$/, loader: 'json' }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}]
