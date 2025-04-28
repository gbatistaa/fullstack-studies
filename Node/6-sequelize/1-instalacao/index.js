import express from "express";
import { engine } from "express-handlebars";

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

app.listen(3000);

// Para inserir dados no banco de dados vamos executar querys
// É uma string no padrão do MySQL, usando o método query do
// pacote mysql, e para isso usaremos a instrução INSERT.
