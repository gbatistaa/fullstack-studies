import express from "express";
import { engine } from "express-handlebars";
import connection from "./db/connection.js";
import User from "./models/User.js";

// Para criar um Model devemos instanciar uma classe que representará uma tabela
// Colocamos os campos e os tipos dele como propriedades do Model
// Ele será utilizado para as operações entre aplicação e banco de dados
// O método sync faz a criação das tabelas baseadas nos models

const users = new User();

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

// Permite que o Express processe dados enviados via formulários HTML:
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Permite que o Express processe requisições com JSON no corpo
app.use(express.json());

// Rota para renderizar automaticamente o componente home:
app.get("/", (req, res) => {
  res.render("home");
});

connection
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => console.error(error));
