const express=require("express");

const app=express();

const connection=require("./config/db")

const routes=require("./Routes/Routes")
const cors=require("cors")

app.use(cors())

app.use("/api",routes)

app.listen(4001,()=>{
    try{
    connection();
    console.log("server running fine");
    }
    catch(err){
      console.log(err)
    }
})