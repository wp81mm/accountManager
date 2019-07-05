"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;
app.set("view engine", "pug");
app.set("views", "./src/views");
app.use(_routes["default"].home, _globalRouter["default"]);

var handleListening = function handleListening() {
  return console.log("\u2705Listening on: http://localhost:".concat(PORT));
};

app.listen(PORT, handleListening);