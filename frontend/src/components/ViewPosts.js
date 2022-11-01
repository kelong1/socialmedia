import React from 'react'
import{deletePost,getOnePost} from "../features/posts/postSlice"
import{useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"



const ViewPosts = ({post}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const update=()=>{
    dispatch(getOnePost(post._id))
    navigate("/UpdatePost/:id")
  }
  return (
    <div className='postcard'>
        <div>
        {new Date(post.createdAt).toLocaleString("en-US")}
         </div>
         <img src={`/uploads/${post.postimage}`} alt="..." className='img' />
    <h3>{post.title}</h3>
    <h3>{post.caption}</h3>
    
    <button className='btn btn-block btn-danger' onClick={()=>dispatch(deletePost(post._id))}>Delete</button>
    <button className='btn btn-block btn-danger' onClick={update}>Update</button>
    </div>
  )
}

export default ViewPosts