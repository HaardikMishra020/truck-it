import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import TruckCard from '../components/TruckCard';
import { useNavigate } from 'react-router-dom';

const AllTrucks = () => {
  const navigate=useNavigate();
    const [trucks,setTrucks]=useState([]);
useEffect(() => {
  const fetchLoads = async () => {
    try {
      const token=localStorage.getItem('token');
      if(!token){throw new Error ("Token not found");}
      const response = await axios.get('http://localhost:8080/truck',{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      });
      setTrucks(response.data);
    } catch (err) {
      navigate('/login');
    }
  };

  fetchLoads();
}, []);
  return (
    <div>
      <Navbar/>
      <h1 className="mt-2 text-3xl font-bold text-center">Live Trucks</h1>
      <div className="w-screen h-full dark:bg-gray-700">
        <div className="flex justify-center flex-wrap">
      {trucks.map(truck=>(
        <TruckCard key={truck._id} truck={truck} isAdmin={false}/>
      ))}
    </div></div></div>
  )
}

export default AllTrucks
