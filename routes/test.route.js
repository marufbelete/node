const express = require('express');
const userauth = require("../middleware/auth.middleware")
const { SaveUser, LoginUser } = require('../controllers/user.controller');
const { AddItem, GetAllItems, UpdateItem, DeleteItem } = require('../controllers/item.controller');
const { AddToShop, GetMyShopping } = require('../controllers/shop.controller');

const router = express.Router();

//manage user
router.post('/register', SaveUser)
router.post('/login', LoginUser)

//manage item
router.post('/additem',userauth, AddItem)
router.get('/getallitems', userauth, GetAllItems)
router.put('/edititem', userauth, UpdateItem)
router.delete('/deleteitem', userauth, DeleteItem)

//sale
router.post('/addtoshoping',  userauth,AddToShop)
router.get('/getmyshoping',  userauth,GetMyShopping)



module.exports = router

