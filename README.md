# Gulp cheatsheet

https://gulpjs.com/docs/en/getting-started/quick-start/

Create a package.json file in your project directory

```text
npm init
```

Install the gulp package

```text
npm install --save-dev gulp
```

Create a gulpfile

Create a file named gulpfile.js in your project root.

## Task

### Browser sync

https://browsersync.io/docs/gulp

```js
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
gulpfile.task('serve', function(){
    // Watch for all files change and reload
    gulpfile.watch('**').on('change', () => {
        browserSync.reload();
    });

    // serve files from root directory
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // serve files from /app folder
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    // serve files both root and /app
    browserSync.init({
        server: ["./", "./app"]
    });
});
```

### Copy files to new folder

https://gulpjs.com/docs/en/api/dest/

```js
const gulp = require('gulp');
const files = [
    'assets/**/*.*', // all files and sub-folder in assets folder
    'index.html'
];

// copy files and create /app folder in root
gulp.task('create-app', () => {
    return gulp.src(files, {base: './'})
        .pipe(gulp.dest('app'));
});
```

### Zip

https://www.npmjs.com/package/gulp-zip

```text
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

### Delete

```js
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function(){
    return del('dist', {force: true});
});
```

### Uglify

### Replace

```js
gulp.task('replace', function(){
    return gulp.src(['./scroll-snooper.js', './README.md', './test/*', './example/*'])
        .pipe(replace(oldVersion, function handleReplace(match){
            console.log(`[${count}] Found "${oldVersion}"`);
            count++;
            return newVersion;
        }))
        .pipe(gulp.dest(function(file){
            console.log(file.base)
            return file.base;
        }, {overwrite: true}));
});
```

### Readline

### Group tasks

```js
gulp.task('export', gulp.series('dist', 'zip', 'clean'));
```