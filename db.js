const mongoose=require("mongoose");
const ConnectDb=()=>{
    mongoose.connect("mongodb://localhost:27017/mvc_session")
    .then(() => {
        console.log("Connected...");
        
    }).catch((err) => {
        console.log(err);
        
    });
}
module.exports={ConnectDb}