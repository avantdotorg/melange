var gulp        = require('gulp');
var taskname    = require('path').basename(__filename, '.js');
var runSequence = require('run-sequence');

gulp.task( taskname, function (done) {
  runSequence('clean:bin', ['copy', 'vendor', 'app'], 'post-build', done);
});