const express = require("express");

const Router = express.Router();

const { storeTag,
    getTags,
    getTagDetails,
    updateTag,
    deleteTag
} = require('../controller/tagController');

Router.get("/tags", getTags);
Router.post("/tags", storeTag);
Router.get("/tags/:id", getTagDetails);
Router.put("/tags/:id", updateTag);
Router.delete("/tags/:id", deleteTag);

module.exports = Router;