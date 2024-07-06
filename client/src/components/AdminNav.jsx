import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <nav className="bg-white">
    <div className="flex justify-between bg-gray-500 h-15 px-10 py-5 text-white">
    <div className="black-ops-one-regular">
    <Link to="/admin" className='text-2xl'>Truck-IT</Link>
    </div>
    <div className="flex">
    <Link to="/admin/loads" className='mx-2'>Loads</Link>
    <Link to="/admin/trucks" className='mx-2'>Trucks</Link>
    <Link to="/admin/users" className='mx-2'>Users</Link>
    </div>
    </div>
</nav>
  )
}

export default AdminNav
