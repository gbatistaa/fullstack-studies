// Utilização do módulo externo inquirer, para resgatar e lidar com inputno temrinal
// Baseado em promises

import chalk from "chalk";
import inquirer from "inquirer";

console.clear();

inquirer
  .prompt([
    { name: "p1", message: "Nota 1:" },
    { name: "p2", message: "Nota 2:" },
  ])
  .then((answers) => {
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;

    if (media >= 6)
      console.log(
        chalk.bgGreenBright.bold(`Você está aprovado! Sua média foi ${media}.`),
      );
    else
      console.log(
        chalk.bgRed.bold.black(`Você está reprovado! Sua média foi ${media}.`),
      );
  })
  .catch((err) => console.error(err));
