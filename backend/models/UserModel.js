const mongoose=require("mongoose")

const Schema=mongoose.Schema

const usermediaModel=new Schema({
    name:{
        type:String,
        required:[true,"Please add the name Field"]
    },
    email:{
        type:String,
        required:[true,"Please add the email Field"]
    },
    password:{
        type:String,
        required:[true,"Please add the password Field"]
    }
    
},{
    timestamps:true
})

module.exports=mongoose.model("mediauser",usermediaModel)