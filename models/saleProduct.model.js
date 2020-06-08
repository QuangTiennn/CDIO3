var mongoose = require("mongoose");

var saleProductSchema = new mongoose.Schema({
    codeSale : String,
    codeProduct : String,
    percent : Number,
});

var saleProduct = mongoose.model("saleProduct",saleProductSchema,"saleproducts");
module.exports = saleProduct;