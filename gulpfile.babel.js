var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("transpile", () => {
    return browserify('src/forumapp/app.js')
        .transform('babelify')
        .bundle()
        .pipe(source('forumapp-bundle.js'))
        .pipe(gulp.dest('target'));
});

gulp.task("watch", () => {
   gulp.watch('src/forumapp/**/*.js', ['transpile'])
});

gulp.task("default", ["transpile"]);
