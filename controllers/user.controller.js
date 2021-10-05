const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

exports.saveUser = async (req, res, next) => {

  try {

    const { username, password, confirmpassword } = req.body

    if (!username || !password) {
      return res.status(400).send({ message: "Please fill all field." })
    }

    if (password.length < 5) {
      return res.status(400).send({ error: true, message: "the password need to be atleast 5 charcter long." })
    }

    if (password != confirmpassword) {

      return res.status(400).send({ error: true, message: "password doesn't match. please try again." })
    }

    var anyusername = await User.findOne({
      username: username,
    });

    if (anyusername) {
      return res.status(400).send({
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
    res.send(user)
  }

  catch {
    res.status(500).send({ err: error.message })
  }
};


exports.loginUser = async (req, res, next) => {

  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).send({ message: "Please fill all field." })
    }

    var user = await User.findOne({
      username: username,
    });
    if (!user) {
      return res.status(400).send({
        error: true,
        message: "No account with this user-name exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credential." });
    }

    const token = jwt.sign({ sub: user._id, username: user.username }, "marufsecret");
    res.send({
      token
    });

  }

  catch {
    res.status(500).send({ err: error.message })
  }
};

