// Busca dentro do node_modules um pacote chamado gulp e atribui par a variavel
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

//Variáveis para apontar onde está o arquivo do Sass e a pasta destino final do Css
//Scss sources
var scssFiles = './src/scss/style.scss';
//Css sources
var cssDest = './css';


//Development
var sassDevOptions = {
  outputStyle: 'expanded'
};

//Production(mimified)
var sassProdOptions = {
  outputStyle: 'compressed'
};

//Function for development
//Executar: gulp sassDev
gulp.task('sassDev', function() {
  return gulp.src(scssFiles)
  .pipe(sass(sassDevOptions).on('error', sass.logError))
  .pipe(gulp.dest(cssDest));
});

//Function for Production(mimified)
//Executar: fulp sassProd
gulp.task('sassProd', function() {
  return gulp.src(scssFiles)
  .pipe(sass(sassProdOptions).on('error', sass.logError))
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest(cssDest));
});

//Gulp watch
//Exercutar: gulp watch
gulp.task('watch', function(){
  gulp.watch(scssFiles,['sassProd', 'sassDev']);
});


//Teste para verificar se está funcionando
//gulp.task('default', function() {
//  console.log('Teste gulp');
//});

//sass.task('default', function() {
//  console.log('Teste sass');
//});
