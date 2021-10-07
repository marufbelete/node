const VehiclePost = require("../models/homepost.model");
const sharp=require("sharp")
const fs=require("fs")

exports.createHomePost = async (req, res, next) => {
  try {
    if(req.file.fieldname==="image")
    {
    console.log(req.file.buffer)
    console.log(req.body.title)
    if (!fs.existsSync("../images")){
      fs.mkdirSync("../images");
  }

  const imagetype=(req.file.mimetype).split("/")[1]
  const path=req.file.originalname
  await sharp(req.file.buffer)
  .resize(600, 450)
  .toFormat(imagetype)
  .toFile(`./images/${path}`);

const Vehiclepost = new VehiclePost({
  size: req.body.size,
  imageUrl: path
})
console.log()
const post=await Vehiclepost.save()

res.json(post)

  }
  else{
    return res.status(400).json({
      error: true,
      message: "you file should be image",
    });
  }

  }

  catch {

  }
}


// filter::
// $and: [
//   {
//     $or: [
//       { age: { $gte: 29 } },
//       { rank: 'Commander' }
//     ]
//   },
//   {
//     $or: [
//       { name: { $lte: 'D' } },
//       { name: { $gte: 'W' } }
//     ]
//   }
// ]
// });



//for sale
exports.getSaleTransportVehiclePost = async (req, res, next) => {
  try {
    if(req.query.city && req.query.price)
    {
      const post=await VehiclePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfVehicle:"transport",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.numberofsit)
    {
      const post=await VehiclePost.find({city:req.query.city,numberOfSit:req.query.numberofsit,typeOfVehicle:"transport",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.numberofsit)
    {
      const post=await VehiclePost.find({city:req.query.city,typeOfVehicle:"transport",givenFor="sale"})
      res.json(post)
    }

  }

  catch {

  }
}

exports.getSaleLoadingVehiclePost = async (req, res, next) => {
  try {
    if(req.query.city && req.query.price)
    {
      const post=await VehiclePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfVehicle:"loading",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.numberofsit)
    {
      const post=await VehiclePost.find({city:req.query.city,numberOfSit:req.query.numberofsit,typeOfVehicle:"loadingt",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.numberofsit)
    {
      const post=await VehiclePost.find({city:req.query.city,typeOfVehicle:"loading",givenFor="sale"})
      res.json(post)
    }
    
  }

  catch {

  }
}

//rent
exports.getRentTransportVehiclePost = async (req, res, next) => {
  try {
    if(req.query.city && req.query.price)
    {
      const post=await VehiclePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfVehicle:"transport",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.numberofsit)
    {
      const post=await VehiclePost.find({city:req.query.city,numberOfSit:req.query.numberofsit,typeOfVehicle:"transport",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.numberofsit)
    {
      const post=await VehiclePost.find({city:req.query.city,typeOfVehicle:"transport",givenFor="rent"})
      res.json(post)
    }

  }

  catch {

  }
}

exports.getRentLoadingVehiclePost = async (req, res, next) => {
  try {
    if(req.query.city && req.query.price)
    {
      const post=await VehiclePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfVehicle:"loading",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.numberofsit)
    {
      const post=await VehiclePost.find({city:req.query.city,numberOfSit:req.query.numberofsit,typeOfVehicle:"loadingt",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.numberofsit)
    {
      const post=await VehiclePost.find({city:req.query.city,typeOfVehicle:"loading",givenFor="rent"})
      res.json(post)
    }
    
  }

  catch {

  }
}




//get signle post for detail view
exports.getSingleVehiclePost = async (req, res, next) => {
  try {
    await VehiclePost.findById(req.params.postId,(err,post)=>{
if(err){
  res.json(err)
}
else{
  res.json(post)
}
    })
   
    }
  
  catch {

  }
}



//edit post
exports.editVehiclePost = async (req, res, next) => {
  try {
    if (req.file.path) {

      console.log(req.file.path)
      console.log(req.body)
      const Vehiclepost = new VehiclePost({
        title: req.body.title,
        image: req.file.path
      })
      await Vehiclepost.save()
      res.json("this is the response for authorization")
    }

  }
  catch {

  }
}

//rented or saled to hide the post
exports.toggleVehiclePostById = async (req, res, next) => {
  try {

    const filter = { _id: req.params.postid};
    const update = {isActive: req.query.status};

    const Vehiclepost = new VehiclePost()
    const update=await Vehiclepost.findOneAndUpdate(filter, update, {
      new: true
    });
res.json(update)

}
catch {

}
}

//permanent delete the post
exports.deleteVehiclePostById = async (req, res, next) => {
  try {
    if (req.file.path) {
      const Vehiclepost = new VehiclePost()
      await Vehiclepost.findByIdAndDelete(req.params.postid,(err)=>{
        if(err){
          res.json(err)
        }
      })
     
    }

  }
  catch {

  }

}
