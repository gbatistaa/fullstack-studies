import express from "express";
import { engine } from "express-handlebars";
import pool from "./db/connection";

// O uso do driver pool serve para otimizar as operações feitas
// com o banco de dados, ele gerencia as operações colocando as
// possíveis para a cache, e exclui as conexões inativas quando
// o número passa do limite especificado por parâmetro, sempre use.

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

  pool.query(query, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;
    console.log(books);
    res.render("books", { books });
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const query = "SELECT * FROM Books WHERE id = ?";
  pool.query(query, [id], function (err, data) {
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

app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;

  const query = "SELECT * FROM Books WHERE id = ?";
  pool.query(query, [id], function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).send("Erro no servidor");
    }
    const book = data[0];

    if (!book) {
      return res.status(404).send("Livro não encontrado");
    }

    res.render("editbook", { book });
  });
});

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageQty = req.body.pageQty;

  const query = `INSERT INTO Books (title, pageQty) VALUES (?, ?)`;

  pool.query(query, [title, pageQty], function (err, data) {
    if (err) {
      console.log(err);
      res.send("Erro ao inserir livro!");
    } else {
      res.redirect("/books");
    }
  });
});

app.post("/books/updatebook/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const pageQty = req.body.pageQty;

  console.log(req.body);

  if (!id || !title || !pageQty) {
    return res.status(400).send("Dados inválidos.");
  }

  const query = "UPDATE Books SET title = ?, pageQty = ? WHERE id = ?";
  pool.query(query, [title, pageQty, id], function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).send("Erro ao atualizar livro: " + err.message);
    } else {
      res.redirect("/books");
    }
  });
});

app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;

  const query = "DELETE FROM Books WHERE id = ?";

  pool.query(query, [id], function (err, data) {
    if (err) {
      console.log(err);
      res.send("Erro ao deletar livro!");
    } else {
      res.redirect("/books");
    }
  });
});

pool.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    app.listen(3000);
    console.log("Conectou ao banco de dados MySQL!");
  }
});

// Para inserir dados no banco de dados vamos executar querys
// É uma string no padrão do MySQL, usando o método query do
// pacote mysql, e para isso usaremos a instrução INSERT.
