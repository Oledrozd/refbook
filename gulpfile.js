var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    order = require('gulp-order');
    //uncss = require('gulp-uncss');

    ////js
    //uglify = require('gulp-uglify');


//css task
gulp.task('css', function() {
    gulp.src('src/styles/*.css')
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))

        .pipe(order([
            'src/styles/main.css',
            'src/styles/reset.css'
        ]))

        //.pipe(uncss({
        //    html: ['public/*.html'],
        //    ignore: ['.open-menu', '.open-btn', '.*-modal-btn']
        //}))

        .pipe(minifyCss())

        .pipe(concat('main.css'))

        .pipe(gulp.dest('app/styles'));
});

////js task
//gulp.task('js', function() {
//    gulp.src('src/js/*.js')
//        .pipe(uglify())
//        .pipe(gulp.dest('public/js'));
//});


gulp.task('watch', function () {
    gulp.watch('src/styles/*.css', ['css']);
    //gulp.watch('src/js/*.js', ['js']);
});
