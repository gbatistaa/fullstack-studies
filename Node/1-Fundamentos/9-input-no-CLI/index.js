import chalk from "chalk";
import readline from "readline";

console.clear();

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question("Qual foi a sua nota na prova de matemática? ", (nota) => {
  if (nota >= 7) console.log(chalk.green.bold("Você está aprovado!"));
  else console.log(chalk.bgRed.bold.black("Você está reprovado :("));

  read.close();
});
