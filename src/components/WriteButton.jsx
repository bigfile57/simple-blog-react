import React from 'react'
// import {ReactComponent as ModifyIconWhite} from '../assets/icon-modify-white.svg'
//svg react component 사용방법
import ModifyIconWhite from '../assets/icon-modify-white.svg'
const WriteButton = () => {
  return (
    <li>
      <a href='./' className='button'>
        {/* <ModifyIconWhite /> */}
        <img src={ModifyIconWhite} alt="Write 버튼" />
        <span>write</span>
      </a>
    </li>
  )
}

export default WriteButton