🔗 https://browsersync.io/docs/gulp

```shell
npm install browser-sync gulp --save-dev
```

```js
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function(){
    // Watch for all files change and reload
    gulp.watch('**').on('change', () => {
        browserSync.reload();
    });


    browserSync.init({
        // serve files from root directory
        server: {baseDir: "./"},

        // serve files from /app folder
        server: {baseDir: "./app"},

        // serve files both root and /app
        server: ["./", "./app"]
    });
});
```