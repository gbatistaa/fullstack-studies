// Middlewares são códigos que podem ser executados
// no meio de uma ação e outra.
// Grealmente são utilizados para verificação antes de alguma
// ação maior principal
// O método use do express da acesso a eles:

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4000;

const basePath = path.join(__dirname, "templates");

const checkAuth = (req, res, next) => {
  // Simulação de verificação de login do usuário:
  req.authStatus = false;

  if (req.authStatus) {
    console.log("Está logado, continue");

    // Esse next() serve para que após a verificação o sistema
    // passe para a próxima etapa:
    next();
  } else {
    console.log("Não está logado, faça login para continuar");
    next();
  }
};

// Assim desse jeito toda requisição enviada pro servidor
// Vai passar por esse middleware com a função checkAuths:
app.use(checkAuth);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
