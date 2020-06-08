var mongoose = require("mongoose");

var detailBillSchema = new mongoose.Schema({
    codeBill : String,
    codeProduct : String,
    amountInBill : Number 
});

var detailBill = mongoose.model("detailBill",detailBillSchema,"detailbills");
module.exports = detailBill;