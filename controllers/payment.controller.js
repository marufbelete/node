const  Payment= require("../models/payment.model");

//add ussdCode
exports.addUssdCode = async (req, res, next) => {

  try {
  const ussd=await Payment.find()
  console.log(ussd)
  if(ussd.length===0)
  {
const newussd=new Payment({
  ussdCode:req.body.ussdcode,
  phoneNumber:req.body.phonenumber,
  amount:req.body.amount
})
const savedussd=await newussd.save()
res.json(savedussd)
}
else{
  res.json("Ussdcode already exists,you can't have more than one Ussdcode for now but you can update the value if you want")
}
  }
  catch {
    res.json("Error, please try again")
  }
}
//get ussdcode
exports.getUssdCode = async (req, res, next) => {

  try {

const ussd=await Payment.findOne()
console.log(ussd)
res.json(ussd)
  }
  catch{
res.json("Error, please try again")
  }
}
//update ussdcode
exports.updateUssdCode = async (req, res, next) => {

  try {

const ussd=await Payment.findByIdAndUpdate(req.params.id,{
  ussdCode:req.body.ussdcode,
  phoneNumber:req.body.phonenumber,
  amount:req.body.amount
},{new:true})

res.json(ussd)

  }
  catch {

res.json("Error, please try again")
  }
}

//delete ussdcode
exports.deleteUssdCode = async (req, res, next) => {

  try {

await Payment.findByIdAndDelete(req.params.id)

res.json("Deleted Successfully")

  }
  catch{

res.json("Error, please try again")
  }
}
