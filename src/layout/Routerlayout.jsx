import { NavLink, Outlet } from "react-router-dom"


const Routerlayout = () => {
  return (
    <div>
  <header>
    <NavLink to ='/' className="underline text-2xl  font-extrabold from-stone-600 to-white p-4">Home </NavLink>
    <NavLink to ="/about" className="underline text-2xl  font-extrabold from-stone-600 to-white p-4 ">About </NavLink>
    <NavLink to ="/register" className="underline text-2xl  font-extrabold from-stone-600 to-white p-4 ">Register </NavLink>
</header>
  <main>
    <Outlet/>
  </main>
  </div>
  )
}

export default Routerlayout