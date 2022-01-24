const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

//signup
exports.saveUser = async (req, res, next) => {
  try {
    const username= req.body.username
    const password=req.body.password
    const confirm_password=req.body.confirm_password

    if (!username || !password) {
      return res.status(400).json({ message: "Please fill all field." })
    }
    if (password.length < 5) {
      return res.status(400).json({ error: true, message: "the password need to be atleast 5 charcter long." })
    }
    if (password != confirm_password) {
      return res.status(400).json({ error: true, message: "password doesn't match. please try again." })
    }
      const anyusername = await User.findOne({
      username: username,
    });
    if (anyusername) {
      return res.status(400).json({
        error: true,
        message: "user-name is already in use",
      });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const user = new User({
      username: username,
      password: passwordHash,
    })
    await user.save()
    const token = jwt.sign({ sub: user._id, username: user.username }, "marufsecret");
    res.json({
      token
    });
  }
  catch {
    res.status(500).json({ err: error.message })
  }
};

//log in
exports.loginUser = async (req, res, next) => {
  try {
    const username=req.body.username;
    const password = req.body.password
    if (!username || !password) {
      return res.status(400).json({ message: "Please fill all field." })
    }
    const user = await User.findOne({
      username: username,
    });
    if (!user) {
      return res.status(400).json({
        error: true,
        message: "No account with this user-name exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credential." });
    }
    const token = jwt.sign({ sub: user._id, username: user.username }, "marufsecret");
    res.json({
      token
    });
  }
  catch {
    res.status(500).json({ err: error.message })
  }
};
//update user info
exports.updateUser = async (req, res, next) => {
  try {
    const name = req.body.name
    const password=req.body.password
    const confirm_password= req.body.confirm_password
    const username=req.body.username;
    const id=req.user.sub;
    if (!!!username || !!!password) {
      return res.status(400).json({ message: "Please fill all required field." })
    }
    if (password.length < 5) {
      return res.status(400).json({ error: true, message: "the password need to be atleast 5 charcter long." })
    }
    if (password != confirm_password) {
      return res.status(400).json({ error: true, message: "password doesn't match. please try again." })
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const updated = await User.findByIdAndUpdate(id,{
      username:username,
      name: name,
      password: passwordHash,
    })
   res.json(updated)
  }
  catch {
    res.status(500).json({ err: error.message })
  }
};
