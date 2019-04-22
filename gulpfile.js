const gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css');

gulp.task('scss', function () {
    gulp.src('app/assets/css//*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', notify.onError({
            message: "<%= error.message %>",
            title: "Sass Error!"
        })))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

/*
gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: 'localhost/vuelix-html/app',
        notify: false
    });
});
*/


gulp.task('watch', ['browser-sync', 'scss'], function () {

    // Compile .scss
    gulp.watch('app/assets/css//*.scss', ['scss']);

    gulp.watch("app//*.html", browserSync.reload);
    gulp.watch("app//*.php", browserSync.reload);
    gulp.watch("app/assets/js//*.js", browserSync.reload);
    gulp.watch("app/assets/libs//*.js", browserSync.reload);
    gulp.watch("app/assets/vendors//*", browserSync.reload);
    gulp.watch("app/assets/img//*", browserSync.reload);
});

gulp.task('default', ['watch']);