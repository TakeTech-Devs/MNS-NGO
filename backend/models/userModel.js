    const mongoose = require('mongoose');
    const jwt = require('jsonwebtoken');

    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
    })

    // JWT token
    userSchema.methods.getJWTToken = function () {
        return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        })
    };

    module.exports = mongoose.model("User", userSchema);
