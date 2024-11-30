import gulp from 'gulp';
import sassProcessor from 'gulp-sass';
import * as sassModule from 'sass';
import terser from 'gulp-terser';
import imagemin from 'gulp-imagemin';

const sass = sassProcessor(sassModule);

// Caminhos para os arquivos
const projectPaths = {
  styles: {
    input: './*.scss',  // Procura arquivos SASS no diretório atual
    output: './',       // Coloca o CSS compilado no diretório atual
  },
  scripts: {
    input: './*.js',    // Procura arquivos JS no diretório atual
    output: './',       // Coloca os JS minificados no diretório atual
  },
  images: {
    input: './images/*',  // Certifique-se de que a pasta image existe na raiz
    output: './images/',  // Coloca as imagens otimizadas na pasta image
  },
};


// Compilar SASS
export function processSass() {
  return gulp
    .src(projectPaths.styles.input)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(projectPaths.styles.output));
}

// Minificar JavaScript
export function minimizeScripts() {
  return gulp
    .src(projectPaths.scripts.input)
    .pipe(terser())
    .pipe(gulp.dest(projectPaths.scripts.output));
}

// Otimizar imagens
export function imageOptimization() {
  return gulp
    .src(projectPaths.images.input)
    .pipe(imagemin())   // Aqui o gulp-imagemin é usado para otimizar
    .pipe(gulp.dest(projectPaths.images.output));
}

// Monitorar mudanças
export function monitorFiles() {
  gulp.watch(projectPaths.styles.input, processSass);
  gulp.watch(projectPaths.scripts.input, minimizeScripts);
  gulp.watch(projectPaths.images.input, imageOptimization);
}

// Tarefa padrão
export default gulp.series(processSass, minimizeScripts, imageOptimization, monitorFiles);
