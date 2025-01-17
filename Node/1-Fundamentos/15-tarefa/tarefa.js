import chalk from "chalk";
import inquirer from "inquirer";

const argvs = process.argv.slice(2);

console.clear();

inquirer
  .prompt([
    { name: "name", message: "Nome completo:" },
    { name: "age", message: "Idade:" },
  ])
  .then((answers) => {
    if (!Number.isInteger(parseInt(answers.age))) {
      throw new Error("This value passed is not interger or even an numeric.");
    } else if (/[0-9]/.test(answers.nome)) {
      throw new Error("Name cannot have numeric character.");
    }
    console.log(
      chalk.bgBlack.bold.green(`O nome do usuário é: ${answers.name}`),
    );
    console.log(
      chalk.bgBlack.bold.blueBright(`E ele tem ${answers.age} de idade`),
    );
    if (parseInt(answers.age) >= 18) {
      console.log(chalk.bgBlack.bold.yellow("E é maior de idade"));
    } else {
      console.log(chalk.bgBlack.bold.red("E é menor de idade"));
    }
  })
  .catch((err) => {
    console.log(err);
  });
