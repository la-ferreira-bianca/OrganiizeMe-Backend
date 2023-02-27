import express from "express";
import TasksController from "../controllers/tasksController.js";

const router = express.Router();

router
  .get("/tasks", TasksController.showTasks)
  .get("/tasks/:id", TasksController.showTaskByID)
  .post("/tasks", TasksController.insertTask)
  .put("/tasks/:id", TasksController.updateTask);

export default router;
