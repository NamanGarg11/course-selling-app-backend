const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:[10,"minimum length should be of 10"]
    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
        minlength:[10,]
    }
})
const user = mongoose.model('User',userSchema);
module.exports = user;