import express from "express";
import CategoriesController from "../controllers/categoriesController.js";

const router = express.Router();

router
  .get("/categories", CategoriesController.showCategory)
  .get("/categories/:id", CategoriesController.showCategoryByID)
  .post("/categories", CategoriesController.insertCategory)
  .put("/categories/:id", CategoriesController.updateCategory)
  .delete("/categories/:id", CategoriesController.deleteCategory);

export default router;
