import express from "express";
import db from "./config/dbConnect.js";
import tasks from "./models/Task.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexao"));
db.once("open", () => {
  console.log("conexao com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

routes(app);

app.get("/tasks/:id", (req, res) => {
  let index = searchTask(req.params.id);
  res.json(tasks[index]);
});

app.put("/tasks/:id", (req, res) => {
  let index = searchTask(req.params.id);
  tasks[index].title = req.body.titulo;
  res.json(tasks);
});

app.delete("/tasks/:id", (req, res) => {
  let { id } = req.params;
  let index = searchTask(id);
  tasks.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
});

function searchTask(id) {
  return tasks.findIndex((livro) => livro.id == id);
}

export default app;
