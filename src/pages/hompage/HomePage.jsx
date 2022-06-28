import React from 'react'
import Header from './header/Header'
import '../../css/button.css'
import '../../css/banner.css'
import '../../css/main.css'

import Banner from './banner/Banner'
import Main from './main/Main'
function HomePage() {
  return (
    <>
        <Header />
        <Banner />
        <Main />
    </>
  )
}

export default HomePage