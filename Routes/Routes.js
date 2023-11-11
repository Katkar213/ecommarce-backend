const {laptopsData,dellLaptopsData,hpLaptopsData,lenovoLaptopsData,fashionData,groceryData,accessoriesData,electronicsData,mobilesData,
    miMobilesData,iphoneMobilesData,mensfashionwearData,womensfashionwearData,globalData}=require("../controller/components-controller")

const routes=require("express").Router()

routes.get("/laptop",laptopsData)
routes.get("/laptop/dell",dellLaptopsData)
routes.get("/laptop/hp",hpLaptopsData)
routes.get("/laptop/lenovo",lenovoLaptopsData)
routes.get("/fashion",fashionData)
routes.get("/grocery",groceryData)
routes.get("/accessories",accessoriesData)
routes.get("/electronics",electronicsData)
routes.get("/mobiles",mobilesData)
routes.get("/mimobiles",miMobilesData)
routes.get("/iphonemobiles",iphoneMobilesData)
routes.get("/fashion/women",womensfashionwearData)
routes.get("/fashion/mens",mensfashionwearData)

routes.get("/global",globalData)

module.exports=routes;