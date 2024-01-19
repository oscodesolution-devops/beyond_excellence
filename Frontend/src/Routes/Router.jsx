import { BrowserRouter ,Routes , Route } from "react-router-dom"
import Home from './Home'
import Login from '../Sections/Login'
import Signin from "../Sections/Signin"
import Profile from "../Sections/Profile"
import ErrorPage from "../Pages/ErrorPage"
const Router = () => {

  
  return (
    <>
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signin" element={<Signin/>}/>
            
            <Route path="/profile" element={<Profile/>}/>
            {/* <Route path="*" element={<ErrorPage/>}/> */}
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default Router