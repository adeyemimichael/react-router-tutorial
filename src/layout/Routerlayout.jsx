import {  Outlet } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../component/Nav"
// import About from "../component/Infor"
// import Mape from "../component/map"
// import Highlight from "../component/Highlight"
// import Partners from "../component/Partners";
// import Sponsors from "../component/Sponsors";
// import TawkToChat from "../component/Talk"; 
// import Footer from "../component/Footer";
const Routerlayout = () => {
 AOS.init();
  return (
    <div className=" w-screen h-screen ">
  <header>
    <Navbar/>
    {/* <NavLink to ='/' className="underline text-2xl  font-extrabold from-stone-600 to-white p-4">Home </NavLink>
    <NavLink to ="/about" className="underline text-2xl  font-extrabold from-stone-600 to-white p-4 ">About </NavLink> */}
    
</header>
  <main>
    <div>
    
    </div>
    <Outlet/>
    {/* <About />
    <Mape/>
    <Highlight/>
    < Partners/>
    <Sponsors/>
<Footer/>
    <TawkToChat/> */}
  </main>
  </div>
  )
}

export default Routerlayout