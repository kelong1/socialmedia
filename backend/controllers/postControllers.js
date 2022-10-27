const postModel=require("../models/PostModel")


const addPost=async(req,res)=>{
    const {title,caption}=req.body
    try {
        const post=await postModel.create({
            title,
            caption,
            postimage:req.file.originalname
    
        })
        if(post){
            res.status(200).json(post)
                
            
        }else{
            res.status(400)
            throw new Error("Something went wrong")
        }
    } catch (error) {
        console.error(error)
        
    }
   
}
const getPost=async(req,res)=>{
    PostModel.find()

}
const deletePost=async(id)=>{
    PostModel.findByIdAndDelete()
}
const updatePost=async(id)=>{
    PostModel.findByIdAndUpdate()
}

module.exports={
    addPost,
    getPost,
    deletePost,
    updatePost
}