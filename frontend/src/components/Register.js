import React from 'react'
import { useState,useEffect } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {toast}from "react-toastify"
import{register,reset} from"../features/auth/authSlice"



function Register(){
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    password2:""
  })
  const {name,email,password,password2}=formData
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user,isError,isSuccess,message}=useSelector((state)=>state.auth)
  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate("/Login")
    }
    dispatch(reset())
  },[user,isError,isSuccess,message,navigate,dispatch])

  
  const onChange=(e)=>{
      setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    if(password!==password2){
      console.error("passwords dont match")
    }else{
    const userData={
      name,
      email,
      password
    }
    dispatch(register(userData))
  }
  }
  

  return (
    <div className='registerFormDiv'>
        <form className="registerForm form-control" onSubmit={onSubmit}>
            <h2>Register Form</h2>
            <input type="text" id="name" name="name" value={name} placeholder='Enter your name'className='form-control' onChange={onChange}/>
            <input type="email"id="email" name="email" value={email} placeholder='Enter your email' className='form-control' onChange={onChange}/>
            <input type="password" id="password" name="password" value={password} placeholder='Enter your password'className='form-control' onChange={onChange}/>
            <input type="password" id="password2" name="password2" value={password2} placeholder='Confirm your password' className='form-control' onChange={onChange}/>
            <button className='btn btn-block btn-danger' type='submit'>Register</button>
            <p>Already have an account <Link to="/Login">Login here</Link></p>
        </form>
    </div>
  )
}

export default Register