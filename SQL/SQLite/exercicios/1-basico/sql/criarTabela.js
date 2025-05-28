import sqlite3 from "sqlite3";
import { handleSQLiteError } from "../../../functions/erros.js";
import { execute } from "../functions/queryexec.js";

export async function criarTabelas() {
  const db = new sqlite3.Database("clientes.db");

  try {
    execute(
      db,
      `CREATE TABLE clientes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR,
        email VARCHAR,
        data_cadastro VARCHAR
      )`,
    );
  } catch (error) {
    handleSQLiteError(error);
  } finally {
    db.close();
  }
}
