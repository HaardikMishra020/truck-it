import  { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const AdminDash = () => {
  const navigate=useNavigate();
    const [loads,setLoads]=useState(0);
    const [users,setUsers]=useState(0);
    const [trucks,setTrucks]=useState(0);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const token=localStorage.getItem('token');
            if(!token){throw new Error ("Token not found");}
            const response = await axios.get('http://localhost:8080/admin',{
              headers:{
                'Authorization': `Bearer ${token}`,
              }
            });
            setLoads(response.data.load);
            setUsers(response.data.user);
            setTrucks(response.data.truck);
            console.log(response.data);
          } catch (err) {
            navigate('/login');
            
          }
        };
      
        fetchData();
      }, []);
      
  return (
    <div>
      <Navbar isAdmin={true}/>
      <h1>Total Users: {users}</h1>
      <h1>Total Loads: {loads}</h1>
      <h1>Total Trucks: {trucks}</h1>
    </div>
  )
}

export default AdminDash
