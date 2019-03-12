const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

gulp.task('test',function(){
	console.log('hello,狗日的');
})

gulp.task('js',function(){
	gulp.src('./src/js/*.js').pipe(concat("all.min.js"))
	.pipe(uglify()).pipe(gulp.dest('./dist'));
})

gulp.task('default',function(){
	gulp.watch(['./src/scss/*.scss'],['sass']);
	gulp.watch(['./src/js/*.js'],['js']);
})

gulp.task('sass',function(){
	gulp.src('./src/scss/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'));
})