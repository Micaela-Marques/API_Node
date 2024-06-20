const { Router } = require("express");

const usersRoutes = require("./user.routes");
const moviesRoutes = require("./movie.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/movies", moviesRoutes);

module.exports = routes; 