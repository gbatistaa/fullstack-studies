// externo:
const minimist = require("minimist");

//interno
const eleva = require("./eleva").elevaADois;

const args = minimist(process.argv.slice(2));

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

const somaDeQuadrados = (x = a, y = b) =>
  `${x}² + ${y}² = ${eleva(x) + eleva(y)}`;

console.log(somaDeQuadrados());
