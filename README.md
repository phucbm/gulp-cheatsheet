# Gulp cheatsheet

> This file was auto-generated on 2022/3/12 - 13:1.

🔗 https://gulpjs.com/docs/en/getting-started/quick-start/

Create a package.json file in your project directory by running this command

```shell
npm init
```

Install the gulp package

```shell
npm install --save-dev gulp
```

Create a file named `gulpfile.js` in your project root. This file will contain your task script.

## Tasks


### [Browser sync](https://phucbm.github.io/gulp-cheatsheet/tasks/browser-sync)

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

### [Clone files](https://phucbm.github.io/gulp-cheatsheet/tasks/clone-files)

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

### [Delete](https://phucbm.github.io/gulp-cheatsheet/tasks/delete)

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

### [Minify css](https://phucbm.github.io/gulp-cheatsheet/tasks/minify-css)

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

### [Minify js](https://phucbm.github.io/gulp-cheatsheet/tasks/minify-js)

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

### [Read file](https://phucbm.github.io/gulp-cheatsheet/tasks/read-file)

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

### [Replace](https://phucbm.github.io/gulp-cheatsheet/tasks/replace)

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

### [Series](https://phucbm.github.io/gulp-cheatsheet/tasks/series)

🔗 https://gulpjs.com/docs/en/api/series/

```js
gulp.task('export', gulp.series('dist', 'minify', 'clean'));
```

### [Watch](https://phucbm.github.io/gulp-cheatsheet/tasks/watch)

🔗 https://gulpjs.com/docs/en/api/watch/

```javascript
const gulp = require('gulp');

gulp.task('serve', function(){
    // run task on file change
    gulp.watch(['filename.txt'], gulp.series('export'));
});
```

### [Zip](https://phucbm.github.io/gulp-cheatsheet/tasks/zip)

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

