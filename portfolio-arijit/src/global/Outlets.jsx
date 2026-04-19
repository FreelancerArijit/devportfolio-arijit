import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';


function Outlets() {
  return (
   <>
   <Navbar />
    <Outlet />
    
   
   </>
  )
}

export default Outlets;
