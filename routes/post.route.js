const express = require('express');
const userauth = require("../middleware/auth.middleware")
const { createhomepost } = require('../controllers/homepost.controller');
const { gethomepost } = require('../controllers/homepost.controller');
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

router.post('/createhomepost', userauth,upload.single('image'),createhomepost)
router.post('/gethomepost', userauth, gethomepost)
router.post('/edithomepost', userauth, edithomepost)
router.post('/deletehomepost', userauth, deletehomepost)

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

