import React from 'react'
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
