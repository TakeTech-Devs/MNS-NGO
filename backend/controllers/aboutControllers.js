const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const About = require('../models/aboutModel');

// Create About Section

exports.aboutSection = catchAsyncError(async(req,res,next) => {

    const aboutImage = await cloudinary.v2.uploader.upload(
        req.body.image,{
            folder: 'about',
        }
    )

    const { header, caption, content } = req.body;

    const about = await About.create({
        header,
        caption,
        content,
        image:{
            public_id: aboutImage.public_id,
            url: aboutImage.secure_url,
        },
    });

    res.status(200).json({
        success: true,
        about
    });

})

exports.getAboutSection = catchAsyncError(async(req,res,next) =>{
    const about = await About.find();

    res.status(200).json({
        success: true,
        about,
    });
})

exports.updateAboutSection = catchAsyncError(async(req, res, next) =>{
    const newData = {
        header: req.body.header,
        caption: req.body.caption,
        content: req.body.content,
    }

    if(req.body.image !==""){
        const about = await About.findById(req.params.id);

        const imageID = about.image.public_id;

        await cloudinary.v2.uploader.destroy(imageID);

        const aboutImage = await cloudinary.v2.uploader.upload(
            req.body.image,{
                folder: 'about',
            }
        )

        newData.image = {
            public_id: aboutImage.public_id,
            url: aboutImage.secure_url,
        }
    }

    const about = await About.findByIdAndUpdate(req.params.id, newData,{
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        about
    });
})