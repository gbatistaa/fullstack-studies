import sqlite3 from "sqlite3";
import { handleSQLiteError } from "../../../functions/erros.js";
import { execute } from "../functions/queryexec.js";

export async function inserirClientes() {
  const db = new sqlite3.Database("clientes.db");

  const data = new Date().toISOString();

  const clientes = [
    ["Gabriel", "gabriel@gmail.com", data],
    ["Samara", "samara@gmail.com", data],
    ["Roberta", "roberta@gmail.com", data],
    ["Guilherme", "guilherme@gmail.com", data],
    ["Amanda", "amanda@gmail.com", data],
  ];

  const sql = `INSERT INTO clientes(nome,email,data_cadastro) VALUES (?,?,?)`;

  try {
    for (let i = 0; i < clientes.length; i++) {
      await execute(db, sql, clientes[i]);
    }
  } catch (error) {
    handleSQLiteError(error);
  } finally {
    db.close();
  }
}
