const express=require("express");
const router=express.Router();
const{RegisterUser,loginUser,getMe}=require("../Controllers/userControllers")
const{protect}=require("../middlewares/authMiddleware")


router.post("/register",RegisterUser)
router.post("/login",loginUser)
router.get("/me",protect,getMe)

module.exports=router;
