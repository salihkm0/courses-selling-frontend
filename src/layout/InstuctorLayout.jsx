import React from 'react'
import { Outlet } from 'react-router-dom'
import { InstuctorNavbar } from '../components/instructor/InstuctorNavbar'

export const InstuctorLayout = () => {
  return (
    <>
    <nav>
        <InstuctorNavbar/>
    </nav>
    <Outlet/>
    </>
  )
}
