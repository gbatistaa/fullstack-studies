import connection from "./db/connection.js";

const main = async (): Promise<void> => {
  try {
    await connection.sync();
    // for (const cliente of clientes) {
    //   await cadastrarCliente();
    // }
  } catch (error) {
    console.log(error);
  }
};

main();
