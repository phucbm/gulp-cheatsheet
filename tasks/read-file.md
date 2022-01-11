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