const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  homeSize: {
    type: Number,
    trim: true,
    required: true,
  },
  typeOfHome: {
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


const HomePost = mongoose.model("Homepost", UserSchema);

module.exports = HomePost;