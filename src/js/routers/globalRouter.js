import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => {
  res.render("home");
});

globalRouter.get(routes.join, (req, res) => {
  res.send("Join!!");
});

globalRouter.get(routes.login, (req, res) => {
  res.send("Log in!!");
});

export default globalRouter;
