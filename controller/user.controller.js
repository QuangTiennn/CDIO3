var User = require("../models/user.model");

module.exports.allUser = async (req,res) => {
    var users = await User.find();
    res.render("../views/layoutuser/index.pug",{
        users : users
    })
}



module.exports.getEditUser = async (req,res) => {
    try{
        var id = req.params.id;
        await User.findById(id).exec((err,data) => {
            res.render("../views/layoutuser/updateuser.pug",{
                users : data
            });
        });
    }catch(err){
        console.log(err);
    }
};

module.exports.postEditUser = async (req,res) => {
    try{
        var body = req.body;
        var id = req.params.id;
        await User.updateOne({_id : id}, {$set : body});
        res.redirect("/user/all-user");
    }catch(err){
        console.log(err);
    }
};

module.exports.deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        await User.deleteOne({_id : id});
        res.redirect("/user/all-user");
    } catch (error) {
        console.log(error);
    }
}