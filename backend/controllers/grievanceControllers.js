const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Grievance = require('../models/grievanceModel');


// Header Section

exports.grievanceHeaderSection = catchAsyncError(async(req,res,next) =>{
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

        const grievanceHeaderSection = await Grievance.findOne();

        if (grievanceHeaderSection && grievanceHeaderSection.headerImage && grievanceHeaderSection.headerImage.public_id) {
            try {
                await cloudinary.uploader.destroy(grievanceHeaderSection.headerImage.public_id);
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
                folder: 'MNS/Grievance/Header',
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
        const updatedGrievanceHeader = await Grievance.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Grievance Header Updated",
            grievanceHeader: updatedGrievanceHeader,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }

})



exports.getGrievancePage = catchAsyncError(async(req,res,next) =>{
    const grievance = await Grievance.find();

    res.status(200).json({
        success: true,
        grievance,
    })
})