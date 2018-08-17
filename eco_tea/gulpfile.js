const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber      = require('gulp-plumber');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(plumber())
        // .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});


// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    // gulp.pipe(plumber());
    browserSync.init({
        server: "./src" 
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);