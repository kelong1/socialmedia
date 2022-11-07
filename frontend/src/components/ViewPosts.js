import React from 'react'
import{deletePost,getOnePost} from "../features/posts/postSlice"
import{useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {MdDelete} from "react-icons/md"
import{AiFillEdit} from "react-icons/ai"



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
    
  <MdDelete  size="2em" style={{color:"red"}}onClick={()=>dispatch(deletePost(post._id))}/>
  <AiFillEdit size="2em" style={{float:"right",color:"green"}} onClick={update}/>
    </div>
  )
}

export default ViewPosts