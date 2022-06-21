import React from 'react'
import Profile from '../../../components/Profile'

function Main() {
  return (
    <main>
        <div className='max-width'>
            <aside className='about'>
                <h2>About Me</h2>
                <Profile className={"user-profile"}/>
                <p className='user-name'>Chilli</p>
                <p className='user-discription'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, velit odit
                </p>
                <h3>Categories</h3>
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
                <ul className='sns'>
                    <li><a href='#'></a></li>
                    <li><a href='#'></a></li>
                    <li><a href='#'></a></li>
                    <li><a href='#'></a></li>
                </ul>
            </aside>
        </div>
    </main>
  )
}

export default Main