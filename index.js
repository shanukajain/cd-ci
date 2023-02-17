const app=require("express")();

app.get("/",(req,res)=>{
    res.send("done")
})

app.listen(8000,()=>{
    console.log("8000");
})