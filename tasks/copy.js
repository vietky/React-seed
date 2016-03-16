var gulp = require('gulp');
var rename = require('gulp-rename');
var pathConfig = require('../configs/path.js');

gulp.task('copy', [], function () {
    gulp.src(
            pathConfig.appFolder + '/index.prod.html'
        )
        .pipe(rename('index.html'))
        .pipe(gulp.dest(pathConfig.distFolder));
    
    gulp.src([
        pathConfig.appFolder + '/libs/**/**',
        pathConfig.appFolder + '/styles/**/*.css'
    ], {
        base: pathConfig.appFolder
    })
    .pipe(gulp.dest(pathConfig.distFolder));
});