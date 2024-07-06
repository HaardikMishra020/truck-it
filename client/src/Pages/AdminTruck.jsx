import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TruckCard from '../components/TruckCard';
import AdminNav from '../components/AdminNav';

const AdminTrucks = () => {
    const [trucks,setTrucks]=useState([]);
useEffect(() => {
  const fetchLoads = async () => {
    try {
      const response = await axios.get('http://localhost:8080/truck');
      setTrucks(response.data);
    } catch (err) {
      console.error('Error fetching Loads:', err);
    }
  };

  fetchLoads();
}, []);
  return (
    <div>
      <AdminNav/>
      <h1 className="mt-2 text-3xl font-bold text-center">All Trucks</h1>
      <div className="w-screen h-full dark:bg-gray-700">
        <div className="flex justify-center flex-wrap">
      {trucks.map(truck=>(
        <TruckCard key={truck._id} truck={truck} />
      ))}
    </div></div></div>
  )
}

export default AdminTrucks;
