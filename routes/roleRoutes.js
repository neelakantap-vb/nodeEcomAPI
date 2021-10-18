const express = require("express");

const Router = express.Router();

const { storeRole,
    getRoles,
    getRoleDetails,
    updateRole,
    deleteRole
} = require('../controller/roleController');

Router.get("/roles", getRoles);
Router.post("/roles", storeRole);
Router.get("/roles/:id", getRoleDetails);
Router.put("/roles/:id", updateRole);
Router.delete("/roles/:id", deleteRole);

module.exports = Router;