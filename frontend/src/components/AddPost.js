import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
import{reset,addPost} from "../features/posts/postSlice"

const AddPost = () => {
    const [formData,setFormData]=useState({
        title:"",
        caption:"",
    })
    const [file,setFileName]=useState("")
    const{title,caption}=formData
    
    const dispatch=useDispatch();
    const{posts,isError,isSuccess,message}=useSelector((state)=>state.posts)
    useEffect(()=>{
       
        if(isError){
          console.log("message")
        }
        if(isSuccess||posts){
            console.log("its cool")
        }
        dispatch(reset())
      },[posts,isError,isSuccess,message,dispatch])

      const onChange=(e)=>{
        setFormData((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value
        }))
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

        dispatch(addPost(formData))
        setFormData("")
        setFileName("")
    }

     
  return (
    <section className='addpost_section'>
        <form action="" encType='multipart/form-data'className='form-control addPost' onSubmit={onSubmit}>
            <h1>AddPost</h1>
            <input type="text" placeholder='add title' className='form-control' name='title' onChange={onChange}/>
            <input type="text" placeholder='add caption'  className='form-control'name='caption' onChange={onChange}/>
            <input type="file" placeholder='add image' name='postimage'  className='form-control' onChange={onChangeFile}/>
            <button className='btn btn-block btn-danger'>AddPost</button>
        </form>
    </section>
  )
}

export default AddPost