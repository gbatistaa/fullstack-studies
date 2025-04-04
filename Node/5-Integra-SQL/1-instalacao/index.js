import express from "express";
import { engine } from "express-handlebars";
import mysql from "mysql2";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  app.render("home");
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jujubAOI312.",
  database: "nodemysql",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Conectou ao banco de dados MySQL!");
    app.listen(3000);
  }
});
