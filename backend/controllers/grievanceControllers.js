const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Grievance = require('../models/grievanceModel');


// Header Section

exports.grievanceHeaderSection = catchAsyncError(async(req,res,next) =>{
    if (!req.files || !req?.files?.headerImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const file = req?.files?.headerImage;

    const headerImage = await cloudinary.v2.uploader.upload(
        file.tempFilePath, {
        folder: 'MNS/Grievance/Header',
    }
    )

    const { header, caption } = req.body

    const update = {
        header,
        caption,
        headerImage: {
            public_id: headerImage.public_id,
            url: headerImage.secure_url,
        }
    }

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const grievanceHeader = await Grievance.findOneAndUpdate({}, update, options);


    res.status(200).json({
        success: true,
        message: "Grievance Header Add",
        grievanceHeader
    })

})

exports.updateGrievanceHeaderSection = catchAsyncError(async(req,res,nect)=>{
    const newHeader = {
        header: req?.body?.header,
        caption: req?.body?.caption,
    }

    if (req.files && req?.files?.headerImage) {
        const aboutHeader = await Grievance.findById(req.params.id);

        const imageID = aboutHeader.headerImage.public_id;
        console.log(imageID)

        await cloudinary.uploader.destroy(imageID);

        const file = req?.files?.headerImage;

        const Image = await cloudinary.v2.uploader.upload(
            file.tempFilePath, {
            folder: 'MNS/Grievance/Header',
        }
        )

        newHeader.image = {
            public_id: Image.public_id,
            url: Image.secure_url,
        }
    }

    const grievanceHeader = await Grievance.findByIdAndUpdate(req.params.id, newHeader, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        message: "Grievance Header Updated",
        grievanceHeader
    });
})

// Grievance body

exports.grievanceBodySection = catchAsyncError(async(req,res,next) =>{
    const { grievanceBodyHeader, grievanceBodyContent } = req.body;

    const update = {
        grievanceBodyHeader,
        grievanceBodyContent
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const grievanceBody = await Grievance.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Grievance Body Add",
        grievanceBody
    })

})

exports.updateGrievanceBodySection = catchAsyncError(async(req,res,next) =>{
    
    const newBody ={
        grievanceBodyHeader: req?.body?.grievanceBodyHeader,
        grievanceBodyContent: req?.body?.grievanceBodyContent
    }

    const grievanceBody = await Grievance.findByIdAndUpdate(req.params.id, newBody, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        message: "Grievance Body Updated",
        grievanceBody
    });

})

exports.getGrievancePage = catchAsyncError(async(req,res,next) =>{
    const grievance = await Grievance.find();

    res.status(200).json({
        success: true,
        grievance,
    })
})