/*!!
 *
 * gulpfile.js
 * @author: @juanpablocs && @emanrique
 *
 */
var gulp        = require('gulp'),
    inlineStyle = require('./libs/inlineStyle');

var opts = {
    inlineReplace:{
        esto:       new RegExp("\\<\\?php echo \\$demo\\-\\>staticUrl\\(\\)\\?\\>css\\/(.*?)\\.css","g"),
        poresto:    "example/css/$1.css"
    },
    path:{
        src:    "example/html/*.php",
        dest:   "example/compiled/"
    }
}

gulp.task('inlineStyle', function(){
    return gulp.src(opts.path.src)
            .pipe(inlineStyle(opts.inlineReplace))
            .pipe(gulp.dest(opts.path.dest));
});
/*
gulp.task('watch', function(){
    return gulp.watch(opts.path.src);
});
*/
gulp.task('default', ['inlineStyle']);

