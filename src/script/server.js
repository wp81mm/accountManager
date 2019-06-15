import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.set(`view engine`, "pug");
app.set(`views`, "./src/views");

app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
