import sqlite3 from "sqlite3";
import { execute } from "./functions/execute.js";

async function main() {
  const db = new sqlite3.Database("my_database.db");

  const sql = `INSERT INTO users(user_name,cpf) VALUES(?,?)`;

  try {
    await execute(db, sql, ["Samara", "12300032145"]);
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
}

main();
