const express=require("express");
const router=express.Router()
const PostModel=require("../models/PostModel")
const{getPost,deletePost}=require("../controllers/postControllers")

const multer=require("multer")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./frontend/public/uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})

router.get("/getPost",getPost);
router.post("/addPost",upload.single("postimage"),async(req,res,file)=>{
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
   
})

 router.delete('/:id',deletePost)
// router.put("/add",updatePost)

module.exports=router

