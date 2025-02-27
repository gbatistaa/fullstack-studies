import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

const basePath = path.join(__dirname, "html");

// - Com o método post ao invés de resgatarmos dados do banco de dados
// salvamos informações no db em alguma url.
// - Necessitamos de middlewares para ler dados do body como o express.json
// - O express.json converte o corpo do request em um objeto JS.

// lendo o body:
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
});

app.post("/users/save", (req, res) => {
  // Escrevendo a resposta da equisição no console
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  // Escreve a resposta da requisição em um arquivo txt:
  fs.appendFileSync("user-data.txt", `Name-${name} Age-${age}\n`);

  res.sendFile(`${basePath}/userForm.html`);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  // Leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/index.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
