import React from 'react'
import {ReactComponent as ModifyIconWhite} from '../assets/icon-modify-white.svg'
const WriteButton = () => {
  return (
    <li>
      <a href='#' className='button'>
        <ModifyIconWhite />
        <span>write</span>
      </a>
    </li>
  )
}

export default WriteButton