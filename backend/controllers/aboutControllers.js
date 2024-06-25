const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const About = require('../models/aboutModel');



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
        console.error("Error updating the database: ", error);
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }
})

// exports.updateHeaderSection = catchAsyncError(async (req, res, next) => {
//     const newHeader = {
//         header: req?.body?.header,
//         caption: req?.body?.caption,
//     }

//     if (req.files && req?.files?.headerImage) {
//         const aboutHeader = await About.findById(req.params.id);

//         const imageID = aboutHeader.headerImage.public_id;
//         console.log(imageID)

//         await cloudinary.uploader.destroy(imageID);

//         const file = req?.files?.headerImage;

//         const Image = await cloudinary.v2.uploader.upload(
//             file.tempFilePath, {
//             folder: 'MNS/About Us/Header',
//         }
//         )

//         newHeader.image = {
//             public_id: Image.public_id,
//             url: Image.secure_url,
//         }
//     }

//     const header = await About.findByIdAndUpdate(req.params.id, newHeader, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: true,
//     })

//     res.status(200).json({
//         success: true,
//         message: "About Us Header Update",
//         header
//     });


// })


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
                console.log(`Deleted old image with public_id: ${image.public_id}`);
            } catch (error) {
                console.error(`Error deleting image with public_id: ${image.public_id}`, error);
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
        console.log(`Image ${i + 1} tempFilePath: ${filePath}`);

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
            console.log(`Uploaded image ${i + 1}: `, result);

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        } catch (error) {
            console.error(`Error uploading image ${i + 1}: `, error);
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
        console.error("Error updating the database: ", error);
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

// exports.updateOurValuesSection = catchAsyncError(async(req,res,next) =>{
//     const newValues = {
//         ourValuesHeader: req?.body?.ourValuesHeader,
//         ourValuesContent: req?.body?.ourValuesContent,
//     };

//     const ourValues = await About.findByIdAndUpdate(req.params.id, newValues,{
//         new: true,
//         runValidators: true,
//         useFindAndModify: true,
//     })

//     res.status(200).json({
//         success: true,
//         message: "Our Values Update",
//         ourValues
//     })

// })

// Get Involved

exports.getInvolvedSection = catchAsyncError(async(req,res,next) =>{

    if (!req.files || !req?.files?.getInvolvedImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - files"
        });
    }

    const file = req?.files?.getInvolvedImage;

    // Fetch the existing getInvolved section
    const getInvolvedSection = await About.findOne();

    // Delete the old image if it exists
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

    // Upload the new image
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
        console.error("Error updating the database: ", error);
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }
})

// exports.updateGetInvolvedSection = catchAsyncError(async(req,res,next) =>{
    
//     const newInvolved = {
//         getInvolvedHeader: req?.body?.getInvolvedHeader,
//         getInvolvedCaption: req?.body?.getInvolvedCaption,
//     }

//     if(req.files && req?.files?.getInvolvedImage){
//         const getInvolved = await About.findById(req.params.id);

//         if(!getInvolved){
//             return res.status(404).json({
//                 success: false,
//                 message: "Get Involved section not found"
//             });
//         }

//         const imageID = getInvolved.getInvolvedImage.public_id;

//         await cloudinary.uploader.destroy(imageID);

//         const file = req?.files?.getInvolvedImage;

//         const Image = await cloudinary.v2.uploader.upload(
//             file.tempFilePath, {
//             folder: 'MNS/About Us/Involved',
//         }
//         )

//         newInvolved.image = {
//             public_id: Image.public_id,
//             url: Image.secure_url,
//         }
//     }

//     const involved = await About.findByIdAndUpdate(req.params.id, newInvolved,{
//         new: true,
//         runValidators: true,
//         useFindAndModify: true,
//     })

//     res.status(200).json({
//         success: true,
//         message: "Get Involved Update",
//         involved,
//     })
// })

exports.getAboutPage = catchAsyncError(async(req,res,next) =>{
    const about = await About.find();

    res.status(200).json({
        success: true,
        about,
    })
})