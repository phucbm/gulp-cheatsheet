🔗 https://gulpjs.com/docs/en/api/series/

```js
gulp.task('export', gulp.series('dist', 'minify', 'clean'));
```