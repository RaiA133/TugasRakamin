const express = require("express");
const router = express.Router();
const Controller = require("../controllers");

router.get("/movies", Controller.movies);
router.get("/movies/:id", Controller.moviesById);

module.exports = router;