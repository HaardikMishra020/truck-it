// TruckCard.js
import React from 'react';

const TruckCard = ({ truck }) => {
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
    </div>
  );
};

export default TruckCard;
