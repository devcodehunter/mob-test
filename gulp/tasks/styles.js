var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autopre = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nestedcss = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins');


gulp.task('style', function(){
    return gulp.src('./apps/assets/css/*.css')
    .pipe(postcss([cssimport, mixins, cssvars, nestedcss, autopre]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./apps/temp/style'));
});