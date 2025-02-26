import express from "express";

const app = express();
const port = 3000; // generaly its put in the .env files

app.get("/", (req, res) => {
  res.send("Olá gabriel");
});

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
