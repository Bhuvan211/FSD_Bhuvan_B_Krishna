//Importing Express
const express = require('express');

//Creating express app/Website
const app = express();

//Routing home page HTTP
// app.get('/',(req,res)=>{
//     res.send("<h1>Home Page<h1>")
// });

//Link to index.html file to express

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});



//Creating Server
app.listen(5000,()=>{
    console.log("http://localhost:5000/")
});