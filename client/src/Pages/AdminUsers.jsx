import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AdminUsers = () => {
    const navigate=useNavigate();
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
            const token=localStorage.getItem('token');
            if(!token){throw new Error ("Token not found");}
            const response=await axios.get('http://localhost:8080/auth/users',{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            setUsers(response.data);}
            catch(err){
                navigate('/login');
            }
        }
        fetchUsers();
    },[]);
  return (
    <div>
        <Navbar isAdmin={true}/>
        <ul>
        {users.map(user=>(
            <li key={user._id}>{user.email}</li>
        ))}
        </ul>
    </div>
  )
}

export default AdminUsers
