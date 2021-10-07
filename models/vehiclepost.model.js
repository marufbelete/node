const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  numberOfSit: {
    type: Number,
    trim: true,
    required: true,
  },
  typeOfVehicle: {
    type: String,
    trim: true,
    required: true,
  },
  givenFor: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  imageUrl: {
    type: String,
    trim: true,
    required: true,
  },
  isActive:{
    type:Boolean,
    default:true,
  }
},
  {
    timestamps: true,
  },
);


const VehiclePost = mongoose.model("Vehiclepost", VehicleSchema);

module.exports = VehiclePost;