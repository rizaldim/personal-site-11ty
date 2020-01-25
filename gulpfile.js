var gulp = require("gulp");
var sass = require("gulp-sass");

var css = function () {
	return gulp.src('./src/_scss/index.scss')
		.pipe(sass({ })
		.on('error', sass.logError))
		.pipe(gulp.dest('./src/_includes/css'));
}

var watch = function () {
	gulp.watch('./src/_scss/*.scss', gulp.series('css'));
}

exports.css = css;
exports.watch = watch;

exports.default = gulp.series(css, watch);
