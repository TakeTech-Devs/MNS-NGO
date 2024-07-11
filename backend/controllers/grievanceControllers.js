const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Grievance = require('../models/grievanceModel');
const GrievanceForm = require('../models/grievanceFormModel');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');


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


// Send Grievance

const generateGrievanceId = () => {
    const digits = crypto.randomBytes(4).toString('hex').replace(/\D/g, '').slice(0, 4);
    const letters = crypto.randomBytes(4).toString('base64').replace(/[^A-Z]/g, '').slice(0, 4);

    let grievanceId = digits + letters;

    grievanceId = grievanceId.split('').sort(() => 0.5 - Math.random()).join('').slice(0, 9);

    return grievanceId;
};

exports.sendGrievance = catchAsyncError(async(req,res,next) =>{
    const {issue, email, message} = req.body;

    // const grievanceId = crypto.randomBytes(16).toString('hex');
    const grievanceId = generateGrievanceId();

    const grievanceForm = await GrievanceForm.create({
        issue,
        email,
        message,
        grievanceId
    });

    const Message = `Hi,
Thank You For Raise Issue Ticket.
Your Issuce is: ${issue}
Your Ticket ID: ${grievanceId}`

try {
    await sendEmail({
        email: grievanceForm.email,
        subject: 'Thank You For Raise Issue Ticket',
        Message
    });

    res.status(200).json({
        success: true,
        message: `Your Ticket ID successfully Sent to ${grievanceForm.email}`,
    });
} catch (error) {
    res.status(200).json({
        success: false,
        message: error.message,
    });
}
})

exports.updateGrievanceRequest = catchAsyncError(async(req,res,next) =>{
    const newData = {
        status: req?.body?.status,
    }

    const GrievanceRequest = await GrievanceForm.findById(req.params.id);

    if(!GrievanceRequest){
        return res.status(404).json({
            success: false,
            message: "Grievance not found"
        });
    }


    const grievance = await GrievanceForm.findByIdAndUpdate(req.params.id, newData,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        message: "Grievance Update",
        grievance: grievance,
    })
})



exports.getGrievancePage = catchAsyncError(async(req,res,next) =>{
    const grievance = await Grievance.find();

    res.status(200).json({
        success: true,
        grievance,
    })
})


// Get Messages

exports.getMessages = catchAsyncError(async(req,res,next) =>{
    const messages = await GrievanceForm.find();

    res.status(200).json({
        success: true,
        messages,
    })
})