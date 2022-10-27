const mongoose=require("mongoose")

const Schema=mongoose.Schema

const postModel=new Schema({
    title:{
        type:String,
        required:[true,"please add title"]
    },
    caption:{
        type:String,
        required:[true,"please add caption"]
    },
    postimage:{
        type:String,
        required:[true,"please add postimage"]
    },
    
},{
    timestamps:true
})

module.exports=mongoose.model("posts",postModel)