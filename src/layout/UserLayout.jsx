import React from 'react'
import { UserNavbar } from '../components/user/UserNavbar'

export const UserLayout = () => {
  return (
    <>
    <nav>
        <UserNavbar/>
    </nav>
    <Outlet/>
    </>
  )
}
