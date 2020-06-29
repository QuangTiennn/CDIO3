const User = require('../models/user.model');

module.exports.login = (req,res) => {
    res.render("../views/layoutauth/login.pug");
};

module.exports.postLogin = async (req, res) => {
    var userName = req.body.userName;
    var password = req.body.password;
    var user = await User.findOne({userName:userName}); 
    if(!user){
        res.render("../views/layoutauth/login.pug",{
            errors : [
                "Tài Khoản Không Đúng"
            ],
            values: req.body          
        });
        return;
    }
    if(user.password !== password){
        res.render("../views/layoutauth/login.pug",{
            errors :[
                "Mật Khẩu Không Đúng"
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userID', user._id,{
        signed : true
    });
    res.redirect("/");
}

module.exports.getRegister = (req,res) => {
    res.render("../views/layoutauth/register.pug");
}

module.exports.postRegister = async (req,res)=> {
    const body = req.body;
    req.body.avatar = req.file.path.split('\\').slice(1).join('/');
    await User.create(body);
    res.redirect("/");
}

module.exports.getGorgotPassword = (req, res)  => {
    res.render("../views/layoutauth/forgotPassword.pug");
};