import React from 'react'
import HeaderIcon from './HeaderIcon'
import HeaderLoginSection from './HeaderLoginSection'
import '../../css/header.css'
const Header = () => {
  return (
    <header>
        <div className='max-width'>
            <HeaderIcon />
            <HeaderLoginSection />
        </div>
    </header>
  )
}

export default Header