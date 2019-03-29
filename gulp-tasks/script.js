var gulp = require('gulp');
var webpack = require('webpack');


gulp.task('script', function(callback){
    webpack(require('../webpack.config.js'), function(err){
        if(err){
            console.log(err.toString());
        }
        callback();
    });
});