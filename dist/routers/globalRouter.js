"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get(_routes["default"].home, function (req, res) {
  res.render("home");
});
globalRouter.get(_routes["default"].join, function (req, res) {
  res.send("Join!!");
});
globalRouter.get(_routes["default"].login, function (req, res) {
  res.send("Log in!!");
});
var _default = globalRouter;
exports["default"] = _default;