const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,

  },
},
  {
    timestamps: true,
  },
);


const HomePost = mongoose.model("Homepost", UserSchema);

module.exports = HomePost;