import sqlite3 from "sqlite3";
import { handleSQLiteError } from "../../../functions/erros";
import { execute } from "../functions/queryexec";

export async function atualizarEmail() {
  const db = new sqlite3.Database("clientes.db");

  const sql = `UPDATE clientes SET email = ? WHERE nome = ?`;

  try {
    await execute(db, sql, ["gabigool@icloud.com", "Gabriel"]);
  } catch (error) {
    handleSQLiteError(error);
  } finally {
    db.close();
  }
}
