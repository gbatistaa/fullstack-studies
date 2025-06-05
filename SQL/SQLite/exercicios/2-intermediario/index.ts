import connection from "./db/connection.js";

const main = async (): Promise<void> => {
  try {
    const resultado = await connection.sync();
    resultado;
  } catch (error) {
    console.log(error);
  }
};

main();
