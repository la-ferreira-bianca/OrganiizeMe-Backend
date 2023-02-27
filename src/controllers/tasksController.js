import tasks from "../models/Task.js";
//arquivo de rotes
class TasksController {
  static showTasks = (req, res) => {
    tasks.find((error, tasks) => {
      res.status(200).json(tasks);
    });
  };
}

export default TasksController;
