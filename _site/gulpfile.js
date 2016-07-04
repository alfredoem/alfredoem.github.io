var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

var modules = 'node_modules/';

gulp.task('styles', function(){
    gulp.src('resources/assets/sass/app.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('public/css'))
});

gulp.task('fonts', function(){
    gulp.src(modules + 'materialize-css/fonts/roboto/*')
        .pipe(gulp.dest('public/fonts/roboto'))
});

gulp.task('icons', function(){
    gulp
        .src([
            modules + 'material-design-icons/iconfont/MaterialIcons-Regular.eot',
            modules + 'material-design-icons/iconfont/MaterialIcons-Regular.woff2',
            modules + 'material-design-icons/iconfont/MaterialIcons-Regular.woff',
            modules + 'material-design-icons/iconfont/MaterialIcons-Regular.ttf'
        ])
        .pipe(gulp.dest('public/fonts'));
});

gulp.task('scripts', function(){
    gulp
        .src([
          modules + 'jquery/dist/jquery.min.js',
          modules + 'materialize-css/dist/js/materialize.min.js'
        ])
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('public/js/libs'))
});

gulp.task('default', ['styles', 'fonts', 'icons', 'scripts']);


gulp.task('watch', function(){
    livereload.listen();
    gulp.watch(['index.html'], [livereload.reload]);
});
