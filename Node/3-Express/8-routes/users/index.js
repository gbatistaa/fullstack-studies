import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const basePath = path.join(__dirname, "../html");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
});

router.post("/save", (req, res) => {
  // Escrevendo a resposta da equisição no console
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  // Escreve a resposta da requisição em um arquivo txt:
  fs.appendFileSync("user-data.txt", `Name-${name} Age-${age}\n`);

  res.sendFile(`${basePath}/userForm.html`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  // Leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/index.html`);
});

export default router;
