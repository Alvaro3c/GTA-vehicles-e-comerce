const express = require("express");
const usersApiControllers = require("../controllers/usersApiControllers");
const usersApiRouter = express.Router();

usersApiRouter.post("/register", usersApiControllers.register);
usersApiRouter.post("/login", usersApiControllers.login);

module.exports = usersApiRouter;
