import React from 'react'
import Logo from '../../assets/Logo.svg'
const HeaderIcon = () => {
  return (
    <h1>
      <a href='./'>
        <img src={Logo} alt='My Blog' />
      </a>
    </h1>
  )
}

export default HeaderIcon