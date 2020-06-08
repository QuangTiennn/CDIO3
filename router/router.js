const express = require("express");
const controller = require("../controller/controller.js");
const validateLogin = require("../middlewares/auth.middleware");

const router = express.Router();

router.get('/', controller.index);

router.get("/search",controller.searchProduct);

router.get("/cart", controller.indexCart);
router.get("/add-to-cart/:id",validateLogin.requireAuth, controller.addToCart);

module.exports = router;