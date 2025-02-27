import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4000;

const basePath = path.join(__dirname, "html");

// deve ter os dois pontos:
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  // Leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos buscando pelo usuário ${id}`);

  res.sendFile(`${basePath}/index.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}!`);
});
