import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper blue">
      <Link to="/" className="brand-logo left">InstaBook</Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/signin">SingIn</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/post">Post</Link></li>
      </ul>
    </div>
  </nav>
        
  )
}

export default Navbar
