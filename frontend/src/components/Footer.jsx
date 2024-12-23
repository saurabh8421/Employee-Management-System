import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedinIn  } from "react-icons/fa";



function Footer() {
  return (
    <div>
      <footer className="bg-sky-700 py-6">
        <div className="container mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="text-gray-200 hover:text-gray-100"><FaFacebookF/></a>
                <a href="#" className="text-gray-200 hover:text-gray-100"><FaTwitter /></a>
                <a href="#" className="text-gray-200 hover:text-gray-100"><FaLinkedinIn /></a>
            </div>
            <p className="text-gray-200">&copy; 2024 Employee Management System. All rights reserved.</p>
            <p className="text-gray-300 text-sm mt-2">Developed by Saurabh Kumar</p>
        </div>
        </footer>
    </div>
  )
}

export default Footer
