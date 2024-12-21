const moongoose = require("moongoose");
const mongoose = require("moongoose");
const adminschema = new mongoose.Schema({
    username:String,
    password:String
})
const Admin = moongoose.model('Admin',adminschema);
module.exports= Admin;