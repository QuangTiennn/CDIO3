var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    nameProduct : String,
    priceProduct : Number,
    describeProduct : String,
    imageProduct : String,
    amountProduct : Number,
    statusProduct : String
});

var Product = mongoose.model("Product",productSchema,"products");
module.exports = Product;