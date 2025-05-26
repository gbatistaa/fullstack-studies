import sqlite3 from "sqlite3";
import { execute } from "./functions/execute";

// Ao executar esse arquivo js é criado um arquivo .db na raiz do projeto
// Esse arquivo será o banco de dados de toda a aplicação, possivelmente desktop:

// Para executar queries execute o método execute():

async function main() {
  const db = new sqlite3.Database("my_database.db");

  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS users(
        
      )`
    )
  } catch (error) {

  }
}
