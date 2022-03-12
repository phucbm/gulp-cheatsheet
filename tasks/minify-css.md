🔗 https://www.npmjs.com/package/gulp-clean-css

```shell
npm install --save-dev gulp-clean-css
```

```javascript
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('src/*.css')
        .pipe(rename({extname: '.min.css'}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});
```