const express = require("express");
const router = express.Router();

const homeRouter = require("./home");
const moviesRouter = require("./movies");
const usersRouter = require("./users");
const uploadRouter = require("./upload");

router.use("/", homeRouter);
router.use("/", moviesRouter);
router.use("/", usersRouter);
router.use("/", uploadRouter);

module.exports = router;