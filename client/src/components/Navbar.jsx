import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Navbar = (props) => {
  const navigate=useNavigate();
  const isAdmin=props.isAdmin;
  const [loggedIn,setLoggedIn]=useState(false);

  useEffect(()=>{
    const token=localStorage.getItem('token');
  if(token){
    setLoggedIn(true);
  }
  },[loggedIn,navigate]);
  

  //if clicked on logout, it will remove the jwt token from localstorage.
  const handleLogout=(e)=>{
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/login');

  }
  return (
<nav className="bg-white">
    <div className="flex justify-between bg-gray-500 h-15 px-10 py-5 text-white">
    <div className="black-ops-one-regular">
    {(isAdmin)?<Link to="/admin" className='text-2xl'>Truck-IT</Link>:
    <Link to="/dashboard" className='text-2xl'>Truck-IT</Link>}
    </div>
    <div className="flex">
    {(isAdmin)?<Link to="/admin/loads" className='mx-2'>Loads</Link>:<a href="#" className="mx-2">About Us</a>}
    {(isAdmin)?<Link to="/admin/trucks" className='mx-2'>Trucks</Link>:<Link to="/truck" className='mx-2'>Trucks</Link>}
    {(isAdmin)?<Link to="/admin/users" className='mx-2'>Users</Link>:<a href="#" className="mx-2">Contact Us</a>}
    {(loggedIn)?<Link className="mx-2" onClick={handleLogout}>Logout</Link>:<Link to ="/login" className="mx-2">Login</Link>}
    </div>
    </div>
</nav>
)
}

export default Navbar
