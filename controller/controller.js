var Product = require("../models/product.model");
var Session = require("../models/session.model");
var User = require("../models/user.model");
const { model } = require("mongoose");

module.exports.index = async (req, res) => {
  let products = await Product.find();
  res.render("../views/index.pug", {
    title: "CDIO3",
    products: products,
  });
};

module.exports.searchProduct = async (req, res) => {
  let q = req.query.q;
  if (q) {
    var matchedValues = await Product.find({ nameProduct: q });
  }
  res.render("../views/search.pug", {
    products: matchedValues,
  });
};

module.exports.indexCart = async (req, res) => {
  const session = await Session.findById(req.signedCookies.sessionId).populate('cart.product');
  //console.log(session.cart)
  res.render("../views/cart/cart.pug", {
    title : "Giỏ Hàng",
    cart: session.cart
  });
};

module.exports.addToCart = async (req, res, next) => {
  const productId = req.params.id;
  const session = await Session.findById(req.signedCookies.sessionId);
  var existingProduct = session.cart.find(function (item) {
    return item.product.toString() === productId;
  });
  
  console.log((await Session.findOne().populate("cart.product").lean()).cart);
  
  if (existingProduct) {
    existingProduct.totalQty += 1;
  } else {
    session.cart.push({
      product: productId,
      totalQty: 1,
    });
  }
  //console.log(existingProduct,'[existingProduct]');
  await session.save();
  return res.redirect("back");
};

module.exports.reduce = (req, res, next) => {
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	cart.reduceByOne(productId);
	req.session.cart = cart;
	console.log(req.session.cart);
	req.
	res.redirect('/cart');
}

module.exports.remove = (req, res, next) => {
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	cart.removeAll(productId);
	req.session.cart = cart;
	res.redirect('/shopping-cart');
}

module.exports.cart = (req, res, next) => {
	if (!req.session.cart) {
		return res.render('../views/cart/cart.pug', { products: null });
	}
	var cart = new Cart(req.session.cart);
	res.render('../views/cart/cart.pug', { products: cart.generateArray(), totalPrice: cart.totalPrice });
}


module.exports.cartDelete = async (req,res) => {
  try{
    const productId = req.params.id;
    console.log(productId,'[productId]');
    const session = await Session.findById(req.signedCookies.sessionId);
    // console.log(session.cart,'[session.cart]')
    var existingProduct = session.cart.find(function(item){
      return item.product.toString() === productId;
    });
    console.log((await Session.findOne().populate("cart.product").lean()).cart);
    console.log(existingProduct.product,'[existingProduct]');
    if(existingProduct.totalQty > 0){
      existingProduct.totalQty -= 1;
    }
    if(existingProduct.totalQty == 0){
      session.cart.pop({
        product : productId
      })
    }
    await session.save();
    res.redirect("/cart")
  }catch(err){
    console.log(err,'[err]');
  }
};