const HomePost = require("../models/homepost.model");
const sharp=require("sharp")
const fs=require("fs")

exports.createhomepost = async (req, res, next) => {
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
  title: req.body.title,
  image: `./images/${path}`
})
console.log()
await Homepost.save()

res.send("upload done")

  }
  else{
    return res.status(400).send({
      error: true,
      message: "you file should be image",
    });
  }

  }

  catch {

  }
}

exports.gethomepost = async (req, res, next) => {
  try {

    console.log(req.file.path)
    console.log(req.body)
    const Homepost = new HomePost({
      title: req.body.title,
      image: req.file.path
    })
    await Homepost.save()
    res.send("this is the response for authorization")
   
  }
  catch {

  }
}


exports.edithomepost = async (req, res, next) => {
  try {
    if (req.file.path) {

      console.log(req.file.path)
      console.log(req.body)
      const Homepost = new HomePost({
        title: req.body.title,
        image: req.file.path
      })
      await Homepost.save()
      res.send("this is the response for authorization")
    }

  }
  catch {

  }
}


exports.deletehomepost = async (req, res, next) => {
  try {
    if (req.file.path) {

      console.log(req.file.path)
      console.log(req.body)
      const Homepost = new HomePost({
        title: req.body.title,
        image: req.file.path
      })
      await Homepost.save()
      res.send("this is the response for authorization")
    }

  }
  catch {

  }

}
