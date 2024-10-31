import React from 'react'

function Profile(props) {

    
  return (
    <div className={props.type}>Hello This Is {props.name} From Profile.jsx</div>
  )
}

export default Profile