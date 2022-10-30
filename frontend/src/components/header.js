import React from 'react'
import{Link,useNavigate} from "react-router-dom"
import{useSelector,useDispatch} from "react-redux";
import{logout,reset} from "../features/auth/authSlice"



function Header(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const{user}=useSelector((state)=>state.auth)
    const onLogout=()=>{
        dispatch(logout())
        dispatch(reset())
        navigate("/Login")
    }
  return (
    <div className='header'>
        <div className='logo'>
            <h1>Social media</h1>
        </div>
        <div className='nav'>
            <ul>
                <li>
                    <Link to="/" className='li'>Home</Link>
                </li>
                <li>
                    <Link to="/AddPost" className='li'>AddPost</Link>
                </li>
                <li>
                    <Link to="/ViewPost" className='li'>ViewPosts</Link>
                </li>
                
                    {user?( 
                    <li>
                    <button className='btn btn-dark' onClick={onLogout}>Logout</button>
                     </li>):(<>
                     <li>
                     <Link to="/Login"className='li'>Login</Link>
                     </li>
                     <li>
                     <Link to="/Register"className='li'>Register</Link>
                     </li></>)}
               
                
               
                
              
            </ul>
        </div>
    </div>
  )
}

export default Header