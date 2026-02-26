//Importing Express
const express = require('express');

//Creating express app/Website
const app = express();

//Routing home page HTTP
app.get('/About',(req,res)=>{
    res.send("This is About Page")
});
app.get('/rapido-ads',(req,res)=>{
    res.send("This is rapido-ads Page")
});
app.get('/Safety',(req,res)=>{
    res.send("This is Safety Page")
});
app.get('/Blog',(req,res)=>{
    res.send("This is Blog Page")
});
app.get('/Contact',(req,res)=>{
    res.send("This is Contact Page")
});



//Creating Server
app.listen(5000,()=>{
    console.log("http://localhost:5000/")
});