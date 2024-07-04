const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const About = require('../models/aboutModel');
const ourValues = require('../models/ourValuesModel');



// Header Section

exports.headerSection = catchAsyncError(async (req, res, next) => {
    if (!req.files || !req?.files?.headerImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - files"
        });
    }

    const file = req?.files?.headerImage;


    const aboutHeaderSection = await About.findOne();

    if (aboutHeaderSection && aboutHeaderSection.headerImage && aboutHeaderSection.headerImage.public_id) {
        try {
            await cloudinary.uploader.destroy(aboutHeaderSection.headerImage.public_id);
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
            folder: 'MNS/About Us/Header',
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
        const updatedAboutHeader = await About.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "About Us Header Updated",
            aboutHeader: updatedAboutHeader,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }
})



// About Image Section


exports.aboutImageSection = catchAsyncError(async(req, res, next) => {
    let images = req?.files?.images;

    if (!images) {
        return res.status(400).json({
            success: false,
            message: "No images uploaded"
        });
    }

    if (!Array.isArray(images)) {
        images = [images];
    }


    if (images.length !== 4) {
        return res.status(400).json({
            success: false,
            message: "Exactly 4 images must be uploaded"
        });
    }


    const aboutSection = await About.findOne();

    if (aboutSection && aboutSection.images) {

        for (const image of aboutSection.images) {
            try {
                await cloudinary.uploader.destroy(image.public_id);
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Error deleting old images",
                    error: error.message,
                });
            }
        }
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const filePath = images[i].tempFilePath || images[i].path;

        if (!filePath) {
            return res.status(400).json({
                success: false,
                message: "File path is missing for image " + (i + 1)
            });
        }

        try {
            const result = await cloudinary.v2.uploader.upload(filePath, {
                folder: 'MNS/About Us/Image',
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error uploading image " + (i + 1),
                error: error.message,
            });
        }
    }

    const update = {
        images: imagesLinks,
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false,
    };

    try {
        const aboutImage = await About.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "About Images Added",
            aboutImage, 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }

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

exports.ourValuesImages = catchAsyncError(async (req,res,next) =>{
    if (!req.files || !req?.files?.image) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const imageFile = req?.files?.image;

    const valueImage = await cloudinary.v2.uploader.upload(imageFile.tempFilePath, {
        folder: 'MNS/About Us/Value Image'
    });

    const { title } = req.body
    
    const valueImageSection = await ourValues.create({
        title,
        image: {
            public_id: valueImage.public_id,
            url: valueImage.secure_url,
        },
    });

    res.status(200).json({
        success: true,
        message: "Value Image Add",
        valueImageSection
    });
})

exports.updateourValuesImages = catchAsyncError(async(req,res,next) =>{
    const newData = {
        title: req?.body?.title,
    };

    const Image = await ourValues.findById(req.params.id);

    if (!Image) {
        return res.status(404).json({
            success: false,
            message: "valueImage section not found"
        });
    }

    if (req.files && req?.files?.image) {
        const imageID = Image.image.public_id;


        if (imageID) {
            await cloudinary.v2.uploader.destroy(imageID);
        }

        const imageFile = req?.files?.image;

        const valueImage = await cloudinary.v2.uploader.upload(imageFile.tempFilePath, {
            folder: 'MNS/About Us/Value Image'
        });

        newData.image = {
            public_id: valueImage.public_id,
            url: valueImage.secure_url,
        };
    }
    const valueImageSection = await ourValues.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        message: "Value Image Update",
        valueImageSection
    });
})



// Get Involved

exports.getInvolvedSection = catchAsyncError(async(req,res,next) =>{

    if (!req.files || !req?.files?.getInvolvedImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - files"
        });
    }

    const file = req?.files?.getInvolvedImage;
    const getInvolvedSection = await About.findOne();

    if (getInvolvedSection && getInvolvedSection.getInvolvedImage && getInvolvedSection.getInvolvedImage.public_id) {
        try {
            await cloudinary.uploader.destroy(getInvolvedSection.getInvolvedImage.public_id);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error deleting old image",
                error: error.message,
            });
        }
    }


    let getInvolvedImage;
    try {
        getInvolvedImage = await cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: 'MNS/About Us/Involved',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error uploading new image",
            error: error.message,
        });
    }

    const { getInvolvedHeader, getInvolvedCaption } = req.body;

    const update = {
        getInvolvedHeader,
        getInvolvedCaption,
        getInvolvedImage: {
            public_id: getInvolvedImage.public_id,
            url: getInvolvedImage.secure_url,
        }
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    try {
        const updatedGetInvolvedSection = await About.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Get Involved Section Updated",
            involved: updatedGetInvolvedSection,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }
})


exports.getAboutPage = catchAsyncError(async(req,res,next) =>{

    const [ about, valueImage ] = await Promise.all([
        About.find(),
        ourValues.find(),
    ]) 

    res.status(200).json({
        success: true,
        about,
        valueImage
    })
})