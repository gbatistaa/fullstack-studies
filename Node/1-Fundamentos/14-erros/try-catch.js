// Estratégias de tratamentos de erro:

const num = 10;

try {
  if (!Number.isInteger(num)) {
    throw new Error("O valor de x não é um número inteiro");
  }

  console.log(`${num} é um inteiro`);
} catch (error) {
  console.log(error);
}

// A estrutura try catch não impede a execução do programa
console.log("Continuando o código...");
