const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  name:{type:String},
  phoneNumber: { type: String, required: true, unique: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String }
  },
  licenseNumber: { type: String, unique: true },
  vehicleType: { type: String },
  vehicleRegistrationNumber: { type: String, unique: true },
  availability: { type: Boolean, default: true },
  rating: { type: Number, default: 0 },
  completedTrips: { type: Number, default: 0 },
  profilePicture: { type: String },
  bio: { type: String }
});

const User=mongoose.model('User',userSchema);
module.exports=User;