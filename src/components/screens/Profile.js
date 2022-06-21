//Client/components/screen/Profile.js
import React from 'react'

function Profile() {
  return (
    <div style={{
      maxWidth: "550px",
      margin: "0px auto"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "18px 0px",
        borderBottom: "1px solid grey"
      }}>
        <div>
            <img style={{width:"160px", height: "160px", borderRadius:"80px"}}
            src="https://source.unsplash.com/random/1" alt="profile pic" />
        </div>
        <div>
          <h4>Profile Name</h4>
            <div style={{display:"flex",
              justifyContent:"space-between",
              width: "110%"
              }}>
              <h5>40 posts</h5>
              <h5>500 followers</h5>
              <h5>21 following</h5>
            </div>
        </div>
      </div>

      <div className='gallary'>
          <img className= "item" src="https://source.unsplash.com/random/11" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/12" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/13" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/14" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/15" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/16" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/17" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/18" alt="gallarypic" />
          <img className= "item" src="https://source.unsplash.com/random/19" alt="gallarypic" />    
      </div>
    </div>
  )
}

export default Profile