const Express = require("express");
const { register, login } = require("../controllers/userController");

const userRoute = Express.Router();

userRoute.post("/register", register);

userRoute.post("/login", login);

module.exports = userRoute