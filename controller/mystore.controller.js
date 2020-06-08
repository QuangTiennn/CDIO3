var Product = require("../models/product.model");

module.exports.myStore = async (req,res) => {
    let products = await Product.find();
    res.render("../views/layoutmystore/mystore.pug",{
        products : products
    });
};

module.exports.viewProduct = async (req,res) => {
    try{
        let id = req.params.id;
        await Product.findById(id).exec((error, data) => {
            res.render("../views/layoutmystore/mystore.viewproduct.pug",{
                products : data
            });
        });
    }catch(error){
        console.log(error);
    }
};

module.exports.addProduct = (req,res) => {
    res.render("../views/layoutmystore/mystore.addproduct.pug");
};

module.exports.postAddProduct = async (req, res) => {
    try {
        let body = req.body;
        req.body.imageProduct = req.file.path.split('\\').slice(1).join('/');
        await Product.create(body); 
        res.redirect("/mystore/add-product");
    } catch (error) {
        // return   
    }
};

module.exports.deleteProduct = async (req, res) => {
    try{
        let id = req.params.id;
        await Product.deleteOne({_id : id});
        res.redirect("/mystore")
    }catch(error){
        console.log("error");
    }
};

module.exports.getEditProduct = async (req, res) => {
    try{
        var id = req.params.id;
        console.log(id);
        await Product.findById(id).exec((error,data) => {
            res.render("../views/layoutmystore/mystore.editproduct.pug",{
                products : data
            })
        });
    }catch(error){
        console.log(error);
    }
};

module.exports.postEditProduct = async (req, res) => {
    try{
        let body = req.body;
        let id = req.params.id;
        await Product.updateOne({_id : id},{$set : body});
        res.redirect("/mystore");
    }catch(error){
        console.log(error);
    }
};
    