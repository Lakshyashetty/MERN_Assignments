const userModel = require("../module/usermodule");
const bcryptjs = require("bcryptjs");
const regform=(req,res)=>{
    res.render("register");
}

const register=async(req,res)=>{
    try {
        const {uname,email,password}=req.body;
const hashPassword=await bcryptjs.hash(password,10);
await userModel.create({uname,email,password:hashPassword});

res.redirect("/login");
    } catch (error) {
        console.log(error);
       
    }
};
const logform=(req,res)=>{
    res.render("login");
}
const login=async(req,res)=>{
    try {
        const {uname,password}=req.body;
        const user=await userModel.findOne({uname});
        if (user && (await bcryptjs.compare(password,user.password))) {
            req.session.uname=uname;
            res.redirect("/dashboard");

        }
        else{
        res.redirect("/login");
        }
    } catch (error) {
        console.log(error);
        
    }
};
const dashboard=(req,res)=>{
    if (req.session.uname) {
        res.render("dashboard",{uname:req.session.uname});
    }else {
    res.redirect("/login");
  }
}
const logout=(req,res)=>{
    req.session.destroy(()=>{
        res.redirect("/login")
    })
}
module.exports = { regform, register, logform, login, dashboard, logout };