const express = require('express');
const { aboutSection, highlightSection, servicesSection, visionSection, joinUsSection, carouselSection, getHomePage, servicesCarousel, updateServicesCarousel } = require('../controllers/homeControllers');
const router = express.Router();


router.route('/create-highlight').post(highlightSection);
router.route('/create-about').post(aboutSection);
router.route('/create-services').post(servicesSection);
router.route('/create-servicesCarousel').post(servicesCarousel);
router.route('/create-vision').post(visionSection);
router.route('/create-joinus').post(joinUsSection);
router.route('/create-carousel').post(carouselSection);


router.route('/update-servicesCarousel/:id').put(updateServicesCarousel);


router.route("/get-home").get(getHomePage);


module.exports = router; 