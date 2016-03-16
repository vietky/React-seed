var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var pathConfig = require('../configs/path.js');

gulp.task('server', [], function () {
    nodemon({
        script: pathConfig.serverFolder + '/app.js',
        env: {
            'NODE_ENV': 'development'
        }
    })
    .on('restart', function(){
        console.log('Server restarted!');
    });
});