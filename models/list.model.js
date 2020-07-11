const mongoose = require("mongoose");

var listSchema = new mongoose.Schema({
    listName : String,
});

var List = mongoose.model("List", listSchema, "list");
module.exports = List;