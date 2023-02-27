import tasks from "../models/Task.js";

//arquivo de routes for tasks
class TasksController {
  static showTasks = (req, res) => {
    tasks.find((error, tasks) => {
      res.status(200).json(tasks);
    });
  };

  static showTaskByID = (req, res) => {
    const id = req.params.id

    tasks.findById(id, (error, tasks) => {
        if(error) {
            res.status(400).send({message: `${error.message} Não foi possivel achar o id da task`})
        } else {
            res.status(200).send(tasks)
        }
    })
  }

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

  static updateTask = (req, res) => {
    const id = req.params.id;

    tasks.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: `Tasks atualizada com sucesso` });
      } else {
        res.status(500).send({ message: `${error.message}` });
      }
    });
  };
}

export default TasksController;
