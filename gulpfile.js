var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('sync', function() {
  connect.server();
});

gulp.task('default', ['sync']);

