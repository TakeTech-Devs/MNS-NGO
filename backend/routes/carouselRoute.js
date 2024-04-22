const express = require('express');
const { createCarousel } = require('../controllers/carouselControllers');

const router = express.Router();

router.route('/create-carousel').post(createCarousel);

module.exports = router;