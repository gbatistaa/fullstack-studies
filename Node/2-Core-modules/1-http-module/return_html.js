import http from "http";

const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<h1>Eu fiz o L e me arrependo</h1><h3>Testando o reload</h3>");
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
