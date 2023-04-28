import TopNav from "../TopNav"
import BottomNav from "../BottomNav"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <TopNav/>
        <Outlet/>
        <BottomNav/>      
    </div>
  )
}

export default Layout