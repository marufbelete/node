const mongoose = require("mongoose");

const constructionSchema = new mongoose.Schema({
  itemCatagory: {
    type: String,
    trim: true,
    required: true,
  },
  itemName: {
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


const ConstructionPost = mongoose.model("Constructionpost", constructionSchema);

module.exports = ConstructionPost;