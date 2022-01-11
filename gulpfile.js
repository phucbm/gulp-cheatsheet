const fs = require("fs");
const gulp = require('gulp');
const header = require('gulp-header');

/**
 * Format datetime
 * https://stackoverflow.com/a/34015511/10636614
 * @param string
 * @returns {string}
 */
function formatDate(string = new Date()){
    const datetime = new Date(string);
    const day = datetime.toLocaleString("vi-VN", {day: 'numeric'});
    const month = datetime.toLocaleString("vi-VN", {month: 'numeric'});
    const year = datetime.toLocaleString("vi-VN", {year: 'numeric'});
    const hour = datetime.toLocaleTimeString("vi-VN", {hour: '2-digit'});
    const minute = datetime.toLocaleTimeString("vi-VN", {minute: '2-digit'});

    return `${year}/${month}/${day} - ${hour}:${minute}`;
}

/**
 * Capitalize the first letter in string
 * @param string
 * @returns {string}
 */
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


/**
 * Format title
 * @param string
 * @returns {string}
 */
const formatTitle = string => capitalizeFirstLetter(string.split('-').join(' ').replace('.md', ''));


/**
 * Generate content
 */
gulp.task('content', function(callback){
    let string = '';
    const path = 'tasks/';
    const files = fs.readdirSync(path);

    // read src
    for(const file of files){
        const content = fs.readFileSync(`${path}${file}`, {encoding: 'utf8', flag: 'rs'});

        // title
        const name = file.replace('.md', '');
        string += `### [${formatTitle(file)}](https://phucbm.github.io/gulp-cheatsheet/tasks/${name})\n\n`;

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
    let headerContent = fs.readFileSync(`./header.md`, {encoding: 'utf8', flag: 'rs'});
    headerContent = headerContent.replace('{{date}}', formatDate(new Date()));

    return gulp.src('./README.md')
        .pipe(header(`${headerContent}\n\n`))
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
gulp.task('serve', function(){
    gulp.watch(['*.md', 'tasks/*.md', '!README.md'], gulp.series('export'));
});