const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Contact = require("../models/contactModel");



// Header Section

exports.headerSection = catchAsyncError(async (req, res, next) => {
    if (!req.files || !req?.files?.headerImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - files"
        });
    }

    const file = req?.files?.headerImage;

    const contactHeader = await Contact.findOne();

    if (contactHeader && contactHeader.headerImage && contactHeader.headerImage.public_id) {
        try {
            await cloudinary.uploader.destroy(contactHeader.headerImage.public_id);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error deleting old image",
                error: error.message,
            });
        }
    }

    let headerImage;
    try {
        headerImage = await cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: 'MNS/Contact Us/Header',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error uploading new image",
            error: error.message,
        });
    }

    const { header, caption } = req.body;

    const update = {
        header,
        caption,
        headerImage: {
            public_id: headerImage.public_id,
            url: headerImage.secure_url,
        }
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false,
    };

    try {
        const updatedContactHeader = await Contact.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Contact Us Header Added",
            contactHeader: updatedContactHeader,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }
})

// Contact section 

exports.ContactSection = catchAsyncError(async(req,res,next) =>{
    const { phone, email } = req.body;

    const update = {
        phone,
        email
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const contact = await Contact.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Contact Add",
        contact
    })

})

// Get Contect

exports.getContactPage = catchAsyncError(async(req,res,next) =>{
    const contact = await Contact.find();

    res.status(200).json({
        success: true,
        contact,
    })
})