const mongoose = require("mongoose");

const PensionSchema = new mongoose.Schema({
  homeSize: {
    type: Number,
    trim: true,
    required: true,
  },
  typeOfRoom: {
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
  subCity: {
    type: String,
    trim: true,
    required: true,
  },
  locationName: {
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


const PensionPost = mongoose.model("Pensionpost", PensionSchema);

module.exports = PensionPost;