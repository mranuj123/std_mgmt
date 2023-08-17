const mongoose=require('mongoose')
const categorySchema=new mongoose.Schema({
    Category_name:{
        type:String,
        required:true,
    },
    Category_des:{
        type:String,
      
        
    },
        
},{timestamps:true})
module.exports=mongoose.model('Category',categorySchema)