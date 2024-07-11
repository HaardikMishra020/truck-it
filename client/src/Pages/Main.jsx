import Navbar from "../components/Navbar"
import LoadCard from "../components/LoadCard"
import { useState,useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Main = () => {
  const navigate=useNavigate();
const [loads,setLoads]=useState([]);
useEffect(() => {
  const fetchLoads = async () => {
    try {
      const token=localStorage.getItem('token');
      if(!token){throw new Error ("Token not found");}
      const response = await axios.get('http://localhost:8080/load',{
        headers:{
          'Authorization':`Bearer ${token}`,
        }
      });
      setLoads(response.data);
    } catch (err) {
      navigate('/login');
    }
  };

  fetchLoads();
}, [navigate]);

  return (
    <div>
      <Navbar isAdmin={false}/>
      <Link to="/load/add"><button className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm p-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add a load</button></Link>
      <Link to="/truck/add"><button className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm p-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add a truck</button></Link>
      <h1 className="mt-2 text-3xl font-bold text-center">Live Loads</h1>
      <div className="w-screen h-full dark:bg-gray-700">
        <div className="flex justify-center flex-wrap">
      
      {loads.map(load=>(
        <LoadCard key={load._id}  source={load.source} destination={load.destination} material={load.material} date={load.expdate} rate={load.rate} distance={load.distance} owner={load.owner.username} weight={load.weight} lorry={load.lorry}/>
      ))}
      {/* <LoadCard source="Agra" destination="Mathura" material="Oil" date="12th Jul 2024" rate="231"/>
      <LoadCard source="Agra" destination="Mathura" material="Oil" date="12th Jul 2024" rate="231"/> */}
  </div>
  </div>
    </div>
  )
}

export default Main
