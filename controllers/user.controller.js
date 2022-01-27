const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

//signup
exports.SaveUser = async (req, res, next) => {
  try {
    const name= req.body.name
    const username= req.body.username
    const password=req.body.password
    const confirm_password=req.body.confirmpassword

    if (!!!name ||!!!username || !!!password)  {
      return res.status(400).json({
        message: 'please fill all field!'
     });
    }
   
    if (password.length < 5) {
      return res.status(400).json({
        message: 'Password length must be grater than 5!'
     });    }
    if (password != confirm_password) {
      return res.status(400).json({
        message: 'Password do not match!'
     });
    }
      const anyusername = await User.find({
      UserName: username,
    });
    if (anyusername.length>0) {
      return res.status(400).json({
        message: 'User-name already in use!'
     });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const user = new User({
      Name:name,
      UserName: username,
      Password: passwordHash,
    })
    console.log(req.body)
    await user.save()


    const token = jwt.sign({ sub: user._id, username: user.UserName }, "marufsecret");
    res.json({
      token
    });
  }
  catch {
    res.status(500).json("some error occured")
  }
};

//log in
exports.LoginUser = async (req, res, next) => {
  try {
    const username=req.body.username;
    const password = req.body.password
    if (!!!username || !!!password) {
      return res.status(400).json({
        message: 'please fill all field!'
     });
    }
    const user = await User.findOne({
      UserName: username,
    });
    if (!!!user) {
      return res.status(400).json({
        message: 'No account with this user name!'
     });
    }
    const isMatch = await bcrypt.compare(password, user.Password)
    if (!isMatch) {
      return res.status(400).json({ message:"Invalid credential."});
    }
    const token = jwt.sign({ sub: user._id, username: user.UserName}, "marufsecret");
    res.json({
      token
    });
  }
  catch {
    res.status(500).json({ message:"some error occured"})
  }
};

