import categories from "../models/Category.js";

//arquivo de routes for categorias
class CategoriesController {
  static showCategory = (req, res) => {
    categories.find((error, categories) => {
      res.status(200).json(categories);
    });
  };

  static showCategoryByID = (req, res) => {
    const id = req.params.id

    categories.findById(id, (error, categories) => {
        if(error) {
            res.status(400).send({message: `${error.message} Não foi possivel achar o id da categoria`})
        } else {
            res.status(200).send(categories)
        }
    })
  }

  static insertCategory = (req, res) => {
    let category = new categories(req.body);
    category.save((error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - falha ao cadastrar categoria` });
      } else {
        res.status(201).send(category.toJSON());
      }
    });
  };

  static updateCategory = (req, res) => {
    const id = req.params.id;

    categories.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: `Categoria atualizada com sucesso` });
      } else {
        res.status(500).send({ message: `${error.message}` });
      }
    });
  };

  static deleteCategory = (req, res) => {
    const id = req.params.id

    categories.findByIdAndDelete(id, (error) => {
        if(!error) {
            res.status(200).send({message: 'Categoria removida com sucesso'})
        } else {
            res.status(500).send({message: `${error.message}`})
        }
    })
  }
}

export default CategoriesController;
