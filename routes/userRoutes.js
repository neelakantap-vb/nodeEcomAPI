const express = require("express");

const Router = express.Router();

const { storeUser,
    getUsers,
    getUserDetails,
    updateUser,
    deleteUser,
    login,
    logout
} = require('../controller/userController');

Router.get("/users", getUsers);
Router.post("/users", storeUser);
Router.get("/users/:id", getUserDetails);
Router.put("/users/:id", updateUser);
Router.delete("/users/:id", deleteUser);
Router.post("/login", login);
Router.get("/logout", logout);
Router.post("/logout", logout);

module.exports = Router;