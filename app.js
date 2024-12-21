const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db/db');
adminroutes.connectDB();
userroutes.connectDB(); 
const adminroutes = require('./routes/admin');
const userroutes = require('./routes/user');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello");
})
app.use('/admin',adminroutes);
app.use('/user',userroutes);
module.exports= app;