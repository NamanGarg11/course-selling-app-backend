const Admin = require("../models/admin");
async function adminMiddleware(req,res,next) {
    username=req.headers.username;
    password=req.headers.password;
    const value = await Admin.findOne({
        username:username,
        password:password
    })
    if(value){
        next();
    }
    else {
        res.status(403).json({msg:"admin not found"});
    }
}
module.exports= adminMiddleware;