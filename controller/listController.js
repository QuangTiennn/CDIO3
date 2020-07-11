const List = require("../models/list.model");
const { model } = require("mongoose");

module.exports.getAllList = async (req,res) =>{
    let allListUser = await List.find();
    res.render("../views/layoutmanagelist/index.pug",{
        lists : allListUser
    });
};

module.exports.getAddList = async (req,res)=>{
    res.render("../views/layoutmanagelist/addlist.pug");
}

module.exports.postAddList = async (req, res) =>{
    try {
        let body = req.body;
        await List.create(body);
        res.redirect("/manage-list")
    } catch (error) {
        console.log(error);       
    }
}

module.exports.getUpdateList = async (req,res)=> {
    try{
        var id = req.params.id;
        console.log(id,'[id]');
        
        await List.findById(id).exec((err,data)=>{
        res.render("../views/layoutmanagelist/updatemanagelist.pug",{
            lists : data
        });
    });
    }catch(err){
        console.log(err);
    }
};

module.exports.postUpdateList = async (req,res) => {
    try{
        var body = req.body;
        var id = req.params.id;
        await List.updateOne({_id : id}, {$set : body});
        res.redirect("/manage-list");
    }catch(err){
        console.log(err);
    }
};

module.exports.getDeleteList = async (req,res)=>{
    try {
        let id = req.params.id;
        await List.deleteOne({_id : id});
        res.redirect("/manage-list");
    } catch (error) {
        console.log(error);
    }
};