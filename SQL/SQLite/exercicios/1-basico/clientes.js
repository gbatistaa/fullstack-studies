import { handleSQLiteError } from "../../functions/erros.js";
import { criarTabelas } from "./sql/criarTabela.js";
import { inserirClientes } from "./sql/inserirClientes.js";

async function main() {
  try {
    await criarTabelas();

    await inserirClientes();
  } catch (error) {
    handleSQLiteError(error);
  }
}

main();
