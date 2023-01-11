module.exports = copy = () => {
  return app.gulp
    .src('src/fonts/**/*.*')
    .pipe(app.gulp.dest('./dist/assets/fonts'))
}
