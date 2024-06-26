const { Router } = require("express");

const MoviesController = require("../controllers/moviesController");

const moviesRoutes = Router();

const moviesController = new MoviesController();

moviesRoutes.post("/:user_id", moviesController.create);
moviesRoutes.get("/:id", moviesController.show);
moviesRoutes.delete("/:id", moviesController.delete);


module.exports = moviesRoutes;