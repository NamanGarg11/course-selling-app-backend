const express = require("express")
const router = express.Router();
const usermiddleware = require("../middlewares/user");
const coures = require("../models/course");
const user = require("../models/user");
router.post('signup',(req,res)=>{
    username:req.body.username;
    password:req.body.password;
    email:req.body.email;
    user.create({
        username,
        password,
        email
    })
    res.json({
        msg:"user created successfully"
    })
})
router.get('courses',usermiddleware,async(req,res)=>{
    const response = await user.findOne({});
    res.send ({
        response
    })

})
router.get('courses/:courseId',usermiddleware,async(req,res)=>{
   const username = req.headers.username;
   const courseId = req.params.courseId;
     user.findOne({
        username,
     },
    {
        "$push":{
            purchasedcourses:courseId
        }
    })
    res.json({
        msg:"course purchased successfully"
    })  

})
router.get('/purchasedCourses',usermiddleware,async(req,res)=>{
    const user = await user.findOne({
        username:req.headers.username
    })
    const courses = await course.find({
        "_id":{
            "$in":user.purchasedcourses
        }
    })
    res.json({
        courses
    })
})
