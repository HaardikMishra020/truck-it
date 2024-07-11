// TruckCard.js
import axios from 'axios';
import React from 'react';

const TruckCard = (props) => {
  const isAdmin=props.isAdmin;
  const truck=props.truck;
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8080/truck/${truck._id}`);
      if (response.status === 200) {
        alert('Truck deleted successfully');
        // Optionally, you can refresh the list or call a parent function to update the UI
        props.onDelete(truck._id);
      }
    } catch (error) {
      console.error('Error deleting load:', error);
      alert('Failed to delete load');
    }
  };
  return (
    <div className="border p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-bold mb-2">{truck.registrationNumber}</h2>
      <p><strong>Truck Type:</strong> {truck.truckType}</p>
      <p><strong>Brand:</strong> {truck.brand}</p>
      <p><strong>Model:</strong> {truck.model}</p>
      <p><strong>Year of Manufacture:</strong> {truck.yom}</p>
      <p><strong>Capacity:</strong> {truck.capacity} tons</p>
      <p><strong>Fuel Type:</strong> {truck.fuelType}</p>
      <p><strong>Availability:</strong> {truck.availability ? 'Yes' : 'No'}</p>
      <p><strong>Owner:</strong> {truck.owner.username}</p>
      {(isAdmin)?
          <button onClick={handleDelete} className="bg-red-600 px-4 py-2 mt-3 rounded font-semibold text-white hover:bg-blue-700">Delete</button>:        <button className="bg-blue-600 px-4 py-2 mt-3 mr-2 rounded font-semibold text-white hover:bg-blue-700">Contact</button>

        }
    </div>
  );
};

export default TruckCard;
