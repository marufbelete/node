const CatagoryPost = require("../models/catagory.model");
const sharp=require("sharp")
const fs=require("fs");

// for admin
exports.createCatagory=async (req, res, next) => {
    try {
        if(!!req.mimetypeError)
        {
            res.json(req.mimetypeError)
        }
        if(!!req.file)
        {
            if (!fs.existsSync("../images"))
             {
                fs.mkdirSync("../images");
            }
            const imagetype = (req.file.mimetype).split("/")[1]
            const path = req.file.originalname
            await sharp(req.file.buffer)
                .resize({ width: 200, fit: 'contain', })
                .toFormat(imagetype)
                .toFile(`./images/${path}`);

               const savedorupdatecat= await CatagoryPost.updateOne({firstCatagoryType: req.body.firstcatagory,
                secondCatagoryType: req.body.secondcatagory},{
                    $set: {
                        thiredCatagoryType: req.body.thiredcatagory,
                        secondCatagoryImage: path
                    }
                    },{upsert:true});
               res.json(savedorupdatecat)        
    }

    else{
        res.json("please add an image attachment for the catagory")
    }
    
    }

    catch {
        res.json("Error please try again")
    }
}

//for all
exports.getCatgory = async (req, res, next) => {
    try {

        const rent = await CatagoryPost.find({firstCatagoryType:"rent"}).select("secondCatagoryType thiredCatagoryType secondCatagoryImage createdAt updatedAt")
        const sale = await CatagoryPost.find({firstCatagoryType:"sale"}).select("secondCatagoryType thiredCatagoryType secondCatagoryImage createdAt updatedAt")
        res.json({rent,sale})

    }
    catch {

        res.json("Error please try again")
    }
}


// for admin update
exports.updateCatagory = async (req, res,next)=> {
    try {
        if(!!req.mimetypeError)
        {
            res.json(req.mimetypeError)
        }
        let path
        if(!!req.file)
        {
            console.log(req.file.buffer)
            if (!fs.existsSync("../images")) {
                fs.mkdirSync("../images");
            }
           
            const imagetype = (req.file.mimetype).split("/")[1]
            path = req.file.originalname
            if (!fs.existsSync(`./images/${path}`)) {
                await sharp(req.file.buffer)
                    .resize({ width: 200, fit: 'contain', })
                    .toFormat(imagetype)
                    .toFile(`./images/${path}`);
            }
            // save non exsting catagory
            const catagory = await CatagoryPost.findByIdAndUpdate(req.params.id, {
                $set: {
                    firstCatagoryType: req.body.firstcatagory,
                    secondCatagoryType: req.body.secondcatagory,
                    thiredCatagoryType: req.body.thiredcatagory ,
                    secondCatagoryImage: path
                }
                }, {useFindAndModify: false,new:true})
    
                res.json(catagory)
       
       
        }
        else
        { 
            const catagory = await CatagoryPost.findByIdAndUpdate(req.params.id, {
                $set: {
                    firstCatagoryType: req.body.firstcatagory,
                    secondCatagoryType: req.body.secondcatagory,
                    thiredCatagoryType: req.body.thiredcatagory ,
                }
                }, {useFindAndModify: false,new:true})
    
                res.json(catagory)

        }

    }
    catch {
        res.json("Error please try again")
    }
}
// for admin delete
exports.deleteCatagory = async (req, res, next) => {
    try {
        await CatagoryPost.findByIdAndDelete(req.params.id)

        res.json("deleted succssfully")

    }
    catch {
        res.json("Error please try again")
    }
}