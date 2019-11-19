const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router
  .route("/")
  .get(userController.getAllTasks)
  .post(userController.createTask);
