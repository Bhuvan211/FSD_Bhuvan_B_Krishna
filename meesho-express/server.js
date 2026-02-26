//Importing Express
const express = require('express');

//Creating express app/Website
const app = express();

//Routing home page HTTP
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
});

app.use(express.static("public") )



//Creating Server
app.listen(4000,()=>{
    console.log("http://localhost:4000/")
});