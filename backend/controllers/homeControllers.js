const catchAsyncError = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');
const Home = require('../models/homeModel');



// Carousel Section

exports.carouselSection = catchAsyncError(async(req,res,next) =>{
    let images = req.files.carouselImage;

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
            folder: 'MNS/carousel',
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    }

    const { carouselText } = req.body;

    const update = {
        carouselText,
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
        highlight
    });

})


exports.updatehighlightSection = catchAsyncError(async (req, res, next) => {
    const newHighlight = {
        highlightHeaderFirst: req.body.highlightHeaderFirst,
        highlightCaptionFirst: req.body.highlightCaptionFirst,
        highlightHeaderSecond: req.body.highlightHeaderSecond,
        highlightCaptionSecond: req.body.highlightCaptionSecond,
        highlightHeaderThird: req.body.highlightHeaderThird,
        highlightCaptionThird: req.body.highlightCaptionThird,
    }

    const highlight = await Home.findByIdAndUpdate(req.params.id, newHighlight, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        highlight
    });
})

// About Section

exports.aboutSection = catchAsyncError(async (req, res, next) => {

    if (!req.files || !req.files.aboutImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const file = req.files.aboutImage;

    const aboutImage = await cloudinary.v2.uploader.upload(
        file.tempFilePath, {
        folder: 'MNS/about',
    }
    )


    const { aboutHeader, aboutCaption, aboutContent } = req.body;

    const update = {
        aboutHeader,
        aboutCaption,
        aboutContent,
        aboutImage: {
            public_id: aboutImage.public_id,
            url: aboutImage.secure_url,
        }
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };


    const aboutSection = await Home.findOneAndUpdate({}, update, options);



    res.status(200).json({
        success: true,
        aboutSection
    });

})


exports.getHomePage = catchAsyncError(async (req, res, next) => {
    const home = await Home.find();

    res.status(200).json({
        success: true,
        home,
    });
})


exports.updateAboutSection = catchAsyncError(async (req, res, next) => {
    const newAbout = {
        aboutHeader: req.body.aboutHeader,
        aboutCaption: req.body.aboutCaption,
        aboutContent: req.body.aboutContent,
    }

    if (req.files && req.files.aboutImage) {
        const about = await Home.findById(req.params.id);

        // Check if the about section exists
        if (!about) {
            return res.status(404).json({
                success: false,
                message: "About section not found"
            });
        }

        const imageID = about.aboutImage.public_id;

        await cloudinary.uploader.destroy(imageID);

        const file = req.files.aboutImage;

        const Image = await cloudinary.v2.uploader.upload(
            file.tempFilePath, {
            folder: 'MNS/about',
        }
        )

        newAbout.aboutImage = {
            public_id: Image.public_id,
            url: Image.secure_url,
        };
    }

    const about = await Home.findByIdAndUpdate(req.params.id, newAbout, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        about
    });
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
        services
    })

})

exports.updateServices = catchAsyncError(async (req, res, next) => {
    const newServices = {
        servicesHeader: req.body.servicesHeader,
        servicesCaption: req.body.servicesCaption
    };

    const services = await Home.findByIdAndUpdate(req.params.id, newServices, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    })

    res.status(200).json({
        success: true,
        services
    });
})


// Vision Section

exports.visionSection = catchAsyncError(async (req, res, next) => {

    if (!req.files || !req.files.visionImageFirst || !req.files.visionImageSecond || !req.files.visionImageThird) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const file1 = req.files.visionImageFirst;

    const visionImageFirst = await cloudinary.v2.uploader.upload(
        file1.tempFilePath, {
        folder: 'MNS/vision',
    }
    )
    const file2 = req.files.visionImageSecond;

    const visionImageSecond = await cloudinary.v2.uploader.upload(
        file2.tempFilePath, {
        folder: 'MNS/vision',
    }
    )
    const file3 = req.files.visionImageThird;

    const visionImageThird = await cloudinary.v2.uploader.upload(
        file3.tempFilePath, {
        folder: 'MNS/vision',
    }
    )

    const {
        visionHeader,
        visionCaption,
        visionHeaderFirst,
        visionCaptionFirst,
        visionHeaderSecond,
        visionCaptionSecond,
        visionHeaderThird,
        visionCaptionThird
    } = req.body

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
    }

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };


    const visionSection = await Home.findOneAndUpdate({}, update, options);



    res.status(200).json({
        success: true,
        visionSection
    });

})

exports.updateVisionSection = catchAsyncError(async (req, res, next) => {
    const newVision = {
        visionHeader: req.body.visionHeader,
        visionCaption: req.body.visionCaption,
        visionHeaderFirst: req.body.visionHeaderFirst,
        visionCaptionFirst: req.body.visionCaptionFirst,
        visionHeaderSecond: req.body.visionHeaderSecond,
        visionCaptionSecond: req.body.visionCaptionSecond,
        visionHeaderThird: req.body.visionHeaderThird,
        visionCaptionThird: req.body.visionCaptionThird
    }

    if (req.files && req.files.visionImageFirst) {
        const vision = await Home.findById(req.params.id);

        if (!vision) {
            return res.status(404).json({
                success: false,
                message: "Vision section not found"
            });
        }

        const imageID = vision.visionImageFirst.public_id;

       await cloudinary.uploader.destroy(imageID);


        const file = req.files.visionImageFirst;

        const Image = await cloudinary.v2.uploader.upload(
            file.tempFilePath, {
            folder: 'MNS/joinUs',
        }
        )

        newVision.image = {
            public_id: Image.public_id,
            url: Image.secure_url,
        }
    }

    if (req.files && req.files.visionImageSecond) {
        const vision = await Home.findById(req.params.id);

        if (!vision) {
            return res.status(404).json({
                success: false,
                message: "Vision section not found"
            });
        }

        const imageID = vision.visionImageSecond.public_id;

       await cloudinary.uploader.destroy(imageID);


        const file = req.files.visionImageSecond;

        const Image= await cloudinary.v2.uploader.upload(
            file.tempFilePath, {
            folder: 'MNS/vision',
        }
        )

        newVision.image = {
            public_id: Image.public_id,
            url: Image.secure_url,
        }
    }


    if (req.files && req.files.visionImageThird) {
        const vision = await Home.findById(req.params.id);

        if (!vision) {
            return res.status(404).json({
                success: false,
                message: "Vision section not found"
            });
        }

        const imageID = vision.visionImageThird.public_id;

       await cloudinary.uploader.destroy(imageID);


        const file = req.files.visionImageThird;

        const Image = await cloudinary.v2.uploader.upload(
            file.tempFilePath, {
            folder: 'MNS/vision',
        }
        )

        newVision.image = {
            public_id: Image.public_id,
            url: Image.secure_url,
        }
    }




    const vision = await Home.findByIdAndUpdate(req.params.id, newVision, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        vision
    });

})


// Join Us

exports.joinUsSection = catchAsyncError(async(req,res,next) =>{

    if (!req.files || !req.files.joinUsImage) {
        return res.status(400).json({
            success: false,
            message: "Missing required parameter - filess"
        });
    }

    const file = req.files.joinUsImage;

    const joinUsImage = await cloudinary.v2.uploader.upload(
        file.tempFilePath, {
        folder: 'MNS/joinUs',
    }
    )


    const { joinUsHeader, joinUsCaption,  } = req.body;

    const update = {
        joinUsHeader,
        joinUsCaption,
        joinUsImage: {
            public_id: joinUsImage.public_id,
            url: joinUsImage.secure_url,
        }
    };

    const options = {
        new: true,
        upsert: true,
        useFindAndModify: false
    };


    const joinUs = await Home.findOneAndUpdate({}, update, options);



    res.status(200).json({
        success: true,
        joinUs
    });



})


exports.updateJoinUsSection = catchAsyncError(async(req,res,next) =>{
    const newJoinUs = {
        joinUsHeader: req.body.joinUsHeader,
        joinUsCaption: req.body.joinUsCaption,
    };

    if(req.files && req.files.joinUsImage){
        const joinUs = await Home.findById(req.params.id);

        if(!joinUs){
            return res.status(404).json({
                success: false,
                message: "Join Us section not found"
            });
        }

        const imageID = joinUs.joinUsImage.public_id;

        await cloudinary.uploader.destroy(imageID);

        const file = req.files.joinUsImage;

        const Image = await cloudinary.v2.uploader.upload(
            file.tempFilePath, {
            folder: 'MNS/joinUs',
        }
        )

        newJoinUs.image = {
            public_id: Image.public_id,
            url: Image.secure_url,
        }
    }

    const joinUs = await Home.findByIdAndUpdate(req.params.id, newJoinUs, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    })

    res.status(200).json({
        success: true,
        joinUs
    });
})