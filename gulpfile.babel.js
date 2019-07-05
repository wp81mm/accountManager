// gulpfile에서 ES6의 문법을 사용하기 위해선 파일 이름을 "gulpfile.babel.js"로 설정해야 한다..
import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import del from "del";
import browserify from "browserify";
import babelify from "babelify";
import sourceStream from "vinyl-source-stream";
import buffer from "vinyl-buffer";

sass.compiler = require("node-sass");

const deletefile = done => {
  const deletedPaths = del(["dist/*.js"]);
  done();
};
// 요거는 나중에 프론트앤드 파일 합칠때 사용하면 됩니다. ㅋ
const bundlejs = done => {
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

const js = done => {
  gulp
    .src("src/js/**/*.js") //js 폴더내의 모든 폴더와 모든 파일에 대해서 실행
    .pipe(babel())
    .pipe(gulp.dest("dist"));
  done();
};

const css = done => {
  gulp
    .src("src/scss/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(gulp.dest("dist/public/css"));
  done();
};

const watch = done => {
  gulp.watch("src/js/**/*.js", gulp.series(deletefile, js, css));
  done();
};

exports.bundlejs = gulp.series(deletefile, bundlejs);
export const build = gulp.series(deletefile, js, css, watch);
