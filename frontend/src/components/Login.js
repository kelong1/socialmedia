import React from 'react'
import { useState,useEffect } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {toast}from "react-toastify"
import{login,reset} from "../features/auth/authSlice"


const Login = () => {
  const [formData,setFormData]=useState({
    email:"",
    password:"",
  })
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user,isError,isSuccess,message}=useSelector((state)=>state.auth)
  useEffect(()=>{
    if(isError){
      toast.error("message")
    }
    if(isSuccess||user){
      navigate("/")
    }
    dispatch(reset())
  },[user,isError,isSuccess,message,navigate,dispatch])

  const {email,password}=formData
  const onChange=(e)=>{
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    const userData={
      email,
      password
    }
    dispatch(login(userData))
  }
  
  return (
    <div className='loginFormdiv'>
        <form className="loginForm form-control" onSubmit={onSubmit}>
            <h2>Login Form</h2>
            
            <input type="email" id="email" name="email" value={email}placeholder='Enter your email'  className='form-control' onChange={onChange}/>
            <input type="password" id="password" name="password" value={password}placeholder='Enter your password' className='form-control'onChange={onChange}/>
            
            <button className='btn btn-block btn-danger'>Login</button>
            <p>Dont  have an account <Link to="/Register">Register here</Link></p>
        </form>
    </div>
  )
}

export default Login