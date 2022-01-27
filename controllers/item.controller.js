const Item= require("../models/item.model");
//for more than one file req.file will be chnaged in to req.files
exports.AddItem=async (req, res, next) => {
    try {

const itemname=req.body.itemname
const price=req.body.price
const username=req.user.username
if(username==='admin') {
 const newpost = new Item({
    ItemName: itemname,
    Price: price
  })
const item=await newpost.save()
res.json(item)
}
    res.status(400).json({
    message: 'You dont have permission to this page!'})

    }
  catch {
    res.json("Error please try again")
  }
}
//get all post
exports.GetAllItems = async (req, res, next) => {
    try {
        const allitems=await Item.find()
        res.json(allitems)
    }
    catch {
        res.json("some error please try again")
    }
}
//update status
exports.UpdateItem = async (req, res, next) => {
    try {

        const id = req.params.id
        const itemname=req.body.itemname
        const price=req.body.price
        const username=req.user.username
        console.log(req.body)
        console.log(id)
        if(username==='admin') {
        const updateditem=await Item.findByIdAndUpdate(id, { $set:{
            ItemName: itemname,
            Price: price
            }},{new:true})
        res.json(updateditem)
    }
    res.status(400).json({
        message: 'You dont have permission to this page!'})
}
    catch {
        res.json("Error PLease try again")
    }
}
//delete post
exports.DeleteItem = async (req, res, next) => {
    try {
        const username=req.user.username
        if(username==='admin') {
        const id = req.params.id
        await PostPost.findByIdAndDelete(id)
        }
        res.status(400).json({
            message: 'You dont have permission to this page!'})
    }
    catch {
        res.json("can't delete the post please try again")
    }


}