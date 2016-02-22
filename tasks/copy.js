var gulp = require('gulp');
var rename = require('gulp-rename');
var build = require('./build.config.js');

gulp.task('copy', [], function () {
    gulp.src(
            build.appFolder + 'index.prod.html'
        )
        .pipe(rename('index.html'))
        .pipe(gulp.dest(build.distFolder));
    
    gulp.src([
        build.appFolder + 'libs/**/**',
        build.appFolder + 'styles/**/*.css'
    ], {
        base: build.appFolder
    })
    .pipe(gulp.dest(build.distFolder));
});