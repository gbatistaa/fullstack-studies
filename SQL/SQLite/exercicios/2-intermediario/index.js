import connection from "./db/connection.js";

const main = async () => {
  try {
    const resultado = await connection.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

main();
