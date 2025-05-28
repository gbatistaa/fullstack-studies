import sqlite3 from "sqlite3";
import { handleSQLiteError } from "./functions/erros.js";
import { fetchAll } from "./functions/fetch.js";

async function main() {
  const db = new sqlite3.Database("my_database.db");

  const sql = `SELECT * FROM users`;

  try {
    const users = await fetchAll(db, sql);
    console.log(users);
  } catch (error) {
    handleSQLiteError(error);
  } finally {
    db.close();
  }
}

main();
