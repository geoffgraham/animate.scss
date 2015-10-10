var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var minifyCss = require('gulp-minify-css');

var SassSrc = 'animate.scss';

gulp.task('sass', function () {
    return sass('animate.scss', { sourcemap: true })
    .on('error', sass.logError)
    // For inline sourcemaps
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(''));
});

gulp.task('css', function() {
  return gulp.src('animate.css')
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch('**/*.scss', ['sass', 'css']);
});

gulp.task('default', ['watch']);
