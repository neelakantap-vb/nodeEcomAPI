const express = require("express");

const Router = express.Router();

const { storeProduct,
    getProducts,
    getProductDetails,
    updateProduct,
    deleteProduct
} = require('../controller/productController');

Router.get("/products", getProducts);
Router.post("/products", storeProduct);
Router.get("/products/:id", getProductDetails);
Router.put("/products/:id", updateProduct);
Router.delete("/products/:id", deleteProduct);

module.exports = Router;