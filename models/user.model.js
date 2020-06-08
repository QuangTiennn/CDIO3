const mongoose = require("mongoose");

var userSChema = new mongoose.Schema({
    userName : String,
    password : String,
    rank : Number,
    address : String,
    numberPhone : Number,
    Email : String,
    avatar : String,
    idCard : String
});

var User = mongoose.model("User", userSChema, "users");
module.exports = User;