const userModel = require('../models/userModel');

var bcrypt = require('bcrypt')
var randomstring = require("randomstring");

// add user
const signUp = async (req, res) => {

    const passwordRandom = randomstring.generate(7)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(passwordRandom, salt, (err, hash) => 
         {
            if (err) throw err;
            //create a new user instance
            var user = new userModel();

            user.name = req.body.name,
            user.email = req.body.email,
            user.password = hash,
   
            user.save(function (err) {
                if (err)
                    res.send(err);
                res.send('user successfully added!');
            }
        );}
    )}
)
}



module.exports = {
    signUp
}



