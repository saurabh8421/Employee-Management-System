import { useState, useEffect } from 'react';


 import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';


export default function Dashboard() {
  

  
  
// useEffect(() => {
//     // Check if the user is authenticated
//     if (!localStorage.getItem('authToken')) {
//       window.location.href = '/login';  // Redirect to login page
//     }
//   }, []);
  return (
    
    <>
    <SideBar/>
    {/* <Outlet/> */}
    </>
  );
}