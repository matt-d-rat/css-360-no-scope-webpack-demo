var webpack = require('webpack');
var path = require('path');

var port = 8000;
var srcPath = path.join(__dirname, '/src');
var publicPath = '/build/';

module.exports = {
    port: port,
    debug: true,
    cache: true,
    devtool: 'sourcemap',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:' + port,
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, '/dist/build'),
        filename: 'app.js',
        publicPath: publicPath
    },
    devServer: {
        contentBase: './src/',
        hot: true,
        port: port,
        publicPath: publicPath,
        noInfo: false
    },
    resolve: {
        modulesDirectories: ['node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?outputStyle=expanded'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
