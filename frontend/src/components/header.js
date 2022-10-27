import React from 'react'
import{Link} from "react-router-dom"


function Header(){
    
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
              
               
                
              
            </ul>
        </div>
    </div>
  )
}

export default Header