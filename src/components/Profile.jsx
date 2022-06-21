import React from 'react'
import profile from '../images/profile.jpg'
const Profile = ({className}) => {
  return (
      <a href='./'>
        <img src={profile} alt="My Page" className={className}/>
      </a>
  )
}

export default Profile