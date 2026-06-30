const mongoose=require("mongoose");
const { timeStamp } = require("node:console");
const { type } = require("node:os");
const userSchema=mongoose.Schema({
    uname:{
        type:String,
        required:true,
        unique:true
    },
   email:{
        type:String,    
        required:true,

    },
    password:{
type:String,
required:true,
    }
  
},{timeStamps:true}
);
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;