import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const AddTruck = () => {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    truckType: '',
    brand: '',
    model: '',
    yom: '',
    capacity: '',
    fuelType: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await fetch('http://localhost:8080/truck', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json)).then(navigate('/'));
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div>
    <Navbar/>
    <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16">
      <h1 className="mb-2 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Add a new Truck</h1>
      </div>
      <form className="max-w-sm mx-auto mb-5" onSubmit={handleSubmit}>
        <div className="mb-5">
    <label htmlFor="registrationNumber" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Enter Vehicle Number</label>
      <input type="text" name="registrationNumber" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' placeholder="Truck Registration Number" onChange={handleChange} required />
      </div><div className="mb-5">
        <label htmlFor="truckType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Truck Type </label>
            <select name="truckType" id="truckType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required>
                <option value="">Select Type</option>
                <option value="MCV">MCV</option>
                <option value="HCV">HCV</option>
                <option value="MAV">MAV</option>
                <option value="Tipper">Tipper</option>
                <option value="Refrigerated Truck">Refrigerated Truck</option>
                <option value="Tractor Trailer">Tractor Trailer</option>
                <option value="Tankers">Tanker</option>
            </select>
  </div>
  <div className="mb-5 flex flex-row justify-between">
    <div className="flex flex-col">
      <label htmlFor="brand" className='mb-2 text-sm font-medium text-gray-900 dark:text-white'> Enter Brand Name</label>
      <select 
        name="brand" 
        id="brand" 
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
        onChange={handleChange}
    >
        <option value="">Select Brand</option>
        <option value="Tata Motors">Tata Motors</option>
        <option value="Ashok Leyland">Ashok Leyland</option>
        <option value="Mahindra & Mahindra">Mahindra & Mahindra</option>
        <option value="BharatBenz">BharatBenz</option>
        <option value="Eicher">Eicher</option>
        <option value="Force Motors">Force Motors</option>
        <option value="AMW">AMW</option>
        <option value="Volvo">Volvo</option>
        <option value="Scania">Scania</option>
    </select></div>
    <div className='flex flex-col'>
      <label htmlFor="model" className='mb-2 text-sm font-medium text-gray-900 dark:text-white'> Enter Model Name</label>
      <input type="text" id="model" name="model" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="BLAZO X 35 BS6" onChange={handleChange} required />
    </div>
  </div>
  <div className="mb-5 flex flex-row justify-between">
    <div className="flex flex-col">
      <label htmlFor="yom" className='mb-2 text-sm font-medium text-gray-900 dark:text-white'> Enter Year of Manufacture</label>
      <input type="number" id="yom" name="yom" min="1900" max={new Date().getFullYear()} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"placeholder="2024" onChange={handleChange} required />
    </div>
    <div className='flex flex-col'>
      <label htmlFor="capacity" className='mb-2 text-sm font-medium text-gray-900 dark:text-white'> Enter Capacity (in tons)</label>
      <input type="number" id="capacity" name="capacity" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="100" onChange={handleChange} required />
    </div>
  </div>
      
      
  <div className="mb-5 flex flex-row justify-between">
    <div className="flex flex-col flex-grow mr-2 ">
      <label htmlFor="availability" className='mb-2 text-sm font-medium text-gray-900 dark:text-white'> Enter Availability</label>
    <select name="availability" id="availability" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-100% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={handleChange} required>
        <option value="true">Yes</option>
        <option value="false">No</option>
        </select>
    </div>
    <div className='flex flex-col flex-grow ml-2'>
      <label htmlFor="fuelType" className='mb-2 text-sm font-medium text-gray-900 dark:text-white'> Enter Fuel Type</label>
      <select name="fuelType" id="fuelType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}>
                <option value="">Select Fuel Type</option>
                <option value="Electric">Electric</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="CNG">CNG</option>
                <option value="Hydrogen">Hydrogen</option>
            </select>
        </div>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Truck</button>
    </form>
    </div>
  );
};

export default AddTruck;
//Types of trucks:  Tippers, Tractor Trailers, tankers, refrigerated truck, MCV, HCV, MAV,