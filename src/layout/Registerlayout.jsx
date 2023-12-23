import {NavLink, Outlet } from "react-router-dom"


const Registerlayout = () => {
  return (
    <div>
      <h1>i should get this more</h1>

      <NavLink to='attendees'>Attendees</NavLink>
      <NavLink to='volunteer'>Volunteer</NavLink>
      <Outlet/>
    </div>
  )
}

export default Registerlayout