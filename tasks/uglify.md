🔗 https://www.npmjs.com/package/gulp-uglify

```shell
npm install --save-dev gulp-uglify
```

```javascript
const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('compress', function(){
    return gulp.src(['foo.js'], {base: "./"})
        // This will uglify and rename to foo.min.js
        .pipe(uglify({
            output: {
                comments: /!/
            }
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('.'));
});
```