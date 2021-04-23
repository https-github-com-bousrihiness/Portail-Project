const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            unique: true,
            trim:true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trim:true
        },
        password: {
            type: String,
            required: true,
          
        }
    }
)

module.exports = mongoose.model('user', userSchema);