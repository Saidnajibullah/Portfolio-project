var gulp = require('gulp');



gulp.task('image', function(){
    return gulp
    .src('./app/dist/impages/*');
});