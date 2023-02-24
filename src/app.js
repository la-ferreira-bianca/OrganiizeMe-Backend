import express from "express";

const app = express();

app.use(express.json());

const livros = [
  { id: 1, titulo: "senhor dos aneis" },
  { id: 2, titulo: "o hobbit" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de node");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
});

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
