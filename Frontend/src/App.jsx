import { useState , useEffect } from 'react'
import {useSelector} from "react-redux"
import './App.css'

import Router from './Routes/Router';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import axios from "axios"
function App() {
   const token = useSelector((state) => state.auth.token);console.log("ttokenn",token);

// YourComponent.js
const [data,setData] = useState({})
  const getUser = async() => {
    try {
      const res = await axios.get("http://localhost:4000/login/success",{withCredentials:true},)
      setData(res.data.user);
      console.log("res",res);
      console.log("data",data);
  
    } catch (error) {
      console.log("Error: "+ error);
      
    }
  }
  useEffect(() => {
    getUser();
  }, [])
  return (
 <>

 <Router/>

 <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/> 
 </>
  )
}

export default App

