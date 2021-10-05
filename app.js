const express = require("express");
const mongoose = require("mongoose")
const app = express();
const userroute = require('./routes/user.route');
const postroute = require('./routes/post.route');

const accessTokenSecret = 'youraccesstokensecret';

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => { cb(null, "images") },
//   filename: (req, file, cb) => { cb(null, "somefile" + '-' + file.originalname); }
// })

// const filefilter = (req, file, cb) => {
//   if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
//     cb(null, true)
//   }
//   else {

//   } cb(null, false)
//   console.log("mul")
// }

// parse requests of content-type - application/json
app.use(express.json());

// app.use(multer({ storage: fileStorage, filefilter: filefilter }).single("image"))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// simple route
app.use(userroute)
app.use(postroute)

// set port, listen for requests

mongoose.connect("mongodb://localhost:27017/mela", {
  useNewUrlParser: true
})

mongoose.connection.on("error", err => {
  console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")

  const PORT = 3000
  app.listen(PORT, () => {
    console.log(`app is listening to PORT ${PORT}`)
  })

})



