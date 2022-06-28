import React from 'react'
import Profile from '../../../../components/Profile'
function Aside() {
  return (
    <aside className='about'>
        <h2>About Me</h2>
        <Profile className={"user-profile"}/>
        {/* 소개 분리 ? 해야하나 */}
        <p className='user-name'>Chilli</p>
        <p className='user-description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, velit odit
        </p>
        <h3>Categories</h3>
        {/* 카테고리 컴포넌트 분리 */}
        <ul className='categories'>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
        </ul>
        <h3>Follow</h3>
        {/* 팔로우 컴포넌트 */}
        <ul className='sns'>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
        </ul>
    </aside>
  )
}

export default Aside