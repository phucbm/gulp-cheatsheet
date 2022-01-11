🔗 https://www.npmjs.com/package/gulp-zip

```shell
npm install --save-dev gulp-zip
```

```js
const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('zip', () => {
    return gulp.src(['dist/**/*.*'], {base: './'})
        .pipe(zip(`filename.zip`))
        .pipe(gulp.dest('extension'));
});
```