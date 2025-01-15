import chalk from "chalk";
const nota = 2;

if (nota >= 7) console.log(chalk.green.bold("Você está aprovado!"));
else console.log(chalk.bgRed.bold.black("Você está reprovado :("));
