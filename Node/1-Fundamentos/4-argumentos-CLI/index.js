// Aqui está como o node pode manipular argumentos escritos na linha de comando
// eles ficam em um array chamado process.argv
const args = process.argv.slice(2);

const nome = args[0].split("=")[1];

const idade = args[1].split("=")[1];
console.log(args);

console.log(nome);

console.log(idade);
