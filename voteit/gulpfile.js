var gulp = require('gulp'),
	connect = require('gulp-connect'),
	open = require('gulp-open'),
	browserify = require('browserify'),
	concat = require('gulp-concat'),
	reactify = require('reactify'),
	// a tiny wrapp around Node stream2 Transform to avoid explicit subclassing noise
	through2 = require('through2'),
	port = process.env.port || 3031;

// browserify files
gulp.task('browserify', function () {

	// initial solution failed write end
	// https://medium.com/@sogko/gulp-browserify-the-gulp-y-way-bb359b3f9623
	// modified solution
	// https://github.com/substack/node-browserify/issues/1044

	var browserified = through2.obj(function (file, enc, next) {
		browserify(file.path)
			.transform(reactify)
			.bundle(function (err, res) {
				// assumes file.contents is a buffer
				file.contents = res;
				next(null, file);
			});
	});

	gulp.src('./app/src/js/main.js')
	    .pipe(browserified)
    	.pipe(gulp.dest('./app/dist/js'))

});

// launch browser in a port
gulp.task('open', function () {
	var options = {
		url: 'http://localhost:' + port
	};
	gulp.src('./app/index.html')
		.pipe(open('', options));
});

// live reload server
gulp.task('connect', function () {
	connect.server({
		root: 'app',
		port: port,
		livereload: true
	})
});

// live reload js
gulp.task('js', function () {
	gulp.src('./app/dist/**/*.js')
		.pipe(connect.reload());
});

// live reload html
gulp.task('html', function () {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

// watch files for live reload
gulp.task('watch', function () {
	gulp.watch('app/dist/js/*.js', ['js']);
	gulp.watch('app/*.html', ['html']);
	gulp.watch('app/src/js/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);