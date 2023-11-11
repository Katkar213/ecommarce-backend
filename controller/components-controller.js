
const {laptop,dellLaptops,hpLaptops,lenovoLaptops,fashion, grocery,accessoriesData1,electronics,mobiles,
    iPhoneMobiles,miMobiles,womensFashionWear,mensFashionWear,global}=require("../components/DummyData")


const laptopsData=(req,res)=>{
res.send(laptop);
}

const globalData=(req,res)=>{
    res.send(global);
    }

const dellLaptopsData=(req,res)=>{
res.send(dellLaptops)
}

const hpLaptopsData=(req,res)=>{
    res.send(hpLaptops)
}

const lenovoLaptopsData=(req,res)=>{
    res.send(lenovoLaptops)
}

const fashionData=(req,res)=>{
    res.send(fashion)
}

const groceryData=(req,res)=>{
    res.send(grocery)
}

const accessoriesData=(req,res)=>{
    res.send(accessoriesData1) 
}

const electronicsData=(req,res)=>{
    res.send(electronics);
    }

    const mobilesData=(req,res)=>{
        res.send(mobiles);
        }

     const miMobilesData=(req,res)=>{
         res.send(miMobiles);
         }

    const iphoneMobilesData=(req,res)=>{
            res.send(iPhoneMobiles);
            }

         const mensfashionwearData=(req,res)=>{
             res.send(mensFashionWear);
            }
    
        const womensfashionwearData=(req,res)=>{
                res.send(womensFashionWear);
            }
    
    
module.exports={laptopsData,dellLaptopsData,hpLaptopsData,lenovoLaptopsData,fashionData,groceryData,accessoriesData,electronicsData,mobilesData,
    miMobilesData,iphoneMobilesData,mensfashionwearData,womensfashionwearData, globalData};