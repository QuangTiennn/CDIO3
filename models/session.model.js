var mongoose = require("mongoose");

var sessionSchema = new mongoose.Schema({
    // cart : {
    //     items : String,
    //     qty : Number,
    //     price : Number
    // },
    cart: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        totalQty: {
            type: Number,
            default: 1,
        },
    }]
});

module.exports = mongoose.model("Session", sessionSchema);