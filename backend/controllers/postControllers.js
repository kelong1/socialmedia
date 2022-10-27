const PostModel=require("../models/PostModel")


const addPost=async(req,res)=>{
    const {title,caption}=req.body
    try {
        const post=await PostModel.create({
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
    const posts=await PostModel.find()

   res.status(200).json(posts)
}

const deletePost=async(req,res)=>{
    const post = await PostModel.findById(req.params.id)

    if (!post) {
      res.status(400)
      throw new Error('article not found')
    }
  
    await post.remove()
  
    res.status(200).json({id: req.params.id})
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