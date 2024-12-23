import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header className="header text-white shadow-lg bg-sky-700">
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Employee Management System</h1>
            <div className="flex items-center space-x-8">
                <a href="index.html" className="hover:underline">Home</a>
                <a href="careers.php" className="hover:underline">Careers</a>
                <a href="contact.php" className="hover:underline">Contact</a>
                <div className="dropdown group">
                    <span className="text-white cursor-pointer ">Login <i className="fas fa-chevron-down"></i></span>
                    <div className="dropdown-content hidden group-hover:block absolute bg-sky-700  right-0 shadow-lg">
                        <ul><li className='p-3 hover:bg-sky-800' ><a href="elogin.html">Employee Login</a></li>
                        <li className='p-3 hover:bg-sky-800'><a href="alogin.html">Admin Login</a></li></ul>
                    </div>
                </div>
                <div className="hamburger-menu md:hidden" onclick="toggleSidebar()">
                    <i className="fas fa-bars text-white text-2xl"></i>
                </div>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Header
