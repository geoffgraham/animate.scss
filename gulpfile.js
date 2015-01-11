/*global require:true*/

var gulp            = require('gulp');
var $               = require('gulp-load-plugins')();
var browsersSupport = ['> 1%', 'last 2 versions', 'ff < 20', 'ie >= 9', 'Opera >= 10'];


gulp.task('sass', function() {
  return $.rubySass('animate.scss', {sourcemap: true, style: 'expanded'})
    .pipe($.autoprefixer({browsers: browsersSupport}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./'))
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.filter('*.css'))
    .pipe($.minifyCss())
    .pipe($.rename({suffix: '.min'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});
