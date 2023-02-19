const app=require("express")();

app.get("/",(req,res)=>{
    // value=10;
    res.send("done")    
})

app.listen(8000,()=>{
    console.log("8000");
})