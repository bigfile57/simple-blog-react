import React from 'react'
import Post from '../../../components/Post'

import '../../../css/about.css'

import Aside from './aside/Aside'
function Main() {
  return (
    <main>
        <div className='max-width'>
            <Aside />
            <Post />
        </div>
    </main>
  )
}

export default Main