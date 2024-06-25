const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const GoveringBody = require('../models/goveringBodyModel');

// Header Section

exports.headerSection = catchAsyncError(async (req, res, next) => {
    if (!req.files || !req?.files?.headerImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - files"
        });
    }

    const file = req?.files?.headerImage;

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
        console.log(`Uploaded new image: `, headerImage);
    } catch (error) {
        console.error(`Error uploading new image: `, error);
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
        const updatedGoveringHeader = await GoveringBody.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Govering Us Header Added",
            goveringHeader: updatedGoveringHeader,
        });
    } catch (error) {
        console.error("Error updating the database: ", error);
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