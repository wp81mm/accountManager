"use strict";
var _express = _interopRequireDefault(require("express")),
  _routes = _interopRequireDefault(require("./routes")),
  _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
var app = (0, _express.default)(),
  PORT = process.env.PORT || 4e3;
app.use("/js", _express.default.static("./dist/public/js")),
  app.use("/css", _express.default.static("./dist/public/css")),
  app.set("view engine", "pug"),
  app.set("views", "./src/views"),
  app.use(_routes.default.home, _globalRouter.default);
var handleListening = function() {
  return console.log("✅Listening on: http://localhost:".concat(PORT));
};
app.listen(PORT, handleListening);
