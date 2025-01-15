// imprimir texto
const x = 10;
const y = [1, 2, 3, 4, 5];
const z = "Texto aleatório";

console.log(x, y, z);

//contagem de impressões
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

// variável entre strings:
console.log("Eu gosto muito dessa array: %s, amo demais", y);

//limpar o console

setTimeout(() => {
  console.clear();
}, 2000);
