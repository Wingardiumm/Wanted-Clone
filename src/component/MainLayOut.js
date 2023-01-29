import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../page/main/MainHeader'

function MainLayOut() {
  return (
    <>
        <MainHeader/>
        <Outlet/>
    </>
  )
}

export default MainLayOut