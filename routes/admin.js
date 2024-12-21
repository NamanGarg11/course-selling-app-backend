const express = require("express");
const admin = require("../models/admin")
const course = require("../models/course");
const router = express.Router();
const adminMiddleware = require("../middlewares/admin")
router.post('/singup',(req,res)=>{
    username:req.body.username;
    password:req.body.password;
     
    admin.create({
        username,
        password
    })
    res.json({
        msg:"Admin created successfully"
    })
})
router.post('courses',adminMiddleware,async(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
  
    const newCourse = await course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course created successfully', courseid:newCourse._id
    })
})

router.get('courses',adminMiddleware,async(req,res)=>{
    const response = await course.findOne({});
    res.json({
        courses: response
    })
})
module.exports= router;