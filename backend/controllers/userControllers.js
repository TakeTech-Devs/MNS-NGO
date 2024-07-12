const catchAsyncError = require('../middleware/catchAsyncError');
const User = require('../models/userModel');

exports.addNewAdmin = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
    })

    res.status(200).json({
        success: true,
        user
    })
})

exports.loginAdmin = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Please enter all fields" })
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return res.status(400).json({ success: false, message: "Invalid email or password" })
    }
    if (user.password !== password) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }
    res.status(200).json({
        success: true,
        user
    })

})

exports.getAllAdmins = catchAsyncError(async(req, res, next) =>{
    const users = await User.find();
    res.status(200).json({
        success: true,
        users
    })
})