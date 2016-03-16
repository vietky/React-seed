var gulp = require('gulp');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
requireDir('./tasks/');

gulp.task('build', [], function () {
    runSequence(['clean'], ['copy', 'webpack-client'], function () {
        console.log('Done! :)');
    });
});

gulp.task('default', [], function () {
    runSequence(['clean'], ['webpack-dev-server'], ['server'], function () {
        console.log('Done! :)');
    });
});