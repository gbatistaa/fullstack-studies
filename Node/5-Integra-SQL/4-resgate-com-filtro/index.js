import express from "express";
import { engine } from "express-handlebars";
import mysql from "mysql2";

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

app.get("/books", (req, res) => {
  const query = "SELECT * FROM Books";

  connection.query(query, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;
    console.log(books);
    res.render("books", { books });
  });
});

// Resgatando dados da "biblioteca pelo id do livro"
app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const query = "SELECT * FROM Books WHERE id = ?";
  connection.query(query, [id], function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).send("Erro no servidor");
    }
    const book = data[0];

    if (!book) {
      return res.status(404).send("Livro não encontrado");
    }

    res.render("book", { book });
  });
});

// Rota para editar um livro com base no seu id:
app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;

  const query = `SELECT * FROM Books WHERE id = ${id}`;

  connection.query(query, function (err, data) {
    if (err) {
      console.error(err);
      return;
    }

    const book = data[0];
    res.render("editbook", { book });
  });
});

// Inserindo dados no banco de dados por meio de uma url de post:
app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageQty = req.body.pagesqty;

  const query = `INSERT INTO Books (title, pageQty) VALUES (?, ?)`;

  connection.query(query, [title, pageQty], function (err, data) {
    if (err) {
      console.log(err);
      res.send("Erro ao inserir livro!");
    } else {
      res.redirect("/books");
    }
  });
});

// Objeto de configuração da conexão com o banco de dados
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
    console.clear();
    app.listen(3007);
    console.log("Conectou ao banco de dados MySQL!");
  }
});

// Para inserir dados no banco de dados vamos executar querys
// É uma string no padrão do MySQL, usando o método query do
// pacote mysql, e para isso usaremos a instrução INSERT.
