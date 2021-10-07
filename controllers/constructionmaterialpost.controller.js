const HomePost = require("../models/homepost.model");
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

const Homepost = new HomePost({
  size: req.body.size,
  imageUrl: path
})
console.log()
const post=await Homepost.save()

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
exports.getSaleApartmentHomePost = async (req, res, next) => {
  try {
    if(req.query.city && req.query.price)
    {
      const post=await HomePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.roomsize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:req.query.roomsize,typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.homesize)
    {
      const post=await HomePost.find({city:req.query.city,homeSize:req.query.homesize,typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }


    if(req.query.subcity && req.query.price)
    {
      const post=await HomePost.find({subcity:req.query.subcity,price:{$lte:req.query.price},typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && req.query.roomsize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:req.query.roomsize,typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && req.query.homesize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,homeSize:req.query.homesize,typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
  

    if(req.query.placename && req.query.price)
    {
      const post=await HomePost.find({placename:req.query.placename,price:{$lte:req.query.price},typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && req.query.roomsize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:req.query.roomsize,typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && req.query.homesize)
    {
      const post=await HomePost.find({placename:req.query.placename,homeSize:req.query.homesize,typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:"appartment",givenFor="sale"})
      res.json(post)
    }
      
  }

  catch {

  }
}

exports.getSaleVillaHomePost = async (req, res, next) => {
  try {
    if(req.query.city && req.query.price)
    {
      const post=await HomePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.roomsize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:req.query.roomsize,typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.homesize)
    {
      const post=await HomePost.find({city:req.query.city,homeSize:req.query.homesize,typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }


    if(req.query.subcity && req.query.price)
    {
      const post=await HomePost.find({subcity:req.query.subcity,price:{$lte:req.query.price},typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && req.query.roomsize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:req.query.roomsize,typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && req.query.homesize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,homeSize:req.query.homesize,typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
  

    if(req.query.placename && req.query.price)
    {
      const post=await HomePost.find({placename:req.query.placename,price:{$lte:req.query.price},typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && req.query.roomsize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:req.query.roomsize,typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && req.query.homesize)
    {
      const post=await HomePost.find({placename:req.query.placename,homeSize:req.query.homesize,typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:"villa",givenFor="sale"})
      res.json(post)
    }
     
  }

  catch {

  }
}

exports.getSaleStudioHomePost = async (req, res, next) => {
  try {
    
    if(req.query.city && req.query.price)
    {
      const post=await HomePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.roomsize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:req.query.roomsize,typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.homesize)
    {
      const post=await HomePost.find({city:req.query.city,homeSize:req.query.homesize,typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }


    if(req.query.subcity && req.query.price)
    {
      const post=await HomePost.find({subcity:req.query.subcity,price:{$lte:req.query.price},typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && req.query.roomsize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:req.query.roomsize,typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && req.query.homesize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,homeSize:req.query.homesize,typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
  

    if(req.query.placename && req.query.price)
    {
      const post=await HomePost.find({placename:req.query.placename,price:{$lte:req.query.price},typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && req.query.roomsize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:req.query.roomsize,typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && req.query.homesize)
    {
      const post=await HomePost.find({placename:req.query.placename,homeSize:req.query.homesize,typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:"studio",givenFor="sale"})
      res.json(post)
    }
   
  }

  catch {

  }
}

exports.getSaleOfficePost = async (req, res, next) => {
  try {
    
    if(req.query.city && req.query.price)
    {
      const post=await HomePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.roomsize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:req.query.roomsize,typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.homesize)
    {
      const post=await HomePost.find({city:req.query.city,homeSize:req.query.homesize,typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }


    if(req.query.subcity && req.query.price)
    {
      const post=await HomePost.find({subcity:req.query.subcity,price:{$lte:req.query.price},typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && req.query.roomsize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:req.query.roomsize,typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && req.query.homesize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,homeSize:req.query.homesize,typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
  

    if(req.query.placename && req.query.price)
    {
      const post=await HomePost.find({placename:req.query.placename,price:{$lte:req.query.price},typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && req.query.roomsize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:req.query.roomsize,typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && req.query.homesize)
    {
      const post=await HomePost.find({placename:req.query.placename,homeSize:req.query.homesize,typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:"office",givenFor="sale"})
      res.json(post)
    }
   
  }

  catch {

  }
}

exports.getSaleShopPost = async (req, res, next) => {
  try {
    
    if(req.query.city && req.query.price)
    {
      const post=await HomePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.roomsize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:req.query.roomsize,typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && req.query.homesize)
    {
      const post=await HomePost.find({city:req.query.city,homeSize:req.query.homesize,typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }


    if(req.query.subcity && req.query.price)
    {
      const post=await HomePost.find({subcity:req.query.subcity,price:{$lte:req.query.price},typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && req.query.roomsize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:req.query.roomsize,typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && req.query.homesize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,homeSize:req.query.homesize,typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
    if(req.query.subcity && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
  

    if(req.query.placename && req.query.price)
    {
      const post=await HomePost.find({placename:req.query.placename,price:{$lte:req.query.price},typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && req.query.roomsize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:req.query.roomsize,typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && req.query.homesize)
    {
      const post=await HomePost.find({placename:req.query.placename,homeSize:req.query.homesize,typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
    if(req.query.placename && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:"shop",givenFor="sale"})
      res.json(post)
    }
   
  }

  catch {

  }
}


//for rent
exports.getRentApartmentHomePost = async (req, res, next) => {
  try {
    if(req.query.city && req.query.price)
    {
      const post=await HomePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.roomsize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:req.query.roomsize,typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.homesize)
    {
      const post=await HomePost.find({city:req.query.city,homeSize:req.query.homesize,typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }


    if(req.query.subcity && req.query.price)
    {
      const post=await HomePost.find({subcity:req.query.subcity,price:{$lte:req.query.price},typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && req.query.roomsize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:req.query.roomsize,typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && req.query.homesize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,homeSize:req.query.homesize,typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
  

    if(req.query.placename && req.query.price)
    {
      const post=await HomePost.find({placename:req.query.placename,price:{$lte:req.query.price},typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && req.query.roomsize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:req.query.roomsize,typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && req.query.homesize)
    {
      const post=await HomePost.find({placename:req.query.placename,homeSize:req.query.homesize,typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:"appartment",givenFor="rent"})
      res.json(post)
    }
      
  }

  catch {

  }
}

exports.getRentVillaHomePost = async (req, res, next) => {
  try {
    if(req.query.city && req.query.price)
    {
      const post=await HomePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.roomsize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:req.query.roomsize,typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.homesize)
    {
      const post=await HomePost.find({city:req.query.city,homeSize:req.query.homesize,typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }


    if(req.query.subcity && req.query.price)
    {
      const post=await HomePost.find({subcity:req.query.subcity,price:{$lte:req.query.price},typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && req.query.roomsize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:req.query.roomsize,typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && req.query.homesize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,homeSize:req.query.homesize,typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
  

    if(req.query.placename && req.query.price)
    {
      const post=await HomePost.find({placename:req.query.placename,price:{$lte:req.query.price},typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && req.query.roomsize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:req.query.roomsize,typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && req.query.homesize)
    {
      const post=await HomePost.find({placename:req.query.placename,homeSize:req.query.homesize,typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:"villa",givenFor="rent"})
      res.json(post)
    }
     
  }

  catch {

  }
}

exports.getRentStudioHomePost = async (req, res, next) => {
  try {
    
    if(req.query.city && req.query.price)
    {
      const post=await HomePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.roomsize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:req.query.roomsize,typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.homesize)
    {
      const post=await HomePost.find({city:req.query.city,homeSize:req.query.homesize,typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }


    if(req.query.subcity && req.query.price)
    {
      const post=await HomePost.find({subcity:req.query.subcity,price:{$lte:req.query.price},typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && req.query.roomsize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:req.query.roomsize,typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && req.query.homesize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,homeSize:req.query.homesize,typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
  

    if(req.query.placename && req.query.price)
    {
      const post=await HomePost.find({placename:req.query.placename,price:{$lte:req.query.price},typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && req.query.roomsize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:req.query.roomsize,typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && req.query.homesize)
    {
      const post=await HomePost.find({placename:req.query.placename,homeSize:req.query.homesize,typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:"studio",givenFor="rent"})
      res.json(post)
    }
   
  }

  catch {

  }
}

exports.getRentShopPost = async (req, res, next) => {
  try {
    
    if(req.query.city && req.query.price)
    {
      const post=await HomePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.roomsize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:req.query.roomsize,typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.homesize)
    {
      const post=await HomePost.find({city:req.query.city,homeSize:req.query.homesize,typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }


    if(req.query.subcity && req.query.price)
    {
      const post=await HomePost.find({subcity:req.query.subcity,price:{$lte:req.query.price},typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && req.query.roomsize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:req.query.roomsize,typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && req.query.homesize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,homeSize:req.query.homesize,typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
  

    if(req.query.placename && req.query.price)
    {
      const post=await HomePost.find({placename:req.query.placename,price:{$lte:req.query.price},typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && req.query.roomsize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:req.query.roomsize,typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && req.query.homesize)
    {
      const post=await HomePost.find({placename:req.query.placename,homeSize:req.query.homesize,typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:"shop",givenFor="rent"})
      res.json(post)
    }
   
  }

  catch {

  }
}

exports.getRentOfficePost = async (req, res, next) => {
  try {
    
    if(req.query.city && req.query.price)
    {
      const post=await HomePost.find({city:req.query.city,price:{$lte:req.query.price},typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.roomsize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:req.query.roomsize,typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && req.query.homesize)
    {
      const post=await HomePost.find({city:req.query.city,homeSize:req.query.homesize,typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
    if(req.query.city && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({city:req.query.city,typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }


    if(req.query.subcity && req.query.price)
    {
      const post=await HomePost.find({subcity:req.query.subcity,price:{$lte:req.query.price},typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && req.query.roomsize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:req.query.roomsize,typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && req.query.homesize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,homeSize:req.query.homesize,typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
    if(req.query.subcity && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({subcity:req.query.subcity,typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
  

    if(req.query.placename && req.query.price)
    {
      const post=await HomePost.find({placename:req.query.placename,price:{$lte:req.query.price},typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && req.query.roomsize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:req.query.roomsize,typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && req.query.homesize)
    {
      const post=await HomePost.find({placename:req.query.placename,homeSize:req.query.homesize,typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
    if(req.query.placename && !req.query.price && !req.query.roomsize && !req.query.homeSize)
    {
      const post=await HomePost.find({placename:req.query.placename,typeOfHome:"office",givenFor="rent"})
      res.json(post)
    }
   
  }

  catch {

  }
}

//get signle post for detail view
exports.getSingleHomePost = async (req, res, next) => {
  try {
    await HomePost.findById(req.params.postId,(err,post)=>{
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
exports.editHomeomepost = async (req, res, next) => {
  try {
    if (req.file.path) {

      console.log(req.file.path)
      console.log(req.body)
      const Homepost = new HomePost({
        title: req.body.title,
        image: req.file.path
      })
      await Homepost.save()
      res.json("this is the response for authorization")
    }

  }
  catch {

  }
}

//rented or saled to hide the post
exports.toggleHomePostById = async (req, res, next) => {
  try {

    const filter = { _id: req.params.postid};
    const update = {isActive: req.query.status};

    const Homepost = new HomePost()
    const update=await Homepost.findOneAndUpdate(filter, update, {
      new: true
    });
res.json(update)

}
catch {

}
}

//permanent delete the post
exports.deleteHomePostById = async (req, res, next) => {
  try {
    if (req.file.path) {
      const Homepost = new HomePost()
      await Homepost.findByIdAndDelete(req.params.postid,(err)=>{
        if(err){
          res.json(err)
        }
      })
     
    }

  }
  catch {

  }

}
