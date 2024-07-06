import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AdminNav from '../components/AdminNav';

const AdminDash = () => {
    const [loads,setLoads]=useState(0);
    const [users,setUsers]=useState(0);
    const [trucks,setTrucks]=useState(0);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/admin');
            setLoads(response.data.load);
            setUsers(response.data.user);
            setTrucks(response.data.truck);
            console.log(response.data);
          } catch (err) {
            console.error('Error fetching Data:', err);
          }
        };
      
        fetchData();
      }, []);
      
  return (
    <div>
      <AdminNav/>
      <h1>Total Users: {users}</h1>
      <h1>Total Loads: {loads}</h1>
      <h1>Total Trucks: {trucks}</h1>
    </div>
  )
}

export default AdminDash
