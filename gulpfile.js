const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

const jsFiles = ['**/*.js', '!./node_modules/**'];

gulp.task('lint', function () {
  return gulp.src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test', ['lint'], function () {
  return gulp.src(['test/**/*.test.js'])
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('tdd', ['test'], function () {
  gulp.watch(jsFiles, ['test']);
});
