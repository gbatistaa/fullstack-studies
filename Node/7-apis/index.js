import express from "express";

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Primeira rota criada com sucesso!" });
});

app.post("/createproduct", (req, res) => {
  const { name, price } = req.body;

  if (!name) {
    res.status(422).json({ message: "O campo nome é obrogatório!" });
    return;
  }

  console.log(name, price);
  res.status(201).json({
    message: `O produto criado foi ${name} custando ${price}$`,
  });
});

app.listen(PORT);
