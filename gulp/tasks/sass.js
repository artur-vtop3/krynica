const dartSass = require('sass')
const gulpSass = require('gulp-sass')
const sass = gulpSass(dartSass)

module.exports = postCss = () => {
  return app.gulp
    .src('src/sass/*.sass')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(app.gulp.dest('src/css'))
}
