const mongoose = require("mongoose");

var SaleSchema = new mongoose.Schema({
    codeSale : String,
    saleName : String,
    startDate : Date,
    endDate : Date
});

var Sale = mongoose.model("Sale",SaleSchema,"sale");
module.exports = Sale;