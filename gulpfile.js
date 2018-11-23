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
// const fs = 
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
];

gulp.task('serve', ()=> {
    browserSync.init({
        server: "./dist/"
    });
    gulp.watch('src/js/*.js',['compress']).on('change',browserSync.reload)
    gulp.watch('src/styles/*.scss',['clean-css']).on('change',browserSync.reload)
    // gulp.watch('src/js/*.js',['browserify']).on('change',browserSync.reload)
    gulp.watch('*').on('change',browserSync.reload)
    gulp.watch('pages/*',['test']).on('change',browserSync.reload)

})
gulp.task('compress', ()=>
        gulp.src('src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(babel({
            plugins: ['@babel/transform-runtime']
        }))
         // .pipe(uglify().on('error', function(e){
            // console.log(e);}))
        .pipe(gulp.dest('./dist/'))
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
  .pipe(gulp.dest('./dist'))
  )
gulp.task('test',()=>
  gulp.src('src/pages/*.html')
  .pipe(testModule())
  .pipe(gulp.dest('./dist/pages')
))

gulp.task('default',['serve','html','test','compress','clean-css','imagemin'])
// gulp.task('default',['test'])
var Transform = require('stream').Transform;

var through = require('through2');    // npm install --save through2

const testModule = function() {
  const header = "<script type='text/javascript'>let content='<div class='container blue'><h1 class='page-title'>Template Page</h1><div id='blo'></div><h2 class='page-subtitle'>This is the subtitle of the page</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lore</p></div>'if(!document.nav){document.open()async function loadBody(){try{const res=await fetch('./headernav.html') const reader=res.body.getReader() let result=await reader.read() console.log('blo') while(!result.done){document.write((String.fromCharCode.apply(null, new Uint8Array(result.value)))) result=await reader.read();}console.log(content)document.write(content)document.close()}catch(e){console.log(e)}};loadBody().then(()=>{console.log('med')})}</script>"

  return through.obj(function(file, encoding, cb) {

     const data = file.toString();
     console.log(file.isBuffer())
     console.log(file.isStream())
     console.log(file.contents)
     file.contents = Buffer.concat([Buffer.from(header,'utf8'), file.contents]);
  // console.log( util.inspect(file))
  // console.log(data)
  // console.log(util.inspect(data,false, null, true /* enable colors */))
    cb(null,file)
  });
};
// const testModule = function() {
//   // Monkey patch Transform or create your own subclass,
//   // implementing `_transform()` and optionally `_flush()`
//   var transformStream = new Transform({objectMode: true});
//   *
//    * @param {Buffer|string} file
//    * @param {string=} encoding - ignored if file contains a Buffer
//    * @param {function(Error, object)} callback - Call this function (optionally with an
//    *          error argument and data) when you are done processing the supplied chunk.
   
//   transformStream._transform = function(file, encoding, callback) {
//     // var files  = splitFile(file)
//     var error = null,
//         output = (file);
//     callback(error, output);
//      const data = file.toString(16);
//   // console.log( file)
//   console.log(data.Buffer)
//   console.log(util.inspect(data,false, null, true /* enable colors */))

//   };
//   return transformStream;
// };