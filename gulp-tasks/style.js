var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcssvars = require('postcss-simple-vars');
var postcssImport = require('postcss-import');
var postcssnested = require('postcss-nested');

gulp.task('style', function(){
    return gulp
    .src('./app/src/styles/*.css')
    .pipe(postcss([postcssImport, postcssvars, postcssnested]))
    .pipe(gulp.dest('app/dist/styles'));
});