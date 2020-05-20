// For development only
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require("webpack-hot-middleware")

const path = require('path')
const express = require('express')

const app = express()

// webpack
const config = require('./webpack.server.config.js')
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}))
app.use(webpackHotMiddleware(compiler))

const DIST_DIR = __dirname
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
})
