const mongoosedata=require("mongoose")

// const userSchema=mongoose.Schema({
//     category: String,
//     id:String,
//     type:String,
//     name:String,
//     model:String,
//     color:String,
//     image:String,
//     brand:String,
//     size:String,
//     sleeveLength:String,
//     product:String,
//     download_url:String,
//     material:String,
//     price:String,
//     specs:{
//       size:String,
//       type:String,
//       resolution:String,
//       smartFeatures:String,
//       origin:String,
//       features:String,
//       weight:String,
//      storage:String,
//       material:String,
//       color:String,
//       capacity:String,
//       washPrograms:String,
//       RAM:String,
//       camera:String,
//       energyRating:String,
//       display:String,
//       processor:String,
//       camera:String,
//       battery:String,
//       operatingSystem:String,
//       ROM:String,
//       graphics:String,
//       expandableMemory:String,
//     },
// });


const userSchema = mongoosedata.Schema({
    category: String,
    id: String,
    type: String,
    name: String,
    model: String,
    color: String,
    image: String,
    brand: String,
    size: String,
    sleeveLength: String,
    product: String,
    download_url: String,
    material: String,
    price: String,
    RAM: String,
    ROM: String,
    expandableMemory: String,
    display: String,
    processor: String,
    graphics: String,
    resolution: String,
      smartFeatures: String,
      origin: String,
      features: String,
      weight: String,
      storage: String,
      capacity: String,
      washPrograms: String,
      camera: String,
      energyRating: String,
      battery: String,
      operatingSystem: String, 
  });

//   const ketan=userSchema(
//     {

//     }
//   )



const Product=mongoosedata.model("ProductData",userSchema)
module.exports={Product}










