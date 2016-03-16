var gulp = require('gulp');
var pathConfig = require('../configs/path.js');

gulp.task('watch', [], function () {
    gulp.watch([
        pathConfig.appFolder + '/index.html'
    ], ['copy'], function () {
        console.log('copied!');
    });
});