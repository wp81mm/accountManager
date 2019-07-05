import path from "path";
import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/js", express.static(`./dist/public/js`)); //프론트 엔드 자바 스크립트 파일을 합쳐서 dist/public/js에 넣어주면 된다.
app.use("/css", express.static(`./dist/public/css`)); //css파일을 합쳐서 dist/public/css에 넣어주면 된다.

app.set(`view engine`, "pug");
app.set(`views`, "./src/views");

app.use(routes.home, globalRouter);

const handleListening = () =>
  console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
