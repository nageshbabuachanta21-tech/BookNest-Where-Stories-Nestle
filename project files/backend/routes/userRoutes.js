// IMPORT EXPRESS ROUTER

const router = require("express").Router();


// IMPORT USER MODEL

const User = require("../models/User");


// REGISTER

router.post("/register", async (req, res) => {

try {

const user = new User(req.body);

await user.save();

res.send("User Registered Successfully");

}

catch (error) {

res.status(500).send(error);

}

});


// LOGIN

router.post("/login", async (req, res) => {

try {

const user = await User.findOne({

email: req.body.email,

password: req.body.password

});

if (user) {

res.json(user);

}

else {

res.status(401).send("Invalid Email or Password");

}

}

catch (error) {

res.status(500).send(error);

}

});


// EXPORT ROUTER

module.exports = router;