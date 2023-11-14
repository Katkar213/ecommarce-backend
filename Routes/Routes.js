const {globalData}=require("../controller/components-controller")
const {adddata,finddata}=require("../controller/servercontroller")

const routes=require("express").Router()



routes.get("/global",globalData)

routes.post("/adddata",adddata)
routes.get("/finddata",finddata)

module.exports=routes;