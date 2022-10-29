import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
import{UpdatePost} from "../features/posts/postSlice"
import { useParams } from 'react-router-dom';


const UpdateForm = () => {
 
    const [title,setTitle]=useState("")
    const [caption,setCaption]=useState("")
    const [file,setFileName]=useState("")
    
    
    const dispatch=useDispatch();
    let{id}=useParams()
    const{post,isError,isSuccess,message}=useSelector((state)=>state.posts)
    
     useEffect(()=>{
     if({...post}){
      setTitle(post.title)
      setCaption(post.caption)
      setFileName(post.postimage)
     }
      
       
      },[post,isError,isSuccess,message])

   const onChangeTitle=(e)=>{
    setTitle(e.target.value)
   }
   const onChangeCaption=(e)=>{
    setTitle(e.target.value)
   }
    const onChangeFile=(e)=>{
        setFileName(e.target.files[0])
    }

    const onSubmit=(e)=>{
        e.preventDefault()

        const formData=new FormData()
        formData.append("title",title)
        formData.append("caption",caption)
        formData.append("postimage",file)

        dispatch(UpdatePost(id,formData))
        setTitle("")
        setCaption("")
        setFileName("")
    }

     
  return (
    <section>
        <form action="" encType='multipart/form-data'className='form-control' onSubmit={onSubmit}>
            <h1>UpdatePost</h1>
            <input type="text" placeholder='add title' className='form-control' name='title' onChange={onChangeTitle} value={title ||""}/>
            <input type="text" placeholder='add caption'  className='form-control'name='caption' onChange={onChangeCaption} value={caption || ""}/>
            <input type="file" placeholder='add image' filename='postimage'  className='form-control' onChange={onChangeFile} value=""/>
            <button className='btn btn-block btn-danger'>UpdatePost</button>
        </form>
    </section>
  )
}

export default UpdateForm