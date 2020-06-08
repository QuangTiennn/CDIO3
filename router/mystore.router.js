const express = require("express");
const mystoreController = require("../controller/mystore.controller");
const router = express.Router();

const multer = require("multer");
const upload = multer({dest: './public/uploads/'});

router.get("/", mystoreController.myStore);

router.get("/view-product/:id", mystoreController.viewProduct);

router.get("/delete-product/:id", mystoreController.deleteProduct);

router.get("/edit-product/:id", mystoreController.getEditProduct);
router.post("/edit-product/:id", upload.single('imageProduct'), mystoreController.postEditProduct);

router.get("/add-product", mystoreController.addProduct);
router.post("/add-product", upload.single('imageProduct'), mystoreController.postAddProduct);

module.exports = router;
