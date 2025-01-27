// É o core module (File System)
// Basicamente com ele podemos ler e escrever em arquivos

import fs from "fs";
import http from "http";
import url from "url";

const port = 3000;

const server = http.createServer((request, response) => {
  const urlInfo = url.parse(request.url, true);
  const name = urlInfo.query["name"];

  // Enquanto o usuário não envia o seu nome o Node.js renderiza na página o html principal com o formulário de preenchimento
  if (!name) {
    fs.readFile("index.html", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  } else {
    const nameNewLine = name + "\n";

    fs.appendFile("names.txt", `${nameNewLine}`, (err, data) => {
      response.writeHead(302, {
        location: "/",
      });
      return response.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
