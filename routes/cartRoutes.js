const express = require("express");

const Router = express.Router();

const { storeCart,
    getCarts,
    getCartDetails,
    updateCart,
    deleteCart
} = require('../controller/cartController');

Router.get("/carts", getCarts);
Router.post("/carts", storeCart);
Router.get("/carts/:id", getCartDetails);
Router.put("/carts/:id", updateCart);
Router.delete("/carts/:id", deleteCart);

module.exports = Router;