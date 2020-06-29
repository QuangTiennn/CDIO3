var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    nameProduct : {
        type :String,
        trim : true,
        required : true
    },
    priceProduct : {
        type :Number,
        trim : true,
        required : true
    },
    describeProduct : String,
    imageProduct : String,
    amountProduct : Number,
    statusProduct : String
});

var Product = mongoose.model("Product",productSchema,"products");
module.exports = Product;