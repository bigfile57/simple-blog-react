import React from 'react'
import Profile from '../../components/Profile'
import WriteButton from '../../components/WriteButton'
import ControlLoginButton from '../../components/ControlLoginButton'
const HeaderLoginSection = () => {
  return (
    <ul>
          <li className='profile-img'><Profile /></li>
          <WriteButton />
          <ControlLoginButton />
    </ul>
  )
}

export default HeaderLoginSection