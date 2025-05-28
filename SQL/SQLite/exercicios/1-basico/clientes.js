import { criarTabelas } from "./sql/criarTabela.js";
import { inserirClientes } from "./sql/inserirClientes.js";

await criarTabelas();
await inserirClientes();
