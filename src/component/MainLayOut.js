import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../page/footer/Footer'
import MainHeader from '../page/header/MainHeader'

function MainLayOut() {
  return (
    <>
        <MainHeader/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayOut