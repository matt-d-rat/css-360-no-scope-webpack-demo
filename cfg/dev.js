var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

var baseConfig = require('./base');

var config = _.merge({
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    cache: true,
    devtool: 'sourcemap',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}, baseConfig);

module.exports = config;