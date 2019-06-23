`use strict`;
// gulpfile에서 ES6의 문법을 사용하기 위해선 파일 이름을 "gulpfile.babel.js"로 설정해야 한다..
import gulp from "gulp";
import babel from "gulp-babel"; //
// 서버가 스크립트를 더욱 빠르게 읽고 실행할 수 있도록 코드를 최적화 한다. .pipe(uglify())
import uglify from "gulp-uglify";
// 여러파일을 하나의 파일로 합친다.
import concat from "gulp-concat";
// import babelRegister from "babel-register";

const transfpile = cb => {
  gulp
    .src("src/js/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
  cb();
};

const hello = cb => {
  console.log("Hello gulp");
  console.log(cb.toString());
  cb();
};

exports.trs = transfpile;
exports.default = gulp.series(transfpile, hello);
