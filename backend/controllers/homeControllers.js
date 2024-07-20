const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Home = require('../models/homeModel');
const HomeCarousel = require('../models/homeServicesCarouselModel')
const Menbers = require('../models/membersModel');



// Carousel Section

exports.carouselSection = catchAsyncError(async(req,res,next) =>{
    let images = req?.files?.carouselImage;

    if (!images) {
        return res.status(400).json({
            success: false,
            message: "No images uploaded"
        });
    }

    if (!Array.isArray(images)) {
        images = [images];
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i].tempFilePath, {
            folder: 'MNS/Home/carousel',
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    }

    const { carouselText, carouselCaption } = req.body;

    const update = {
        carouselText,
        carouselCaption,
        carouselImage: imagesLinks,
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false,
    };

    const carouselSection = await Home.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Home Carousel Add",
        carouselSection,
    });

})


// Highlight Section

exports.highlightSection = catchAsyncError(async (req, res, next) => {
    const {
        highlightHeaderFirst,
        highlightCaptionFirst,
        highlightHeaderSecond,
        highlightCaptionSecond,
        highlightHeaderThird,
        highlightCaptionThird
    } = req.body;

    const update = {
        highlightHeaderFirst,
        highlightCaptionFirst,
        highlightHeaderSecond,
        highlightCaptionSecond,
        highlightHeaderThird,
        highlightCaptionThird
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const highlight = await Home.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Highlight Add",
        highlight
    });

})




// About Section

exports.aboutSection = catchAsyncError(async (req, res, next) => {


    const { 
        aboutHeader, 
        aboutCaption, 
        aboutContent 
    } = req.body;

    const update = {
        aboutHeader,
        aboutCaption,
        aboutContent,
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    if (req.files && req.files.aboutImage) {
        const file = req.files.aboutImage;

        const aboutSection = await Home.findOne();
        
        if (aboutSection && aboutSection.aboutImage && aboutSection.aboutImage.public_id) {
            try {
                await cloudinary.uploader.destroy(aboutSection.aboutImage.public_id);
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Error deleting old image",
                    error: error.message,
                });
            }
        }

        
        let aboutImage;
        try {
            aboutImage = await cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'MNS/Home/about',
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error uploading new image",
                error: error.message,
            });
        }

        
        update.aboutImage = {
            public_id: aboutImage.public_id,
            url: aboutImage.secure_url,
        };
    }

    const updatedAboutSection = await Home.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "About Us Section Updated",
        updatedAboutSection,
    });

    // try {
    //     const updatedAboutSection = await Home.findOneAndUpdate({}, update, options);

    //     res.status(200).json({
    //         success: true,
    //         message: "About Us Section Updated",
    //         aboutSection: updatedAboutSection,
    //     });

    // } catch (error) {
    //     res.status(500).json({
    //         success: false,
    //         message: "Error updating the database",
    //         error: error.message,
    //     });
    // }


})




// Services Section

exports.servicesSection = catchAsyncError(async (req, res, next) => {
    const { servicesHeader, servicesCaption } = req.body;

    const update = {
        servicesHeader,
        servicesCaption
    }

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    const services = await Home.findOneAndUpdate({}, update, options);

    res.status(200).json({
        success: true,
        message: "Services Add",
        services
    })

})



exports.servicesCarousel = catchAsyncError(async(req,res,next)=>{
    if (!req.files || !req?.files?.image) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const { title } = req.body;
    const imageFile = req?.files?.image;

    const serviceImage = await cloudinary.v2.uploader.upload(imageFile.tempFilePath, {
        folder: 'MNS/Home/services'
    });
    
    const serviceSection = await HomeCarousel.create({
        title,
        image: {
            public_id: serviceImage.public_id,
            url: serviceImage.secure_url,
        },
    });

    res.status(200).json({
        success: true,
        message: "Services Carousel Image Add",
        serviceSection
    });

})

exports.updateServicesCarousel = catchAsyncError(async(req,res,next) =>{
    const newData = {
        title: req?.body?.title,
    };

    const service = await HomeCarousel.findById(req.params.id);

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
            folder: 'MNS/Home/services'
        });

        newData.image = {
            public_id: serviceImage.public_id,
            url: serviceImage.secure_url,
        };
    }
    const serviceSection = await HomeCarousel.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        message: "Services Carousel Image Update",
        serviceSection
    });
})




// Vision Section

exports.visionSection = catchAsyncError(async (req, res, next) => {

    if (!req.files || !req?.files?.visionImageFirst || !req?.files?.visionImageSecond || !req?.files?.visionImageThird) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - files"
        });
    }

    const file1 = req?.files?.visionImageFirst;
    const file2 = req?.files?.visionImageSecond;
    const file3 = req?.files?.visionImageThird;

    const visionSection = await Home.findOne();


    const deleteOldImage = async (publicId) => {
        if (publicId) {
            try {
                await cloudinary.uploader.destroy(publicId);
            } catch (error) {
                return {
                    success: false,
                    message: "Error deleting old image",
                    error: error.message,
                };
            }
        }
    };

    if (visionSection) {
        await deleteOldImage(visionSection?.visionImageFirst?.public_id);
        await deleteOldImage(visionSection?.visionImageSecond?.public_id);
        await deleteOldImage(visionSection?.visionImageThird?.public_id);
    }

    let visionImageFirst, visionImageSecond, visionImageThird;
    try {
        visionImageFirst = await cloudinary.v2.uploader.upload(file1.tempFilePath, { folder: 'MNS/Home/vision' });
        visionImageSecond = await cloudinary.v2.uploader.upload(file2.tempFilePath, { folder: 'MNS/Home/vision' });
        visionImageThird = await cloudinary.v2.uploader.upload(file3.tempFilePath, { folder: 'MNS/Home/vision' });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error uploading new images",
            error: error.message,
        });
    }

    const {
        visionHeader,
        visionCaption,
        visionHeaderFirst,
        visionCaptionFirst,
        visionHeaderSecond,
        visionCaptionSecond,
        visionHeaderThird,
        visionCaptionThird
    } = req.body;

    const update = {
        visionHeader,
        visionCaption,
        visionImageFirst: {
            public_id: visionImageFirst.public_id,
            url: visionImageFirst.secure_url
        },
        visionHeaderFirst,
        visionCaptionFirst,
        visionImageSecond: {
            public_id: visionImageSecond.public_id,
            url: visionImageSecond.secure_url
        },
        visionHeaderSecond,
        visionCaptionSecond,
        visionImageThird: {
            public_id: visionImageThird.public_id,
            url: visionImageThird.secure_url
        },
        visionHeaderThird,
        visionCaptionThird
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    try {
        const updatedVisionSection = await Home.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Vision Section Updated",
            visionSection: updatedVisionSection,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }

})



// Join Us

exports.joinUsSection = catchAsyncError(async(req,res,next) =>{

    const { joinUsHeader, joinUsCaption } = req.body;

    const update = {
        joinUsHeader,
        joinUsCaption,
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };

    if (req.files && req.files.joinUsImage) {
        const file = req.files.joinUsImage;

        const joinUsSection = await Home.findOne();

        if (joinUsSection && joinUsSection.joinUsImage && joinUsSection.joinUsImage.public_id) {
            try {
                await cloudinary.uploader.destroy(joinUsSection.joinUsImage.public_id);
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Error deleting old image",
                    error: error.message,
                });
            }
        }

        let joinUsImage;
        try {
            joinUsImage = await cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'MNS/Home/joinUs',
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error uploading new image",
                error: error.message,
            });
        }

        update.joinUsImage = {
            public_id: joinUsImage.public_id,
            url: joinUsImage.secure_url,
        };
    }

    try {
        const updatedJoinUsSection = await Home.findOneAndUpdate({}, update, options);

        res.status(200).json({
            success: true,
            message: "Join Us Section Updated",
            joinUs: updatedJoinUsSection,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating the database",
            error: error.message,
        });
    }


})


//Member Section

exports.membersSection = catchAsyncError(async(req,res,next) =>{
    const { name, details } = req.body;
    const membersImage = req?.files?.membersImage;

    const MemberImage = await cloudinary.v2.uploader.upload(membersImage.tempFilePath,{
        folder: 'MNS/Home/members',
    })

    const memberSection = await Menbers.create({
        name,
        details,
        membersImage: {
            public_id: MemberImage.public_id,
            url: MemberImage.secure_url,
        }
    })

    res.status(200).json({
        success: true,
        message: "Member Add",
        member: memberSection,
    })
})


exports.updateMember = catchAsyncError(async(req,res,next) =>{
    const newData = {
        name: req?.body?.name,
        details: req?.body?.details,
    }

    const member = await Menbers.findById(req.params.id);

    if(!member){
        return res.status(404).json({
            success: false,
            message: "Member not found"
        });
    }

    if(req.files && req?.files?.membersImage){
        const imageID = member.membersImage.public_id;

        if (imageID){
            await cloudinary.v2.uploader.destroy(imageID);
        }

        const membersImage = req?.files?.membersImage;

        const MemberImage = await cloudinary.v2.uploader.upload(membersImage.tempFilePath,{
            folder: 'MNS/Home/members',
        })

        newData.membersImage = {
            public_id: MemberImage.public_id,
            url: MemberImage.secure_url,
        }
    }

    const memberSection = await Menbers.findByIdAndUpdate(req.params.id, newData,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        message: "Member Update",
        member: memberSection,
    })
})

exports.deleteMember = catchAsyncError(async(req,res,next) =>{
    const member = await Menbers.findById(req.params.id);

    if(!member){
        return res.status(404).json({
            success: false,
            message: "Member not found"
        });
    }
    if(req.files && req?.files?.membersImage){
        const imageID = member.membersImage.public_id;

        if (imageID){
            await cloudinary.v2.uploader.destroy(imageID);
        }
    }

    await member.deleteOne({ _id: req.params.id });

    res.status(200).json({
        success: true,
        message: "Member Delete",
    })
})


exports.getHomePage = catchAsyncError(async (req, res, next) => {
    const [home, homeCarousel, member] = await Promise.all([
        Home.find(),
        HomeCarousel.find(),
        Menbers.find(),
    ]);

    res.status(200).json({
        success: true,
        home,
        homeCarousel,
        member
    })
})
