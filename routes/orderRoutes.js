const express = require("express");

const Router = express.Router();

const { storeOrder,
    getOrders,
    getOrderDetails,
    updateOrder,
    deleteOrder
} = require('../controller/orderController');

Router.get("/orders", getOrders);
Router.post("/orders", storeOrder);
Router.get("/orders/:id", getOrderDetails);
Router.put("/orders/:id", updateOrder);
Router.delete("/orders/:id", deleteOrder);

module.exports = Router;