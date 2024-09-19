const express=require("express")
const app=express();
const path=require("path")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")))
// app.get("/",function(req,res){
//     res.send("hello world")
// })
app.set("view engine","ejs");
app.get("/profile",function(req,res){
    res.render("index.ejs");
})
//dynamic routing 
app.get("/profile/:username", function (req,res){
    res.send(`welcome , ${req.params.username}`)
})
app.listen(3000,function(){
    console.log("its running");
    
})
// console.log(__dirname);
