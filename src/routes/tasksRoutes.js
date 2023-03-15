import express from "express";
import TasksController from "../controllers/tasksController.js";

const router = express.Router();

router
  .get("/tasks", TasksController.showTasks)
  .get("/tasks/date", TasksController.showTaskByData)
  .get("/tasks/category", TasksController.showTasksByCategory)
  .get("/tasks/:id", TasksController.showTaskByID)
  .post("/tasks", TasksController.insertTask)
  .put("/tasks/:id", TasksController.updateTask)
  .delete("/tasks/:id", TasksController.deleteTask);

export default router;
