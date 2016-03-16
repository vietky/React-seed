var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var pathConfig = require('../configs/path.js');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack-dev-server', [], function () {
    var compiler = webpack(webpackConfig());

    new WebpackDevServer(compiler, {
        contentBase: pathConfig.appFolder,
        filename: 'bundle.js',
        historyApiFallback: true,
        hot: true,
        inline: true,
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        }
    }).listen(8080, 'localhost', function () {
        console.log('[webpack-dev-server] Started!');
    });
});

gulp.task('webpack-client', [], function () {
    webpack(webpackConfig(), function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('webpack client\'s done!');
    });
});