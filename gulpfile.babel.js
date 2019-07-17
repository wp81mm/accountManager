// gulpfile에서 ES6의 문법을 사용하기 위해선 파일 이름을 "gulpfile.babel.js"로 설정해야 한다..
import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import del from "del";
// import browserify from "browserify";
import babelify from "babelify";
import sourceStream from "vinyl-source-stream";
import buffer from "vinyl-buffer";

sass.compiler = require("node-sass");

//Js 파일이 변경되면 Js 파일만 지우고 다시 빌드
// SCSS파일이 변경되면 SCSS 파일만 지우고 다시 빌드

const path = {
  jsBackend: {
    watch: "./assets/jsback/**/*.js",
    src: "./assets/jsback/**/*.js",
    dest: "./build/jsback"
  },
  styles: {
    watch: "./assets/scss/*.scss",
    src: "./assets/scss/styles.scss",
    dest: "./build/public/css"
  }
};

const deljsFront = done => {
  const deletedPaths = del(["/*.js"]);
  done();
};

/*
const jsFront = done => {
  const bundler = browserify({
    entries: "./src/js/server.js", // 나중에는 main.js로 설정한다.
    debug: true, // set true to use source maps
    node: true
  });
  bundler
    .transform(babelify.configure({ presets: ["@babel/preset-env"] }))
    .bundle()
    .pipe(sourceStream("main.js"))
    .pipe(buffer())
    .pipe(gulp.dest("dist/public/js"));
  done();
};
*/

const deljsBackend = done => {
  del([path.jsBackend.dest]);
  console.log(`jsBackEnd was deleted!!`);
  done();
};

const jsBackend = done => {
  gulp
    .src(path.jsBackend.src) //js 폴더내의 모든 폴더와 모든 파일에 대해서 실행
    .pipe(babel())
    .pipe(gulp.dest(path.jsBackend.dest));
  done();
};

const delcss = done => {
  del([path.styles.dest]);
  console.log(`style was deleted!!`);
  done();
};

const css = done => {
  gulp
    .src(path.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false
        // more options are in package.json
      })
    )
    .pipe(gulp.dest(path.styles.dest));
  done();
};

export const style = gulp.series(delcss, css);

const watch = done => {
  // gulp.watch("src/js/**/*.js", gulp.series(deletefile, jsBackend, style));
  gulp.watch("src/scss/**/*.scss", style);
  done();
};

export const build = gulp.series(jsBackend, style, watch);
