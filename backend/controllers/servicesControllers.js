const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Services = require('../models/servicesModel');

// Header Section

exports.servicesHeaderSection = catchAsyncError(async(req,res,next) =>{
    if (!req.files || !req.files.headerImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const file = req.files.headerImage;

    const headerImage = await cloudinary.v2.uploader.upload(
        file.tempFilePath, {
        folder: 'MNS/Services/Header',
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

    const servicesHeader = await Services.findOneAndUpdate({}, update, options);


    res.status(200).json({
        success: true,
        servicesHeader
    })

})

exports.updateServicesHeaderSection = catchAsyncError(async(req,res,nect)=>{
    const newHeader = {
        header: req.body.header,
        caption: req.body.caption,
    }

    if (req.files && req.files.headerImage) {
        const aboutHeader = await Services.findById(req.params.id);

        const imageID = aboutHeader.headerImage.public_id;
        console.log(imageID)

        await cloudinary.uploader.destroy(imageID);

        const file = req.files.headerImage;

        const Image = await cloudinary.v2.uploader.upload(
            file.tempFilePath, {
            folder: 'MNS/Services/Header',
        }
        )

        newHeader.image = {
            public_id: Image.public_id,
            url: Image.secure_url,
        }
    }

    const servicesHeader = await Services.findByIdAndUpdate(req.params.id, newHeader, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        servicesHeader
    });
});

// Services Body

exports.servicesBodySection = catchAsyncError(async(req,res,next) =>{
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
        servicesBody
    })

})


exports.updateServicesBodySection = catchAsyncError(async(req,res,next) =>{
    const newData = {
        servicesBodyHeader: req.body.servicesBodyHeader,
        servicesBodyContent: req.body.servicesBodyContent
    }

    const servicesBody = await Services.findByIdAndUpdate(req.params.id,newData,{
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        servicesBody
    });
})

// Our Services Section

exports.ourServicesSection = catchAsyncError(async(req, res, next) =>{
    let images = req.files.ourServicesImage;

    if (!images) {
        return res.status(400).json({
            success: false,
            message: "No images uploaded"
        });
    }

    if (!Array.isArray(images)) {
        images = [images];
    }

    const { ourServicesHeader, ourServicesCaption } = req.body;

    if (!ourServicesCaption) {
        return res.status(400).json({
            success: false,
            message: "No captions provided"
        });
    }

    const captions = Array.isArray(ourServicesCaption) ? ourServicesCaption : [ourServicesCaption];

    if (images.length !== captions.length) {
        return res.status(400).json({
            success: false,
            message: "The number of images must be equal to the number of captions"
        });
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i].tempFilePath, {
            folder: 'MNS/Services/services',
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    }

    const update = {
        ourServicesHeader,
        ourServicesImage: imagesLinks,
        ourServicesCaption: captions,
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false,
    };

    const serviceSection = await Services.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        serviceSection,
    });
})


exports.updateOurServicesSection = catchAsyncError(async(req,res,next) =>{
    const { ourServicesHeader, ourServicesCaption } = req.body;
    const newServiceData = {
        ourServicesHeader,
        ourServicesCaption: Array.isArray(ourServicesCaption) ? ourServicesCaption : [ourServicesCaption]
    };

    // Validate that images and captions are both provided and match in length
    if (req.files && req.files.ourServicesImage) {
        let images = req.files.ourServicesImage;
        if (!Array.isArray(images)) {
            images = [images];
        }

        if (images.length !== newServiceData.ourServicesCaption.length) {
            return res.status(400).json({
                success: false,
                message: "The number of images must be equal to the number of captions"
            });
        }

        const service = await Services.findById(req.params.id);

        // Check if the service section exists
        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service section not found"
            });
        }

        // Delete existing images from Cloudinary
        for (const image of service.ourServicesImage) {
            await cloudinary.uploader.destroy(image.public_id);
        }

        // Upload new images to Cloudinary and prepare new image data
        const imagesLinks = [];
        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i].tempFilePath, {
                folder: 'MNS/Services/services',
            });
            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }

        newServiceData.ourServicesImage = imagesLinks;
    }

    const updatedService = await Services.findByIdAndUpdate(req.params.id, newServiceData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        service: updatedService,
    });
})