import React from 'react'

function Signin() {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Instabook</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button className="btn waves-effect waves-light" type="submit" name="action">SIGN IN</button>


      </div>
    </div>
  )
}

export default Signin
