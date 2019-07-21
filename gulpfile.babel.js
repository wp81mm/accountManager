// gulpfile에서 ES6의 문법을 사용하기 위해선 파일 이름을 "gulpfile.babel.js"로 설정해야 한다..
import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import del from "del";
// import bro from "gulp-bro"; 나중에 프론트 엔드 코드를 작성하면 gulp-bro로 합친다.
import babelify from "babelify";
import sourceStream from "vinyl-source-stream";
import buffer from "vinyl-buffer";

sass.compiler = require("node-sass");

//Js 파일이 변경되면 Js 파일만 지우고 다시 빌드
// SCSS파일이 변경되면 SCSS 파일만 지우고 다시 빌드

const path = {
  jsForntend: {
    watch: "./assets/jsfront/**/*.js",
    src: "./assets/jsfront/**/*.js",
    dest: "./build/public/js"
  },
  jsBackend: {
    watch: "./assets/jsback/**/*.js",
    src: "./assets/jsback/**/*.js",
    dest: "./build/jsback",
    del: [`./build/jsback/**`, `!./build/jsback`]
  },
  styles: {
    watch: "./assets/scss/*.scss",
    src: "./assets/scss/styles.scss",
    dest: "./build/public/css",
    del: [`./build/public/css/**`, `./build/public/css`]
  }
};

const deljsFront = done => {
  const deletedPaths = del(["/*.js"]);
  done();
};

const jsFront = done => {
  done();
};

export const deljsBackend = done => {
  del(path.jsBackend.del);
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
  del(path.styles.del);
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

const watch = done => {
  gulp.watch(path.styles.watch, gulp.series(delcss, css));
  done();
};

export const dev = gulp.series(delcss, css, watch);

export const build = gulp.series(
  gulp.parallel(delcss, deljsBackend),
  css,
  jsBackend
);
