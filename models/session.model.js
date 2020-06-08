var mongoose = require("mongoose");

var sessionSchema = new mongoose.Schema({
    userName : String,
    productID : String,
    cart : {
        items : String,
        qty : Number,
        price : Number
    },
    totalQty : Number,
    totalPrice : Number
});

module.exports = mongoose.model("Session", sessionSchema);