const mongoose = require("mongoose");

const CatagorySchema = new mongoose.Schema({
//sale or rent
  firstCatagoryType: {
    type: String,
    trim: true,
    enum : ['sale','rent'], 
    lowercase:true,
    required: true,
  },
  secondCatagoryType: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
    thiredCatagoryType: {
    type: Array,
    required: true,
    lowercase: true,
    },
  secondCatagoryImage: {
     type: String,
     required: true,
    }
},
    {
        timestamps: true,
    },
);


const CatagoryPost = mongoose.model("Catagorypost", CatagorySchema);

module.exports = CatagoryPost ;