const express = require('express');
const userauth = require("../middleware/auth.middleware")
const { createHomePost } = require('../controllers/homepost.controller');
const { getSaleApartmentHomePost,getSaleStudioHomePost,getSingleHomePost,getSaleVillaHomePost } = require('../controllers/homepost.controller');
const { getRentApartmentHomePost,getRentStudioHomePost,getRentVillaHomePost } = require('../controllers/homepost.controller');
const { edithomepost } = require('../controllers/homepost.controller');
const { deletehomepost } = require('../controllers/homepost.controller');
const multer=require("multer")
const router = express.Router();
const fileStorage = multer.memoryStorage()
  
const filefilter = (req, file, cb) => {
    console.log("filter")
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
    cb(null, true)
  }

  else {

  } cb(null, false)
}
const upload=multer({ storage: fileStorage, filefilter: filefilter })
//creating post API
router.post('/createhomepost', userauth,upload.single('image'),createHomePost)

//get post by cat for sale API
router.get('/getsaleapartmenthomepost', userauth, getSaleApartmentHomePost)
router.get('/getsalevillhomepost', userauth, getSaleVillaHomePost)
router.get('/getsalestudiohomepost', userauth, getSaleStudioHomePost)

//get post by  cafor rent API
router.get('/getrentapartmenthomepost', userauth, getRentApartmentHomePost)
router.get('/getrentvillhomepost', userauth, getRentVillaHomePost)
router.get('/getrentstudiohomepost', userauth, getRentStudioHomePost)


// get singlepost by id
router.get('/getsinglepostbyid', userauth, getSingleHomePost)

// router.post('/createhomepost', userauth, createhomepost)
// router.post('/gethomepost', userauth, gethomepost)
// router.post('/edithomepost', userauth, edithomepost)
// router.post('/deletehomepost', userauth, deletehomepost)

// router.post('/createhomepost', userauth, createhomepost)
// router.post('/gethomepost', userauth, gethomepost)
// router.post('/edithomepost', userauth, edithomepost)
// router.post('/deletehomepost', userauth, deletehomepost)

// router.post('/createhomepost', userauth, createhomepost)
// router.post('/gethomepost', userauth, gethomepost)
// router.post('/edithomepost', userauth, edithomepost)
// router.post('/deletehomepost', userauth, deletehomepost)

module.exports = router

