// INCLUDE PLUGINS
var gulp = require('gulp');
var cssbeautify = require('gulp-cssbeautify');
var sass = require('gulp-sass');
var rename = require("gulp-rename");



// FOLDER
var buildDir = './app';
var outputDir = './dist';



// TASKS
gulp.task('typo3-fsc', ['typo3-fsc-css', 'typo3-fsc-css-min']);
gulp.task('typo3-fsc-css', function () {
	return gulp
		.src(buildDir+'/scss/fluidstyledcontent.scss')
		.pipe(sass())
		.pipe(cssbeautify({indent: '    ', autosemicolon: true}))
		.pipe(gulp.dest(outputDir))
});
gulp.task('typo3-fsc-css-min', function () {
	return gulp
		.src(buildDir+'/scss/fluidstyledcontent.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(outputDir))
});
