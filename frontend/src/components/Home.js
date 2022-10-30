import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{getPost} from "../features/posts/postSlice"
import ViewPosts from './ViewPosts'

const Home = () => {
    const dispatch=useDispatch()
    const{posts,isError,isSuccess,message}=useSelector((state)=>state.posts)
    useEffect(()=>{
        if(isError){
            console.log(message)
          }
            
          dispatch(getPost())
         

    },[posts,isError,isSuccess,message,dispatch])
  return (
    <section>
     
       <section className='PostList'>
          {posts.length> 0 ?(<div className='posts'>
            {posts.map((post)=>{
              return(
              <ViewPosts key={post._id} post={post}/>)
            })}
          </div>):(<h3>No posts uploaded yet</h3>)}
        </section>
    </section>
  )
}

export default Home