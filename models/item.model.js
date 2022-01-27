const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
//sale or rent
  ItemName: {
    type: String,
    trim: true,
    enum : ['sale','rent'], 
    lowercase:true,
    required: true,
  },
  Price :{
    type: Number,
    trim: true,
    required: true,
    lowercase: true,
  },

},
    {
        timestamps: true,
    },
);


const Item = mongoose.model("Iiem", ItemSchema);

module.exports = Item ;