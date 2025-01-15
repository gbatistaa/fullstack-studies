const fs = require("fs");

// Lê o arquivo package.json
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

// Adiciona a propriedade "type": "module"
packageJson.type = "module";

// Escreve as alterações de volta no arquivo
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2), "utf8");

console.clear();
