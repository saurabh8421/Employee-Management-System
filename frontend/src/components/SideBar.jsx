import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function SideBar() {
  return (
    <div>
      <div className="flex flex-1 min-h-screen">

       
<aside id="sidebar" className="sidebar w-64 p-6 md:block bg-gray-800">
    <h2 className="text-2xl mb-8 text-white font-semibold">Navigation</h2>
    <ul className="space-y-6">
        <li><NavLink  to="">Home</NavLink></li>
        <li><NavLink  to="/dashboard/addemp">Add Employee</NavLink></li>
        <li><NavLink  to="viewemp.php">View Employee</NavLink></li>
        <li><NavLink  to="assign.php">Assign Project</NavLink></li>
        <li><NavLink  to="assignproject.php">Project Status</NavLink></li>
        <li><NavLink  to="salaryemp.php">Salary Table</NavLink></li>
        <li><NavLink  to="empleave.php">Employee Leave</NavLink></li>
         
    </ul>
</aside>

<Outlet/>
</div>
    </div>
  )
}

export default SideBar
