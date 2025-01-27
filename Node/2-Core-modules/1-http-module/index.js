// Basicamente com esse module, poderemos criar servidores http
// Receber uma requisição e eviar um html como resposta
import http from "http";

const port = 3000;

const server = http.createServer((request, response) => {
  response.write("<h1>Faz o L</h1>");
  response.end();
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
