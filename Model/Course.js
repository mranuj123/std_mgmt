const mongoose=require('mongoose')
const courseSchema=new mongoose.Schema({
    Course_imagae:{
        type:String,
        required:true,
    },
    Course_name:{
        type:String,
        required:true,
    },
    Course_categoryId:{
        type:String,
        required:true,
    },
    Course_price:{
        type:String,
        required:true,
    },
    Course_syallabus:[
        {
        title:{
            type:String,
            require:true,
        },

        des:{
            type:String,
            require:false,
        }
        }
    ],
    Course_duration:{
        type:String,
        require:false,

    }
        
},{timestamps:true})
module.exports=mongoose.model('Course',courseSchema)