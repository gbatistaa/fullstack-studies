import sqlite3 from "sqlite3";

// Ao executar esse arquivo js é criado um arquivo .db na raiz do projeto
// Esse arquivo será o banco de dados de toda a aplicação, possivelmente desktop:
const db = new sqlite3.Database("my_database.db");

console.log("Node.js + SQLite");
