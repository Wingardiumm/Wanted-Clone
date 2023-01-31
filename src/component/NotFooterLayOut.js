import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../page/header/MainHeader'

function NotFooterLayOut() {
  return (
    <>
        <MainHeader/>
        <Outlet/>
    </>
  )
}

export default NotFooterLayOut