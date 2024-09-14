// const fs=require("fs")
// fs.unlink("./Copy/copy.txt", function (err){
//     if(err){
//         console.error(err); 
//     }
//     else{
//         console.log("succesfuulyy deleted");
        
//     }
// })
// const http=require("http")
// const data=http.createServer((req,res)=>{
// res.end("hello world")
// })
// data.listen(5000)
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(function(req,res,next){// this is middleware
//     console.log("middleware executed");
//     next();//after executing middleware the next command will forward the request to routes
    
// })

app.get('/', function (req, res) {
  res.send("helloooo fahad")
})
app.get("/profile", function(req,res){
res.send("i am 21 years o")
})

app.listen(3000)
