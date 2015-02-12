var gulp = require('gulp'),
	connect = require('gulp-connect'),
	open = require('gulp-open'),
	browserify = require('browserify'),
	transform = require('vinyl-transform'),
	source = require('vinyl-source-stream'),
	concat = require('gulp-concat'),
	reactify = require('reactify'),
	react = require('gulp-react'),
	through2 = require('through2'),
	port = process.env.port || 3031;

// browserify files
gulp.task('browserify', function () {

	gulp.src('./app/src/js/main.js')
    .pipe(through2.obj(function (file, enc, next){
            browserify(file.path)
                .transform(reactify)
                .bundle(function(err, res){
                    // assumes file.contents is a Buffer
                    file.contents = res;
                    next(null, file);
                });
        }))
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