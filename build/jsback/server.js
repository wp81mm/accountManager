"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = process.env.PORT || 8000;
app.use("/js", _express.default.static("./build/public/js")); //프론트 엔드 자바 스크립트 파일을 합쳐서 dist/public/js에 넣어주면 된다.

app.use("/css", _express.default.static("./build/public/css")); //css파일을 합쳐서 dist/public/css에 넣어주면 된다.

app.set("view engine", "pug");
app.set("views", "./assets/views"); // Express.Router

app.use(_routes.default.home, _globalRouter.default);
app.get("/");

var handleListening = function handleListening() {
  return console.log("\u2705Listening on: http://localhost:".concat(PORT));
};

app.listen(PORT, handleListening); //