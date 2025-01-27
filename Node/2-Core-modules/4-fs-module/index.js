// É o core module (File System)
// Basicamente com ele podemos ler e escrever em arquivos

import fs from "fs";
import http from "http";

const port = 3000;

const server = http.createServer((request, response) => {
  fs.readFile("mensagem.html", (err, data) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
