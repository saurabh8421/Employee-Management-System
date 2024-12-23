import React from 'react'
import { useEffect, useState } from 'react'
import API from '../services/api';

function AdminHome() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        API.get('/employees').then((res) => setEmployees(res.data));
      }, []);
    
  return (
    
    <div class="flex-1 p-8">
    <h2 class="text-center mb-6 font-bold text-black text-3xl">Employee Leaderboard</h2>
    
    <div class="overflow-x-auto shadow-lg rounded-lg">
        <table class="min-w-full bg-white text-black border border-gray-300 rounded-lg">
        <thead>
        <tr class="bg-gray-800 text-white">
            <th className='px-6 py-3'>Name</th>
            <th className='px-6 py-3'>Role</th>
            <th className='px-6 py-3'>Contact</th>
            <th className='px-6 py-3'>Performance</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td className='px-6 py-3'>{`${emp.firstname} ${emp.lastname}`}</td>
              <td className='px-6 py-3'>{emp.role}</td>
              <td className='px-6 py-3' >{emp.contact}</td>
              <td className='px-6 py-3'>{emp.performance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  )
}

export default AdminHome
