var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var buildConfig = require('./build.config.js');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack-dev-server', [], function () {
    var compiler = webpack(webpackConfig(false));

    new WebpackDevServer(compiler, {
        contentBase: buildConfig.appFolder,
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

gulp.task('webpack', [], function () {
    webpack(webpackConfig(true), function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('webpack\'s done!');
    });
});