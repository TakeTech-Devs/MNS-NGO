const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Services = require('../models/servicesModel');
const OurServices = require('../models/ourServicesModel');


// Header Section

exports.servicesHeaderSection = catchAsyncError(async (req, res, next) => {
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

exports.updateServicesHeaderSection = catchAsyncError(async (req, res, nect) => {
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
        servicesBody
    })

})


exports.updateServicesBodySection = catchAsyncError(async (req, res, next) => {
    const newData = {
        servicesBodyHeader: req.body.servicesBodyHeader,
        servicesBodyContent: req.body.servicesBodyContent
    }

    const servicesBody = await Services.findByIdAndUpdate(req.params.id, newData, {
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

exports.ourServicesSection = catchAsyncError(async (req, res, next) => {

    if (!req.files || !req.files.image) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const { title, description } = req.body;
    const imageFile = req.files.image;

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
        serviceSection
    });


})


exports.updateOurServicesSection = catchAsyncError(async (req, res, next) => {
    const newData = {
        title: req.body.title,
        description: req.body.description
    };

    const service = await OurServices.findById(req.params.id);

    if (!service) {
        return res.status(404).json({
            success: false,
            message: "Service section not found"
        });
    }

    if (req.files && req.files.image) {
        const imageID = service.image.public_id;


        if (imageID) {
            await cloudinary.v2.uploader.destroy(imageID);
        }

        const imageFile = req.files.image;

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
        serviceSection
    });

})