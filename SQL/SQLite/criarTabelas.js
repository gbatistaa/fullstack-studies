import sqlite3 from "sqlite3";
import { handleSQLiteError } from "./functions/erros.js";
import { execute } from "./functions/execute.js";

// Ao executar esse arquivo js é criado um arquivo .db na raiz do projeto
// Esse arquivo será o banco de dados de toda a aplicação, possivelmente desktop:
// Para executar queries execute o método execute():

async function main() {
  // Instância da conexão com o banco de dados:
  const db = new sqlite3.Database("my_database.db");

  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_name VARCHAR(100) NOT NULL,
        cpf VARCHAR(14) NOT NULL UNIQUE
      )`,
    );
  } catch (error) {
    handleSQLiteError(error);
  }
}

main();
