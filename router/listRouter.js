const express = require("express");
const router = express.Router();
const listController = require("../controller/listController");
const validateLogin = require("../middlewares/auth.middleware");


router.get("/manage-list", validateLogin.requireAuth,listController.getAllList);

router.get("/add-list", listController.getAddList);
router.post("/add-list", listController.postAddList);

router.get("/update-manage-list/:id",listController.getUpdateList);
router.post("/update-manage-list/:id", listController.postUpdateList);

router.get("/delete-manage-list/:id",listController.getDeleteList);

module.exports = router;