require ("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const Product = require("./models/product.model");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session")
const port = 9999;

const router = require("./router/router.js");
const myStoreRouter = require("./router/mystore.router.js");
const authRouter = require("./router/authRouter.js");
const userRouter = require("./router/user.router");
const validateLogin = require("./middlewares/auth.middleware")

mongoose.connect(process.env.MONGO_URL);

app.use(morgan("tiny"));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(session());
app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/", router);
app.use("/mystore",validateLogin.requireAuth, myStoreRouter);
app.use("/user",authRouter);
app.use("/user",validateLogin.requireAuth,userRouter);


app.listen(port, ()=>{
    console.log("App is running with port " +port);
});
