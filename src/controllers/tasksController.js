import tasks from "../models/Task.js";

//arquivo de routes for tasks
class TasksController {

  static showTasks = (req, res) => {
    tasks.find()
    .populate("category")
    .exec((error, tasks) => {
      res.status(200).json({
        result: tasks
      });
    });
  };

  static showTaskByID = (req, res) => {
    const id = req.params.id
    tasks.findById(id)
    .populate("category", "title")
    .exec((error, tasks) => {
        if(error) {
            res.status(400).send({message: `${error.message} Não foi possivel achar o id da task`})
        } else {
            res.status(200).send(tasks)
        }
    })
  }


  //Theres changes between params and querys, use after the best practice one
  static showTaskByData = (req, res) => {
    const finalDate = req.query.finalDate
    console.log(finalDate)
    //TODO: - Figure out how to change the query to reacive only a string
    const dateFormated = new Date(finalDate)
    
    tasks.find({'finalDate': finalDate}, {}, (error, tasks) => {
      if (error) {
        res.status(500).send(`erro foi ${error.message}`)  
      }
      res.status(200).send(tasks)
    })
  }

  static showTasksByCategory = (req, res) => {
    const category = req.query.category

    tasks.find({'category': category}, {}, (error, tasks) => {
      if (error) {
        res.status(500).send(`erro foi ${error.message}`)  
      }
      res.status(200).send(tasks)
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

  static deleteTask = (req, res) => {
    const id = req.params.id

    tasks.findByIdAndDelete(id, (error) => {
        if(!error) {
            res.status(200).send({message: 'task removida com sucesso'})
        } else {
            res.status(500).send({message: `${error.message}`})
        }
    })
  }
}

export default TasksController;