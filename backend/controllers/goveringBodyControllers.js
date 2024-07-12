const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const GoveringBody = require('../models/goveringBodyModel');

// Header Section

exports.headerSection = catchAsyncError(async (req, res, next) => {
    const { header, caption } = req.body;

    const update = {
        header,
        caption,
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    if (req.files && req.files.headerImage) {
        const file = req.files.headerImage;

        const goveringHeader = await GoveringBody.findOne();

        if (goveringHeader && goveringHeader.headerImage && goveringHeader.headerImage.public_id) {
            try {
                await cloudinary.uploader.destroy(goveringHeader.headerImage.public_id);
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
                folder: 'MNS/Govering Body/Header',
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error uploading new image",
                error: error.message,
            });
        }

        update.headerImage = {
            public_id: headerImage.public_id,
            url: headerImage.secure_url,
        };
    }

    try {
        const updatedGoveringHeader = await GoveringBody.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Governing Body Header Added",
            goveringHeader: updatedGoveringHeader,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }
})

// GoveringBody body section 

exports.GoveringBodySection = catchAsyncError(async(req,res,next) =>{
    const { goveringBodyHeader, goveringBodyContent } = req.body;

    const update = {
        goveringBodyHeader,
        goveringBodyContent
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const goveringBody = await GoveringBody.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Grievance Body Add",
        goveringBody
    })

})

exports.getGoveringBodyPage = catchAsyncError(async(req,res,next) =>{
    const goveringBody = await GoveringBody.find();

    res.status(200).json({
        success: true,
        goveringBody,
    })
})