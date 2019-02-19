var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcssvars = require('postcss-simple-vars');
var postcssImport = require('postcss-import');
var postcssnested = require('postcss-nested');
var browserSync = require('browser-sync').create();


gulp.task('html', function(){
    return gulp
    .src('./app/portfolio.html');
});
gulp.task('style', function(){
    return gulp
    .src('./app/src/styles/*.css')
    .pipe(postcss([postcssImport, postcssvars, postcssnested]))
    .pipe(gulp.dest('app/dist/styles'));
});
gulp.task('script', function(){
    return gulp
    .src('./app/src/script/*.js')
    .pipe(gulp.dest('app/dist/scripts'));
});
gulp.task('image', function(){
    return gulp
    .src('./app/dist/impages/*');
});

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
