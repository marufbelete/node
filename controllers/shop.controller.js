const Shop= require("../models/shop.model");
const User = require("../models/user.model");

//for more than one file req.file will be chnaged in to req.files
exports.AddToShop=async (req, res, next) => {
    try {
  
const id=req.user.sub
const username=req.user.username
const itemname=req.body.itemname
const price=req.body.price

const user=await User.findById(id)
 const name=user.Name

 const newshop = new Shop({
    Item:{ ItemName: itemname,Price: price},
    User:{UserName:username,Name:name}
  })
  console.log(name)
  console.log(username)
const shopeditem=await newshop.save()
res.json(shopeditem)
    }
  catch {
    return res.status(400).json({
      message: 'This is an error!'
   });
  }
}

//get my shopping item
exports.GetMyShopping = async (req, res, next) => {
    try {
        const username=req.user.username
        const myshoping=await Shop.find({"User.UserName":username})
        res.json(myshoping)
    }
    catch {
      return res.status(400).json({
        message: 'This is an error!'
     });
    }
}
