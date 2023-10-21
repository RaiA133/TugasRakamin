const express = require("express");
const router = express.Router();
const path = require('path')
const Controller = require("../controllers");

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './storage/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

router.get("/upload", Controller.upload);
router.post("/upload", upload.single('file'), Controller.uploadBerhasil);

module.exports = router;