const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Grievance = require('../models/grievanceModel');


// Header Section

exports.grievanceHeaderSection = catchAsyncError(async(req,res,next) =>{
    if (!req.files || !req?.files?.headerImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - files"
        });
    }

    const file = req?.files?.headerImage;


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
        useFindAndModify: false
    };

    try {
        const updatedGrievanceHeader = await Grievance.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Grievance Header Updated",
            grievanceHeader: updatedGrievanceHeader,
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

// exports.updateGrievanceHeaderSection = catchAsyncError(async(req,res,nect)=>{
//     const newHeader = {
//         header: req?.body?.header,
//         caption: req?.body?.caption,
//     }

//     if (req.files && req?.files?.headerImage) {
//         const aboutHeader = await Grievance.findById(req.params.id);

//         const imageID = aboutHeader.headerImage.public_id;
//         console.log(imageID)

//         await cloudinary.uploader.destroy(imageID);

//         const file = req?.files?.headerImage;

//         const Image = await cloudinary.v2.uploader.upload(
//             file.tempFilePath, {
//             folder: 'MNS/Grievance/Header',
//         }
//         )

//         newHeader.image = {
//             public_id: Image.public_id,
//             url: Image.secure_url,
//         }
//     }

//     const grievanceHeader = await Grievance.findByIdAndUpdate(req.params.id, newHeader, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: true,
//     })

//     res.status(200).json({
//         success: true,
//         message: "Grievance Header Updated",
//         grievanceHeader
//     });
// })

exports.getGrievancePage = catchAsyncError(async(req,res,next) =>{
    const grievance = await Grievance.find();

    res.status(200).json({
        success: true,
        grievance,
    })
})