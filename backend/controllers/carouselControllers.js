const catchAsyncError = require('../middleware/catchAsyncError');
const Carousel = require('../models/carouselModel');
const cloudinary = require('cloudinary');


exports.createCarousel = catchAsyncError(async (req, res, next) => {

  let item = [];
  req.body.items.forEach((s) => {
    item.push(JSON.parse(s))
  });
  req.body.items = item;

  const carousel = await Carousel.create(req.body);

  res.status(201).json({
    success: true,
    carousel,
  });


});

