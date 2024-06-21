const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const About = require('../models/aboutModel');



// Header Section

exports.headerSection = catchAsyncError(async (req, res, next) => {
    if (!req.files || !req?.files?.headerImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const file = req?.files?.headerImage;

    const headerImage = await cloudinary.v2.uploader.upload(
        file.tempFilePath, {
        folder: 'MNS/About Us/Header',
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

    const aboutHeader = await About.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "About Us Header Add",
        aboutHeader,
    });


})

exports.updateHeaderSection = catchAsyncError(async (req, res, next) => {
    const newHeader = {
        header: req?.body?.header,
        caption: req?.body?.caption,
    }

    if (req.files && req?.files?.headerImage) {
        const aboutHeader = await About.findById(req.params.id);

        const imageID = aboutHeader.headerImage.public_id;
        console.log(imageID)

        await cloudinary.uploader.destroy(imageID);

        const file = req?.files?.headerImage;

        const Image = await cloudinary.v2.uploader.upload(
            file.tempFilePath, {
            folder: 'MNS/About Us/Header',
        }
        )

        newHeader.image = {
            public_id: Image.public_id,
            url: Image.secure_url,
        }
    }

    const header = await About.findByIdAndUpdate(req.params.id, newHeader, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        message: "About Us Header Update",
        header
    });


})


// Our Story Section

exports.ourStorySection = catchAsyncError(async(req,res,next) => {

    const { ourStoryHeader, ourStoryContent } = req.body

    const update = { ourStoryHeader, ourStoryContent};

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const ourStory = await About.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Our Story Add",
        ourStory
    })


})

exports.updateOurStorySection = catchAsyncError(async(req,res,next) =>{
    const newStory = {
        ourStoryHeader: req?.body?.ourStoryHeader,
        ourStoryContent: req?.body?.ourStoryContent,
    };

    const ourStory = await About.findByIdAndUpdate(req.params.id, newStory,{
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        message: "Our Story Update",
        ourStory
    })
    
})


// Our Values Section

exports.ourValuesSection = catchAsyncError(async(req,res,next) => {

    const { ourValuesHeader, ourValuesContent } = req.body

    const update = { ourValuesHeader, ourValuesContent};

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const ourValues = await About.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Our Values Add",
        ourValues
    })


})

exports.updateOurValuesSection = catchAsyncError(async(req,res,next) =>{
    const newValues = {
        ourValuesHeader: req?.body?.ourValuesHeader,
        ourValuesContent: req?.body?.ourValuesContent,
    };

    const ourValues = await About.findByIdAndUpdate(req.params.id, newValues,{
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        message: "Our Values Update",
        ourValues
    })

})

// Get Involved

exports.getInvolvedSection = catchAsyncError(async(req,res,next) =>{

    if (!req.files || !req?.files?.getInvolvedImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const file = req?.files?.getInvolvedImage;

    const getInvolvedImage = await cloudinary.v2.uploader.upload(
        file.tempFilePath, {
        folder: 'MNS/About Us/Involved',
    }
    )

    const { getInvolvedHeader, getInvolvedCaption } = req.body;

    const update = {
        getInvolvedHeader,
        getInvolvedCaption,
        getInvolvedImage:{
            public_id: getInvolvedImage.public_id,
            url: getInvolvedImage.secure_url,
        }
    }

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const involved = await About.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Get Involved Add",
        involved
    })

})

exports.updateGetInvolvedSection = catchAsyncError(async(req,res,next) =>{
    
    const newInvolved = {
        getInvolvedHeader: req?.body?.getInvolvedHeader,
        getInvolvedCaption: req?.body?.getInvolvedCaption,
    }

    if(req.files && req?.files?.getInvolvedImage){
        const getInvolved = await About.findById(req.params.id);

        if(!getInvolved){
            return res.status(404).json({
                success: false,
                message: "Get Involved section not found"
            });
        }

        const imageID = getInvolved.getInvolvedImage.public_id;

        await cloudinary.uploader.destroy(imageID);

        const file = req?.files?.getInvolvedImage;

        const Image = await cloudinary.v2.uploader.upload(
            file.tempFilePath, {
            folder: 'MNS/About Us/Involved',
        }
        )

        newInvolved.image = {
            public_id: Image.public_id,
            url: Image.secure_url,
        }
    }

    const involved = await About.findByIdAndUpdate(req.params.id, newInvolved,{
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        message: "Get Involved Update",
        involved,
    })
})

exports.getAboutPage = catchAsyncError(async(req,res,next) =>{
    const about = await About.find();

    res.status(200).json({
        success: true,
        about,
    })
})