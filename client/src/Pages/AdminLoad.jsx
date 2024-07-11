import { useEffect, useState } from 'react'
import LoadCard from '../components/LoadCard';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const AdminLoad = () => {
  const navigate=useNavigate();
    const [loads,setLoads]=useState([]);
    useEffect(() => {
      const fetchLoads = async () => {
        try {
          const token=localStorage.getItem('token');
          if(!token){throw new Error ("Token not found");}
          const response = await axios.get('http://localhost:8080/load',{
            headers:{
              'Authorization': `Bearer ${token}`,
            }
          });
          setLoads(response.data);
        } catch (err) {
          navigate('/login');
        }
      };
      
     
    
      fetchLoads();
    }, []);
    const handleDelete = (id) => {
      setLoads(loads.filter(load => load._id !== id));
    };
      return (
        <div>
          <Navbar isAdmin={true}/>
          <h1 className="mt-2 text-3xl font-bold text-center">All Loads</h1>
          <div className="w-screen h-full dark:bg-gray-700">
            <div className="flex justify-center flex-wrap">
          {loads.map(load=>(
          <LoadCard key={load._id} id={load._id} onDelete={handleDelete} source={load.source} destination={load.destination} material={load.material} date={load.date} rate={load.rate} distance={load.distance} owner={load.owner.username} weight={load.weight} lorry={load.lorry} isAdmin={true}/>
      ))}
          {/* <LoadCard source="Agra" destination="Mathura" material="Oil" date="12th Jul 2024" rate="231"/>
          <LoadCard source="Agra" destination="Mathura" material="Oil" date="12th Jul 2024" rate="231"/> */}
      </div>
      </div>
        </div>
      )
    }

export default AdminLoad
