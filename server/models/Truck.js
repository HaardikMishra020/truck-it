const mongoose = require('mongoose');

const TruckSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  truckType: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  yom: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear(),
  },
  capacity: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  fuelType: {
    type: String,
    required: true,
    enum: ['Electric', 'Petrol', 'Diesel', 'CNG', 'Hydrogen'],
    trim: true,
  },
  availability: {
    type: String,
  },
});

const Truck = mongoose.model('Truck', TruckSchema);

module.exports = Truck;
