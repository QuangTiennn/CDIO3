const express = require("express");
const userController = require("../controller/user.controller");
const multer = require("multer");
const upload =  multer({dest : "./public/uploads"});
const router = express.Router();

router.get("/all-user", userController.allUser);

router.get("/update-user/:id", userController.getEditUser);
router.post("/update-user/:id",upload.single("avatar"), userController.postEditUser);

router.get("/delete-user/:id", userController.deleteUser);

module.exports = router;