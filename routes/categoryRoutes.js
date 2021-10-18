const express = require("express");

const Router = express.Router();

const { storeCategory,
    getCategories,
    getCategoryDetails,
    updateCategory,
    deleteCategory
} = require('../controller/categoryController');

Router.get("/categories", getCategories);
Router.post("/categories", storeCategory);
Router.get("/categories/:id", getCategoryDetails);
Router.put("/categories/:id", updateCategory);
Router.delete("/categories/:id", deleteCategory);

module.exports = Router;