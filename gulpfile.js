const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const cleanCSS= require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const transform = require('vinyl-transform')
const concat = require('gulp-concat');
const source = require('vinyl-source-stream');
const imagemin = require('gulp-imagemin');
const util = require('util')
const templatePrefixer = require('./gulpUtils/templatePrefixer.js')
const jsonLoader =  require('./gulpUtils/jsonLoader.js')
const rename = require('gulp-rename')
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
]

gulp.task('serve', ()=> {
    browserSync.init({
        server: "./dist/"
    });
    gulp.watch('src/js/*.js',['compress']).on('change',browserSync.reload)
    gulp.watch('src/styles/*.scss',['clean-css']).on('change',browserSync.reload)
    // gulp.watch('src/js/*.js',['browserify']).on('change',browserSync.reload)
    gulp.watch('*').on('change',browserSync.reload)
    gulp.watch('src/pages/*.html',['test']).on('change',browserSync.reload)

})


gulp.task('compress', ()=>
        gulp.src('src/js/*.js')
        // .pipe(concat('bundle.js'))
        .pipe(babel({
            presets: ["@babel/preset-env"],
        })).on('error', function(e){
            console.log(e);})
         // .pipe(uglify().on('error', function(e){
            // console.log(e);}))
        .pipe(gulp.dest('./dist/js'))
);

// DONT MIND THIS FOR NOW, MIGHT USE FOR BROWSERIFY LATER
// gulp.task('browserify', function () {
//   // return browserify({entries: './src/js/main1.js', debug: true})
//   //       .transform("babelify", {presets: ["@babel/preset-env"]})
//   //       .bundle()
//   //       .pipe(source('main1.js'))
//   //       .pipe(buffer())
//   //       // .pipe(uglify())
//   //       .pipe(gulp.dest('./dist/'));;
//    gulp.src('src/js/*.js')
//          .pipe(babel({
//             presets: ['@babel/env']
//         }))
//          .pipe(uglify().on('error', function(e){
//             console.log(e);}))
//         .pipe(gulp.dest('./dist/'))
// });


gulp.task('clean-css',()=>
  gulp.src('src/styles/*.scss')
  // .pipe(concat('bundle.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./dist/'))
  )

gulp.task('imagemin', () =>
    gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images/'))
);

gulp.task('html',()=>
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'))
  )
gulp.task('test',()=>
  gulp.src('src/pages/*.html')
  .pipe(templatePrefixer())
  .pipe(gulp.dest('dist/pages')
))
gulp.task('jsonhtml',()=>
  gulp.src('src/pages/*.json')
  .pipe(jsonLoader())
  .pipe(rename({extname:'.html'}))
  .pipe(gulp.dest('dist/json'))
  )

gulp.task('default',['serve','html','test','compress','clean-css','imagemin'])


