import React from 'react'
import iconLogout from '../assets/icon-logout.svg'
const ControlLoginButton = () => {
  return (
    <li>
      <button className='button white'>
        {/* <ModifyIconWhite /> */}
        <img src={iconLogout} alt="로그아웃 버튼" />
        <span>Logout</span>
      </button>
    </li>
  )
}

export default ControlLoginButton