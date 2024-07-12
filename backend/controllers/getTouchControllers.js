const catchAsyncError = require('../middleware/catchAsyncError');
const GetTouch = require('../models/getTouchModel');
const sendEmail = require("../utils/sendEmail");


exports.getTouch = catchAsyncError(async (req, res, next) => {
    const { name, email, phone, message } = req.body

    const gettouch = await GetTouch.create({
        name, email, phone, message
    })

    const Message = `Hi ${name},

Thank You for your valuable comment. Your Comment is: 

"${message}" `

    try {
        await sendEmail({
            email: gettouch.email,
            subject: 'Thank You for your valuable comment',
            Message
        })
        res.status(200).json({
            success: true,
            message: `Email sent to ${gettouch.email} successfully`,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message,
        });
    }
})


// Get Messages

exports.getMessages = catchAsyncError(async(req,res,next) =>{
    const messages = await GetTouch.find();

    res.status(200).json({
        success: true,
        messages,
    })
})