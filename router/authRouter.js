const express = require("express");
const authController = require("../controller/authController.js");
const router = express.Router();

const multer = require("multer");
const upload = multer({dest: './public/uploads/'});

router.get("/login" , authController.login);
router.post("/login",authController.postLogin);

router.get("/register", authController.getRegister)
router.post("/register", upload.single("avatar"), authController.postRegister)
module.exports = router;


