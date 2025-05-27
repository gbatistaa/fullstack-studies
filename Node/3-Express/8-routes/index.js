import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import users from "./users/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// - Com o método post ao invés de resgatarmos dados do banco de dados
// salvamos informações no db em alguma url.
// - Necessitamos de middlewares para ler dados do body como o express.json
// - O express.json converte o corpo do request em um objeto JS.

// lendo o body:
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const basePath = path.join(__dirname, "html");

// Toda requisição feita com a URL começando em /users será
// tratada pelas rotas de middleware que estão no Router de users:
app.use("/users", users);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
