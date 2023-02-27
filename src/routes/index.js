import express from "express";
import tasks from "./tasksRoutes.js";
import categories from "./categoriesRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Curso de node" });
  });

  app.use(express.json(), tasks, categories);
};

export default routes;
