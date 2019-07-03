// gulpfile에서 ES6의 문법을 사용하기 위해선 파일 이름을 "gulpfile.babel.js"로 설정해야 한다..
import gulp from "gulp";
import uglify from "gulp-uglify";
import del from "del";
import browserify from "browserify";
import babelify from "babelify";
import sourceStream from "vinyl-source-stream";
import buffer from "vinyl-buffer";

const delfile = done => {
  const deletedPaths = del(["dist/*.js"]);
  // console.log(deletedPaths);
  done();
};
// 요거는 나중에 프론트앤드 파일 합칠때 사용하면 됩니다. ㅋ
const bundlejs = done => {
  const bundler = browserify({
    entries: "./src/js/server.js",
    debug: true, // set true to use source maps
    node: true
  });
  bundler
    .transform(babelify.configure({ presets: ["@babel/preset-env"] }))
    .bundle()
    .pipe(sourceStream("server.js"))
    .pipe(buffer())
    .pipe(gulp.dest("dist"));
  done();
};

const transpileJsServer = done => {
  const transfpile = cb => {
    gulp
      .src("src/js/*.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"));
    cb();
  };
  done();
};

exports.bundlejs = gulp.series(delfile, bundlejs);
exports.transfpileServer = gulp.series(delfile, transpileJsServer);
