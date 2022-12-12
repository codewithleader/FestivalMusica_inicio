const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {
  // Identificar el archivo de SASS
  src('src/scss/app.scss')
    .pipe(sass())
    .pipe(dest('build/css'));

  // Compilarlo

  // Guardarlo en un archivo CSS
  done(); // callback que le avisa a gulp que ya terminé
}

exports.css = css;