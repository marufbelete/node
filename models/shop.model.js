const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema({
  //for this case embding this many to many relation
  // is better if we reference when in the future the price and other 
  // information of the item update it will also affect already sale item so
  // to solve this problem it's good practice to use embeding in mongodb
  
  User:{
    UserName: {
    type: String,
    trim: true,
    required: true,
    },
    Name:{
      type: String,
      trim: true,
      required: true,
    }
  },
  Item:{
    ItemName: {
      type: String,
      trim: true,
      required: true,
    },
    Price:{
      type: Number,
      trim: true,
      required: true,
    }

  }
  
  
},
  {
    timestamps: true,
  },
);

const Shop = mongoose.model("shop", ShopSchema);

module.exports = Shop;