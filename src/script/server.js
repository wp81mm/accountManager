import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
