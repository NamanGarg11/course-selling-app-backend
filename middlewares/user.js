const user = require("../models/user");
async function usermiddleware (req,res,next){
    username= req.headers.username;
    password= req.headers.password;
   const value = await user.findOne({
        username:username,
        password:password
    })
    if(value){
        next();
    }
    else{
        res.status(403).json({msg:"user not found"});
    }
}
module.exports= usermiddleware;