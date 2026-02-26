//Importing Express
const express = require('express');

//Creating express app/Website
const app = express();

//Routing home page HTTP
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/zomato.html")
});

app.use(express.static("public") )



//Creating Server
app.listen(3000,()=>{
    console.log("http://localhost:3000/")
});