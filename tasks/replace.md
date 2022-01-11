🔗 https://www.npmjs.com/package/gulp-replace

```shell
npm install --save-dev gulp-replace
```

```js
const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('replace', function(){
    // replace and overwrite
    return gulp.src(['file.txt'])
        .pipe(replace('bar', 'foo'))
        .pipe(gulp.dest(function(file){
            console.log(file.base)
            return file.base;
        }, {overwrite: true}));

    // replace and create new folder
    return src(['file.txt'])
        .pipe(replace('bar', 'foo'))
        .pipe(dest('build/'));
});
```