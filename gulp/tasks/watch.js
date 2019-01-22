var gulp = require('gulp'),
watch = require('gulp-watch'),
browsersync = require('browser-sync').create();


gulp.task('watch', function(){
    browsersync.init({
        notify : false,
        server : {
            baseDir: 'apps'
        }
    });
    watch('./apps/*.html', function(){
        browsersync.reload();
    });
    watch('./apps/assets/css/**/*.css', gulp.parallel('cssInject', 'style'));
});


gulp.task('cssInject', function() {
    return gulp.src('./apps/temp/style/style.css')
    .pipe(browsersync.stream());
});
