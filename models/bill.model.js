var mongoose = require("mongoose");

var billSchema = new mongoose.Schema({
    codeBill : String,
    createDate : Date,
    creatorBill : String
});

var Bill = mongoose.model("Bill",billSchema,"bills");
module.exports = Bill;