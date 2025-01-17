// Estratégias de tratamentos de erro:

const num = 10.399;

if (!Number.isInteger(num)) {
  throw new Error("O valor de x não é um número inteiro");
}

console.log("Continuando o código...");
