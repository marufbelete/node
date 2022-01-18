const PostPost = require("../models/post.model");
const sharp=require("sharp")
const fs=require("fs");
//for more than one file req.file will be chnaged in to req.files
exports.createPost=async (req, res, next) => {
    try {

    const imgurl=[]
    console.log(req.body)
    if (req.files.length > 0)
    {
        if (!fs.existsSync("../images")){
            fs.mkdirSync("../images");
        }
console.log(req.files.length)
  for(let f=0;f<req.files.length;f++)
  {
    console.log(req.files[f])
    const imagetype=(req.files[f].mimetype).split("/")[1]
    const path=req.files[f].originalname
           sharp(req.files[f].buffer)
          .resize({ width:200, fit: 'contain', })
    .toFormat(imagetype)
    .toFile(`./images/${path}`);
    imgurl.push(path)
 }

 const newpost = new PostPost({
    firstCatagoryType: req.body.firstcat,
    secondCatagoryType: req.body.secondcat,
    thiredCatagoryType: req.body.thiredcat,
    price:req.body.price,
    description:req.body.description,
    imageUrl:imgurl,
    brandName:req.body.brandname,
    city:req.body.city,
    subCity:req.body.subcity,
    village:req.body.village,
    
  })

const post=await newpost.save()
res.json(post)
}
 


  else{
    return res.json("you should have an attachment")
  }
    }
  

  catch {
    res.json("some error please try again")
  }
}
//get all post
exports.getPost = async (req, res, next) => {
    try {

        let page = !!req.query.pageno ? req.query.pageno : 0
        let pagesize = 10
        let skip = pagesize * page

        let conditions = [{firstCatagoryType:req.params.firstcatagory,secondCatagoryType:req.params.secondcatagory,thiredCatagoryType: req.params.thiredcatgory }];
        let location = !!req.query.city ? req.query.city : "addis ababa";
        let price = !!req.query.price ? req.query.price : !!req.query.price;
        let brandname = !!req.query.brandname ? req.query.brandname : !!req.query.brandname;

        if (location) {
            conditions.push({ $or: [{ village: location }, { city: location }] });
        }
        if (price) {
            conditions.push({ price: { $lte: price } });
        }
        if (brandname) {
            conditions.push({ brandName: brandname });
        }
        let final_condition = { $and: conditions };

        const catpost = await PostPost.find(final_condition).limit(pagesize).skip(skip).sort({datefield:-1})
        if (catpost) {

            res.json(catpost)
        }
    }
    catch {
        res.json("some error please try again")
    }
}
// update post edit
exports.updatePost = async (req, res, next) => {
    try {
        let poststat = req.query.status
        await PostPost.findByIdAndUpdate(req.params.id, { postStatus: poststat })
        res.json("success")
    }
    catch {
        res.json("can't update the status")
    }
}
//update status
exports.updatePostStatus = async (req, res, next) => {
    try {
        let poststat = req.query.status
        await PostPost.findByIdAndUpdate(req.params.id, { postStatus: poststat })
        res.json("success")
    }
    catch {
        res.json("can't update the status")
    }

}
//delete post
exports.deletePost = async (req, res, next) => {
    try {
        const id = req.params.id
        await PostPost.findByIdAndDelete(id)
    }
    catch {
        res.json("can't delete the post please try again")
    }

}