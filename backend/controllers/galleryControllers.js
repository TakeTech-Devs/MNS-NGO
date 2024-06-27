const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Gallery = require("../models/galleryModel");
const GalleryImage = require('../models/galleryImageModel')


// Header Section

exports.headerSection = catchAsyncError(async (req, res, next) => {
    if (!req.files || !req?.files?.headerImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - files"
        });
    }

    const file = req?.files?.headerImage;

    const gelleryHeader = await Gallery.findOne();

    if (gelleryHeader && gelleryHeader.headerImage && gelleryHeader.headerImage.public_id) {
        try {
            await cloudinary.uploader.destroy(gelleryHeader.headerImage.public_id);
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
            folder: 'MNS/Gallery/Header',
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
        useFindAndModify: false,
    };

    try {
        const updatedGalleryHeader = await Gallery.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Gallery Header Added",
            gelleryHeader: updatedGalleryHeader,
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

// GoveringBody body section 

exports.GalleryBodySection = catchAsyncError(async(req,res,next) =>{
    const { galleryHeader, galleryContent } = req.body;

    const update = {
        galleryHeader,
        galleryContent
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const galleryBody = await Gallery.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Gallery Body Add",
        galleryBody
    })

})


// Gallery Image Section

exports.galleryImageSection = catchAsyncError(async(req,res,next)=>{
    if (!req.files || !req?.files?.image) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const imageFile = req?.files?.image;

    const galleryImage = await cloudinary.v2.uploader.upload(imageFile.tempFilePath, {
        folder: 'MNS/Gallery/Image'
    });
    
    const gallertImageSection = await GalleryImage.create({
        image: {
            public_id: galleryImage.public_id,
            url: galleryImage.secure_url,
        },
    });

    res.status(200).json({
        success: true,
        message: "Gallery Image Add",
        gallertImageSection
    });

})

exports.updateGalleryImage = catchAsyncError(async(req,res,next) =>{
    const newData = {
        title: req?.body?.title,
    };

    const gellery = await GalleryImage.findById(req.params.id);

    if (!gellery) {
        return res.status(404).json({
            success: false,
            message: "Gellery section not found"
        });
    }

    if (req.files && req?.files?.image) {
        const imageID = gellery.image.public_id;


        if (imageID) {
            await cloudinary.v2.uploader.destroy(imageID);
        }

        const imageFile = req?.files?.image;

        const galleryImage = await cloudinary.v2.uploader.upload(imageFile.tempFilePath, {
            folder: 'MNS/Gallery/Image'
        });

        newData.image = {
            public_id: galleryImage.public_id,
            url: galleryImage.secure_url,
        };
    }
    const gallertImageSection = await GalleryImage.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        message: "Gallery Image Update",
        gallertImageSection
    });
})

exports.getGalleryPage = catchAsyncError(async(req,res,next) =>{
    const [gallery, galleryImages] = await Promise.all([
        Gallery.find(),
        GalleryImage.find()
    ]);

    res.status(200).json({
        success: true,
        gallery,
        galleryImages,
    });
})