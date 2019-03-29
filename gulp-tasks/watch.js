var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('watch', function(){  
    browserSync.init({
        notify: false,
        server:{
        baseDir: "./app",
        index: "portfolio.html"
    }
    });

    gulp.watch(['./app/portfolio.html', './app/src/**/*.css', './app/src/**/*.js', './app/dist/impages/*'], gulp.parallel('html', 'style', 'script', 'image')).on('change', function refresh(){browserSync.reload()});
});