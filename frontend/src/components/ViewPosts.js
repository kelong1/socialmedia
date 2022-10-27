import React from 'react'
import{deletePost} from "../features/posts/postSlice"
import{useDispatch} from "react-redux"


const ViewPosts = ({post}) => {
  const dispatch=useDispatch()
  return (
    <div>
        <div>
        {new Date(post.createdAt).toLocaleString("en-US")}
         </div>
         <img src={`/uploads/${post.postimage}`} alt="..." />
    <h3>{post.title}</h3>
    <h3>{post.caption}</h3>
    
    <button className='btn btn-block' onClick={()=>dispatch(deletePost(post._id))}>Delete</button>
    </div>
  )
}

export default ViewPosts