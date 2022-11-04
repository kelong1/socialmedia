import axios from "axios"

const API="http://localhost:9500/app/posts/"


const addPost=async(formData)=>{

   
    const response=await axios.post(API+"addpost",formData)

    if(response.data){
        localStorage.setItem('post',JSON.stringify(response.data))
    }

    return response.data
}

const getPost=async()=>{
    const response=await axios.get(API+"getPost")

    return response.data
}
const getOnePost=async(id)=>{
    const response=await axios.get(API+id)
    
    return response.data
}
const deletePost=async(id)=>{
    
    const response=await axios.delete(API+id)

    return response.data
}
const UpdatePost=async(id,formData)=>{

   
    const response=await axios.put(API+id,formData)

    if(response.data){
        localStorage.setItem('post',JSON.stringify(response.data))
    }

    return response.data
}



export  const postService={
    addPost,
    getPost,
    getOnePost,
    deletePost,
    UpdatePost
}
export default postService