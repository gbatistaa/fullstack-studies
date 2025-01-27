import fs from "fs";
import path from "path";

/*
    Esse é um módulo que nos permite ter acesso a diversas
    informações sobre arquivos com base no seu caminho

  - Método resolve: possívels saber qual o path completo até o arquivo alvo
  - Método join: possível formar um path dinâmico
  - Método fs.mkdirSync: cria um diretório com base no caminho passado por parâmetro
*/

const customPath = "/relatorios/gabriel/relatorio1.pdf";

//path absoluto
console.log(path.resolve("teste.txt"));

//formar path
const midFolder = "relatórios";
const fileName = "gabriel.txt";

const finalPath = path.join("arquivos", midFolder, fileName);
console.log(finalPath);

const dir = path.dirname(finalPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

for (let i = 0; i < 13; i++) {
  fs.appendFileSync(finalPath, "Faz o L\n");
}

// console.log(path.dirname(customPath));
// console.log(path.basename(customPath));
// console.log(path.extname(customPath));
