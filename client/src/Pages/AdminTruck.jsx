//Importing the required libraries and components
import { useEffect, useState } from 'react'
import axios from 'axios';
import TruckCard from '../components/TruckCard';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const AdminTrucks = () => {
    //state variable for trucks
    const [trucks,setTrucks]=useState([]);
    const navigate=useNavigate();
    //useEffect to run the callback function on component mount only[empty dep. array].
    useEffect(() => {
      const fetchLoads = async () => {
        try {
          
          //fetching the jwt token stored in local storage of client
          const token=localStorage.getItem('token');

          //if token is not in localstorage, then throw error so that authorization is not attached in headers. Useful when jwt is deleted from storage for logout implementation.
          if(!token){throw new Error ("Token not found");}
          //fetching the truck data with axios. Sending token in header for authorization.
          const response = await axios.get('http://localhost:8080/truck',{
            headers:{
              'Authorization': `Bearer ${token}`,
            }
          });

          //setting the truck data to state variable for UI display
          setTrucks(response.data);
        } catch (err) {
          navigate('/login');
        }
      };

      //calling the function
      fetchLoads();
    }, []);

// id passed is id of deleted truck. Function filters the truck array with this id for removing it.
const handleDelete = (id) => {
  setTrucks(trucks.filter(truck => truck._id !== id));
};
  return (
    <div>
      <Navbar isAdmin={true}/>
      <h1 className="mt-2 text-3xl font-bold text-center">All Trucks</h1>
      <div className="w-screen h-full dark:bg-gray-700">
        <div className="flex justify-center flex-wrap">

      {/* This maps the truck array with key as truck id and passes data of each truck into the truckcard as props */}
      {trucks.map(truck=>(
        <TruckCard key={truck._id} truck={truck} isAdmin={true} onDelete={handleDelete} />
      ))}
    </div>
  </div>
</div>
  )
}

export default AdminTrucks;
