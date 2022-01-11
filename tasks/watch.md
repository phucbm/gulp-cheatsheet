🔗 https://gulpjs.com/docs/en/api/watch/

```javascript
const gulp = require('gulp');

gulp.task('serve', function(){
    // run task on file change
    gulp.watch(['filename.txt'], gulp.series('export'));
});
```