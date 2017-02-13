#!/usr/bin/env node
process.env.NODE_ENV = 'development'
console.log('Waiting for webpacking ...')

require('babel-polyfill')
require('babel-core/register')({
  plugins: [
    ['babel-plugin-transform-require-ignore', {
      extensions: ['.less', '.css']
    }]
  ]
})

var Koa = require('koa')
var webpack = require('webpack')
var http = require('http')
var path = require('path')
var KWM = require('koa-webpack-middleware')
var { devMiddleware, hotMiddleware } = KWM
var chokidar = require('chokidar')
var applyMiddleware = require('../platforms/server/applyMiddleware')
var config = require('../platforms/common/config')
var webpackConfig = require('../webpack.config.dev')
var compiler = webpack(webpackConfig)

var app = new Koa()

var devMiddlewareInstance = devMiddleware(compiler, {
  // quiet:true,
  noInfo: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: false
  },
  publicPath: '/build/',
  stats: {
    colors: true
  }
})
var hotMiddlewareInstance = hotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
})

app.env = 'development'

// error logger
app.on('error', function (err, ctx) {
  console.log('error occured:', err.stack)
})

app.use(devMiddlewareInstance)
app.use(hotMiddlewareInstance)
applyMiddleware(app)

var server = http.createServer(app.callback())

var watcher = chokidar.watch([
  path.join(__dirname, '../app'),
  path.join(__dirname, '../platforms')
])
watcher.on('ready', function () {
  watcher.on('all', function (e, p) {
    console.log('Clearing module cache')
    Object.keys(require.cache).forEach(function (id) {
      if (/[\/\\](app|platforms)[\/\\]/.test(id)) delete require.cache[id]
    })
  })
})

var isListened = false
compiler._plugins['after-compile'].push(function (compilation, callback) {
  callback()
  !isListened && server.listen(config.port, function () {
    console.log('App started, at port %d, CTRL + C to terminate', config.port)
    isListened = true
  })
})
