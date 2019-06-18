"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;
app.set("view engine", "pug");
app.set("views", "./src/views"); // app.get("/", (req, res) => res.render("home"));

app.get("/", function (req, res) {
  return res.send("Hello World");
});

var handleListening = function handleListening() {
  return console.log("\u2705Listening on: http://localhost:".concat(PORT));
};

app.listen(PORT, handleListening);