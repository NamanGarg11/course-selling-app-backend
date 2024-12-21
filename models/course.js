const moongoose = require("moongoose");
const mongoose = require("moongoose");
const courseschema = new mongoose.Schema({
    course:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    imageLink :String,
    price:Number
});
const course = moongoose.model('course',courseschema);
module.exports= course;