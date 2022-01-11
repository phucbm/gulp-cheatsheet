# Gulp cheatsheet

🔗 https://gulpjs.com/docs/en/getting-started/quick-start/

Create a package.json file in your project directory

```shell
npm init
```

Install the gulp package

```shell
npm install --save-dev gulp
```

Create a file named `gulpfile.js` in your project root.

## Tasks### browser-sync.md

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

### clone-files.md

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

### delete.md

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

### read-file.md

🔗 https://nodejs.org/api/fs.html

```javascript
const gulp = require('gulp');
const fs = require("fs");

gulp.task('test', function(){
    fs.readFile("src/browser-sync.md", {encoding: 'utf-8', flag: 'rs'}, function(e, data){
        if(e) return console.log(e);
        console.log(data);
    });
});
```

### replace.md

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

### series.md

🔗 https://gulpjs.com/docs/en/api/series/

```js
gulp.task('export', gulp.series('dist', 'minify', 'clean'));
```

### zip.md

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

