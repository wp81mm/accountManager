import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";

const app = express();
const PORT = process.env.PORT || 4000;

app.set(`view engine`, "pug");
app.set(`views`, "./src/views");

app.use(routes.home, globalRouter);

const handleListening = () =>
  console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
