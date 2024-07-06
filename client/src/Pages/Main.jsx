import Navbar from "../components/Navbar"
import LoadCard from "../components/LoadCard"
import { useState,useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Main = () => {
const [loads,setLoads]=useState([]);
useEffect(() => {
  const fetchLoads = async () => {
    try {
      const response = await axios.get('http://localhost:8080/load');
      setLoads(response.data);
    } catch (err) {
      console.error('Error fetching Loads:', err);
    }
  };

  fetchLoads();
}, []);
  return (
    <div>
      <Navbar/>
      <Link to="/load/add">Add a load</Link>
      <Link to="/truck/add">Add a truck</Link>
      <h1 className="mt-2 text-3xl font-bold text-center">Live Loads</h1>
      <div className="w-screen h-full dark:bg-gray-700">
        <div className="flex justify-center flex-wrap">
      {loads.map(load=>(
        <LoadCard key={load._id} source={load.source} destination={load.destination} material={load.material} date={load.date} rate={load.rate} distance={load.distance} owner={load.owner} weight={load.weight} lorry={load.lorry}/>
      ))}
      {/* <LoadCard source="Agra" destination="Mathura" material="Oil" date="12th Jul 2024" rate="231"/>
      <LoadCard source="Agra" destination="Mathura" material="Oil" date="12th Jul 2024" rate="231"/> */}
  </div>
  </div>
    </div>
  )
}

export default Main
