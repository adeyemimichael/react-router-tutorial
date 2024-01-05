import { NavLink, Outlet } from "react-router-dom"
import Navbar from "../component/Nav"
import About from "../component/Infor"
import Mape from "../component/map"
import Highlight from "../component/Highlight"
const Routerlayout = () => {
  return (
    <div className=" w-screen h-screen ">
  <header>
    <Navbar/>
    <NavLink to ='/' className="underline text-2xl  font-extrabold from-stone-600 to-white p-4">Home </NavLink>
    <NavLink to ="/about" className="underline text-2xl  font-extrabold from-stone-600 to-white p-4 ">About </NavLink>
    <NavLink to ="/register" className="underline text-2xl  font-extrabold from-stone-600 to-white p-4 ">Register </NavLink>
    <NavLink to ="/careers" className="underline text-2xl  font-extrabold from-stone-600 to-white p-4 ">Career</NavLink>
</header>
  <main>
    <div>
    
    </div>
    <Outlet/>
    <About />
    <Mape/>
    <Highlight/>
  </main>
  </div>
  )
}

export default Routerlayout