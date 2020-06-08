var Product = require("../models/product.model");
// var Session = require("express-session");
var Cart = require("../middlewares/cart");
var Session = require("../models/session.model");

module.exports.index = async (req, res) => {
    let products = await Product.find();
    res.render("../views/index.pug",{
        products : products
    });
};

module.exports.searchProduct = async (req, res) => {
    let q = req.query.q;
    if(q){
        var matchedValues = await Product.find({nameProduct : q});
    }
    res.render("../views/search.pug", {
        products : matchedValues
    });
};

module.exports.indexCart = async (req, res) => {
    let productShoppingCart = await Product.find();
    res.render("../views/cart/cart.pug",{
        products : productShoppingCart
    });
}

module.exports.addToCart = (req, res, next) => {
	var productId = req.params.id;
	// var cart = new Cart(req.session.cart ? req.session.cart : {});
	 var cart = new Cart(req.session.cart || {});
	Product.findById(productId, function (err, product) {
		cart.add(product, product.id);
		req.session.cart = cart;
        console.log(cart);
        console.log(req.signedCookie);
		res.redirect('/cart');
	});
}

// module.exports.reduce = (req, res, next) => {
// 	var productId = req.params.id;
// 	var cart = new Cart(req.session.cart ? req.session.cart : {});
// 	cart.reduceByOne(productId);
// 	req.session.cart = cart;
// 	console.log(req.session.cart);
// 	req.
// 	res.redirect('/cart');
// }

// module.exports.remove = (req, res, next) => {
// 	var productId = req.params.id;
// 	var cart = new Cart(req.session.cart ? req.session.cart : {});
// 	cart.removeAll(productId);
// 	req.session.cart = cart;
// 	res.redirect('/shopping-cart');
// }

// module.exports.cart = (req, res, next) => {
// 	if (!req.session.cart) {
// 		return res.render('../views/cart/cart.pug', { products: null });
// 	}
// 	var cart = new Cart(req.session.cart);
// 	res.render('../views/cart/cart.pug', { products: cart.generateArray(), totalPrice: cart.totalPrice });
// }


