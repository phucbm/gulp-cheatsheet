🔗 https://gulpjs.com/docs/en/api/dest/

```js
const gulp = require('gulp');

// copy files and create /app folder in root
gulp.task('create-app', () => {
    return gulp.src([
        // all files and sub-folder in assets folder
        'assets/**/*.*',
        'index.html'
    ], {base: './'})
        .pipe(gulp.dest('app'));
});
```