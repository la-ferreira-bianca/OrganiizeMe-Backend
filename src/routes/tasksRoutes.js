import express from "express";
import TasksController from "../controllers/tasksController.js";

const router = express.Router();

router
  .get("/tasks", TasksController.showTasks)
  .post("/tasks", TasksController.insertTask);

export default router;
