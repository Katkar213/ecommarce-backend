const express=require("express");
const app=express();
const routes=require("./Routes/Routes")
const cors=require("cors")
app.use(cors())
app.use("/api",routes)

app.listen(4001,()=>{
    console.log("server running fine")
})