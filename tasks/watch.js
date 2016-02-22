var gulp = require('gulp');
var build = require('./build.config.js');

gulp.task('watch', [], function () {
    gulp.watch([
        build.appFolder + 'index.html'
    ], ['copy'], function () {
        console.log('copied!');
    });
});