🔗 https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md

```shell
npm install --save-dev gulp del
```

```js
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function(){
    return del([
        'dist/report.csv',
        // here we use a globbing pattern to match everything inside the `mobile` folder
        'dist/mobile/**/*',
        // we don't want to clean this file though so we negate the pattern
        '!dist/mobile/deploy.json'
    ]);
});
```