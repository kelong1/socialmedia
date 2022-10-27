import axios from "axios"

const API="http://localhost:9000/app/posts/"


const addPost=async(formData)=>{

   
    const response=await axios.post(API+"addpost",formData)

    if(response.data){
        localStorage.setItem('blog',JSON.stringify(response.data))
    }

    return response.data
}


export  const postService={
    addPost
}
export default postService