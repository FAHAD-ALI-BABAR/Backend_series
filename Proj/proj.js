const express=require("express")
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")))
app.get("/",function(req,res){
    console.log("hellooooooooooooooooooooooooooooooo");
    res.send("helloooooooooooooooooooooooooooooo")
    
})
app.listen(3000)