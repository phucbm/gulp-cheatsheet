const fs = require("fs");
const gulp = require('gulp');
const header = require('gulp-header');
const footer = require('gulp-footer');

/**
 * Generate content from /src
 */
gulp.task('content', function(callback){
    let string = '';
    const path = 'src/';
    const files = fs.readdirSync(path);

    // read src
    for(const file of files){
        const content = fs.readFileSync(`${path}${file}`, {encoding: 'utf8', flag: 'rs'});

        // title
        string += `### ${file}\n\n`;

        // content
        string += `${content}\n\n`;
    }

    // write
    fs.writeFile('./README.md', string, callback);

    callback();
});


/**
 * Prepend header
 */
gulp.task('header', function(){
    const headerContent = fs.readFileSync(`./header.md`, {encoding: 'utf8', flag: 'rs'});

    return gulp.src('./README.md')
        .pipe(header(headerContent))
        .pipe(gulp.dest(function(file){
            return file.base;
        }, {overwrite: true}));
});


/**
 * Export
 */
gulp.task('export', gulp.series('content', 'header'));


/**
 * Watch
 */
gulp.task('watch', function(){
    gulp.watch(['*.md', 'src/*.md', '!README.md'], gulp.series('export'));
});