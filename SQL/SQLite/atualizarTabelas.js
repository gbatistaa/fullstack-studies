import sqlite3 from "sqlite3";
import { handleSQLiteError } from "./functions/erros.js";
import { execute } from "./functions/execute.js";

async function main() {
  const db = new sqlite3.Database("my_database.db");
  const sql = `UPDATE users SET user_name = ?, cpf = ? WHERE id = ?`;

  try {
    await execute(db, sql, ["Guilherme", "89032146599", 2]);
  } catch (error) {
    handleSQLiteError(error);
  } finally {
    db.close();
  }
}

main();
