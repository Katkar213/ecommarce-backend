
const {global}=require("../components/DummyData")




const globalData=(req,res)=>{
    res.send(global);
    }

    
module.exports={ globalData};