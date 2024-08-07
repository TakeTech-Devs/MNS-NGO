const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Services = require('../models/servicesModel');
const OurServices = require('../models/ourServicesModel');


// Header Section

exports.servicesHeaderSection = catchAsyncError(async (req, res, next) => {
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

        const servicesHeaderSection = await Services.findOne();

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

        update.headerImage = {
            public_id: headerImage.public_id,
            url: headerImage.secure_url,
        };
    }

    try {
        const updatedServicesHeader = await Services.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Services Header Updated",
            servicesHeader: updatedServicesHeader,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }
})



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
    const [services, ourServices] = await Promise.all([
        Services.find(),
        OurServices.find()
    ])

    res.status(200).json({
        success: true,
        services,
        ourServices
    })
})