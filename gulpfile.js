var gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var concat = require('gulp-concat');

gulp.task('test', ['mintest'], function () {
    return gulp
    .src('tests/test.html')
    .pipe(mochaPhantomJS());
});

gulp.task('mintest', function () {
    return gulp
    .src('tests/unit/*.js')
    .pipe(concat('tests.concat.js'))
    .pipe(gulp.dest('tests/'))
});