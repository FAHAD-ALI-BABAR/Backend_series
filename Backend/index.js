// const fs=require("fs")
// fs.unlink("./Copy/copy.txt", function (err){
//     if(err){
//         console.error(err); 
//     }
//     else{
//         console.log("succesfuulyy deleted");
        
//     }
// })
const http=require("http")
const data=http.createServer((req,res)=>{
res.end("hello world")
})
data.listen(5000)
