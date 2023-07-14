const express = require("express");
const route = express.Router();
const { create, getall, getOne, update, deleteItem } = require("../controller/index");

route.post("/create", create);
route.get("/getall", getall);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteItem);


module.exports = route;