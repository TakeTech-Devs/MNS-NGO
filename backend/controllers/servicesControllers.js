const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Services = require('../models/servicesModel');
const OurServices = require('../models/ourServicesModel');


// Header Section

exports.servicesHeaderSection = catchAsyncError(async (req, res, next) => {
    if (!req.files || !req?.files?.headerImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - files"
        });
    }

    const file = req?.files?.headerImage;

    // Fetch the existing servicesHeader section
    const servicesHeaderSection = await Services.findOne();

    // Delete the old image if it exists
    if (servicesHeaderSection && servicesHeaderSection.headerImage && servicesHeaderSection.headerImage.public_id) {
        try {
            await cloudinary.uploader.destroy(servicesHeaderSection.headerImage.public_id);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error deleting old image",
                error: error.message,
            });
        }
    }

    // Upload the new image
    let headerImage;
    try {
        headerImage = await cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: 'MNS/Services/Header',
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
        const updatedServicesHeader = await Services.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Services Header Updated",
            servicesHeader: updatedServicesHeader,
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

// exports.updateServicesHeaderSection = catchAsyncError(async (req, res, nect) => {
//     const newHeader = {
//         header: req?.body?.header,
//         caption: req?.body?.caption,
//     }

//     if (req.files && req?.files?.headerImage) {
//         const aboutHeader = await Services.findById(req.params.id);

//         const imageID = aboutHeader.headerImage.public_id;
//         console.log(imageID)

//         await cloudinary.uploader.destroy(imageID);

//         const file = req?.files?.headerImage;

//         const Image = await cloudinary.v2.uploader.upload(
//             file.tempFilePath, {
//             folder: 'MNS/Services/Header',
//         }
//         )

//         newHeader.image = {
//             public_id: Image.public_id,
//             url: Image.secure_url,
//         }
//     }

//     const servicesHeader = await Services.findByIdAndUpdate(req.params.id, newHeader, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: true,
//     })

//     res.status(200).json({
//         success: true,
//         message: "Services Header Updated",
//         servicesHeader
//     });
// });

// Services Body

exports.servicesBodySection = catchAsyncError(async (req, res, next) => {
    const { servicesBodyHeader, servicesBodyContent } = req.body;

    const update = {
        servicesBodyHeader,
        servicesBodyContent
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const servicesBody = await Services.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Services Body Add",
        servicesBody
    })

})


// exports.updateServicesBodySection = catchAsyncError(async (req, res, next) => {
//     const newData = {
//         servicesBodyHeader: req?.body?.servicesBodyHeader,
//         servicesBodyContent: req?.body?.servicesBodyContent
//     }

//     const servicesBody = await Services.findByIdAndUpdate(req.params.id, newData, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: true,
//     })

//     res.status(200).json({
//         success: true,
//         message: "Services Body Updated",
//         servicesBody
//     });
// })

// Our Services Section

exports.ourServicesSection = catchAsyncError(async (req, res, next) => {

    if (!req.files || !req?.files?.image) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const { title, description } = req.body;
    const imageFile = req?.files?.image;

    const serviceImage = await cloudinary.v2.uploader.upload(imageFile.tempFilePath, {
        folder: 'MNS/Services/services'
    });

    const serviceSection = await OurServices.create({
        title,
        description,
        image: {
            public_id: serviceImage.public_id,
            url: serviceImage.secure_url,
        },
    });

    res.status(200).json({
        success: true,
        message: "Our Services Section Created",
        serviceSection
    });


})


exports.updateOurServicesSection = catchAsyncError(async (req, res, next) => {
    const newData = {
        title: req?.body?.title,
        description: req?.body?.description
    };

    const service = await OurServices.findById(req.params.id);

    if (!service) {
        return res.status(404).json({
            success: false,
            message: "Service section not found"
        });
    }

    if (req.files && req?.files?.image) {
        const imageID = service.image.public_id;


        if (imageID) {
            await cloudinary.v2.uploader.destroy(imageID);
        }

        const imageFile = req?.files?.image;

        const serviceImage = await cloudinary.v2.uploader.upload(imageFile.tempFilePath, {
            folder: 'MNS/Services/services'
        });

        newData.image = {
            public_id: serviceImage.public_id,
            url: serviceImage.secure_url,
        };
    }
    const serviceSection = await OurServices.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        message: "Service section updated ",
        serviceSection
    });

})

exports.getServicesPage = catchAsyncError(async(req,res,next) =>{
    const services = await Services.find();

    res.status(200).json({
        success: true,
        services,
    })
})