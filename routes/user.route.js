const express = require('express');
const userauth = require("../middleware/auth.middleware")
const { saveUser } = require('../controllers/user.controller');
const { loginUser,updateUser } = require('../controllers/user.controller');
const router = express.Router();

router.post('/register', saveUser)
router.post('/login', loginUser)
router.post('/updateuser',userauth,updateUser)


module.exports = router

