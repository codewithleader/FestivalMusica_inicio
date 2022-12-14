const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done) {
  // Identificar el archivo de SASS
  // Compilarlo
  // Guardarlo en un archivo CSS
  src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest('build/css'));

  done(); // callback que le avisa a gulp que ya terminé
}

function dev(done) {
  watch('src/scss/**/*.scss', css);

  done();
}

exports.css = css;
exports.dev = dev;
