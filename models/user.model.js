const mongoose = require("mongoose");

var userSChema = new mongoose.Schema({
    userName : {
        type : String,
        unique : true,
        trim : true,
        required : true
    },
    password : {
        type : String,
        unique : true,
        trim : true,
        required : true
    },
    rank : Number,
    address : String,
    numberPhone : {
        type : String,
        required : true,
    },
    Email : {
        type : String,
        unique : true,
        trim : true,
        required : true
    },
    avatar : String,
    idCard : String
});

var User = mongoose.model("User", userSChema, "users");
module.exports = User;