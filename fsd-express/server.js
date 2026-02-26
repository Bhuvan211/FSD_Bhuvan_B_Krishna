//Importing Express
const express = require('express');

//Creating express app/Website
const app = express();

//Routing home page HTTP
app.get('/',(req,res)=>{
    res.send("Hello Boss Welcome Back")
});



//Creating Server
app.listen(5000,()=>{
    console.log("http://localhost:5000/")
});