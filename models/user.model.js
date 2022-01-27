const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
 
  //our cata perfume bodymakeup and hairtreatment
  Name: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  UserName:{
    type: String,
    required: true,
    unique: true,
  },
  Password:{
    type: String,
    required: true,
    unique: true,
  }

},
  {
    timestamps: true,
  },
);


const User= mongoose.model("user", UserSchema);

module.exports = User;