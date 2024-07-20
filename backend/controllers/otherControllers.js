const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Other = require('../models/otherModel');


exports.addPolicy = catchAsyncError(async (req, res, next) => {
    const { policyHead, policy } = req.body

    const update = { policyHead, policy };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };
    const PrivacyPolicy = await Other.findOneAndUpdate({}, update, options)

    res.status(200).json({
        success: true,
        message: "Privacy Policy Add",
        PrivacyPolicy
    });
})

exports.addTerms = catchAsyncError(async (req, res, next) => {
    const { termsHead, terms } = req.body

    const update = { termsHead, terms };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };
    const TermsofService = await Other.findOneAndUpdate({}, update, options)

    res.status(200).json({
        success: true,
        message: "Terms of Service Add",
        TermsofService
    });
})

exports.addMetaData = catchAsyncError(async (req, res, next) => {
    const { metaTitle } = req.body;

    const update = {
        metaTitle
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    if (req.files && req.files.metaIcon) {
        const file = req.files.metaIcon;

        const metaDataSection = await Other.findOne();

        if (metaDataSection && metaDataSection.metaIcon && metaDataSection.metaIcon.public_id) {
            try {
                await cloudinary.uploader.destroy(metaDataSection.metaIcon.public_id);
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Error deleting old image",
                    error: error.message,
                });
            }
        }


        let metaIcon;
        try {
            metaIcon = await cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'MNS/Meta Data/Meta Icon',
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error uploading new Icon",
                error: error.message,
            });
        }


        update.metaIcon = {
            public_id: metaIcon.public_id,
            url: metaIcon.secure_url,
        };
    }

    const metaData = await Other.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Meta Data Updated",
        metaData,
    });

})

exports.addSocialLinks = catchAsyncError(async (req, res, next) => {
    const { facebookLink, instagramLink, linkedinLink, whatsAppLink } = req.body

    const update = { facebookLink, instagramLink, linkedinLink, whatsAppLink };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };
    const SocialLinks = await Other.findOneAndUpdate({}, update, options)

    res.status(200).json({
        success: true,
        message: "Social Links Add",
        SocialLinks
    });
})


exports.getOther = catchAsyncError(async(req,res,next) =>{
    const other = await Other.find();

    res.status(200).json({
        success: true,
        other,
    })
})