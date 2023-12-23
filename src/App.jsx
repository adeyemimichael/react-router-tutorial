import Home from './component/Home'
import About from './component/About'
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider, } from "react-router-dom"


  //layout import 
  import Routerlayout from './layout/Routerlayout'
  import Registerlayout from './layout/Registerlayout'
import Attendee from './layout/Att/Attendee'
import Volunteer from './layout/Att/Volunteer'
import NotFound from './layout/Att/NotFound'
function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Routerlayout />}>
        <Route index element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='register' element={<Registerlayout /> }>
        <Route path='attendees' element ={ <Attendee/>}/>
        <Route  path='volunteer' element={<Volunteer/>}/>
        </Route> 
        <Route path='*' element={<NotFound/>}>
          </Route> 
      </Route>
    )
  )
  return (
 <RouterProvider router= {router} />
  )
}

export default App
