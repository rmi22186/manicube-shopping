var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var bs = require('browser-sync');

var paths = {
  scripts: ['js/**/*.js'],
  html: ['index.html'],
  styles: ['css/*.css']
};

// Use browser sync to automatically refresh page on client side file save
gulp.task('default', ['serve'],  function () {
  bs({
    notify: true,
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles, paths.scripts),
  });
});

// start our node server using nodemon
gulp.task('serve', function() {
  nodemon({script: 'server.js', ignore: 'node_modules/**/*.js'});
});