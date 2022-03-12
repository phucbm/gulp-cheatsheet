🔗 https://www.npmjs.com/package/gulp-uglify

```shell
npm install --save-dev gulp-uglify
```

```javascript
const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('minify-js', function(){
    return gulp.src(['src/*.js'])
        .pipe(rename({extname: '.min.js'}))
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("dist"));
});
```