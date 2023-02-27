import tasks from "../models/Task.js";

//arquivo de routes for tasks
class TasksController {
  static showTasks = (req, res) => {
    tasks.find((error, tasks) => {
      res.status(200).json(tasks);
    });
  };

  static insertTask = (req, res) => {
    let task = new tasks(req.body);
    task.save((error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - falha ao cadastrar task` });
      } else {
        res.status(201).send(task.toJSON());
      }
    });
  };
}

export default TasksController;
