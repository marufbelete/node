const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
//sale or rent
  ItemName: {
    type: String,
    trim: true,
    lowercase:true,
    required: true,
  },
  Price :{
    type: Number,
    trim: true,
    required: true,

  },

},
    {
        timestamps: true,
    },
);


const Item = mongoose.model("item", ItemSchema);

module.exports = Item ;