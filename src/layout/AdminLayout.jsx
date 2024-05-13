import { Outlet } from "react-router-dom"
import { AdminNavbar } from "../components/admin/AdminNavbar"


export const AdminLayout = () => {
  return (
    <>
    <nav>
        <AdminNavbar/>
    </nav>
    <Outlet/>
    </>
  )
}
