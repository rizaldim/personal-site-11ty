var gulp = require("gulp");
var sass = require("gulp-sass");

// a task to generate the css with sass
gulp.task('css', function() {
	return gulp.src('./src/_scss/index.scss')
		.pipe(sass({ })
		.on('error', sass.logError))
		.pipe(gulp.dest('./src/_includes/css'));
});