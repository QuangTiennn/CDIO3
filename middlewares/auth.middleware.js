var User = require("../models/user.model");

module.exports.requireAuth = (req,res,next) => {
    if(!req.signedCookies.userID){
        res.redirect("/user/login");
        return;
    }
    var user = User.find({_id : req.signedCookies.userID});
    // console.log(user);
    if(!user){
        res.redirect("/user/login");
        return;
    }
    res.locals.user = user;
    next();
}