const express = require('express');
const { aboutSection, updateAboutSection, highlightSection, getHomeSection, updatehighlightSection, servicesSection, updateServices, visionSection, updateVisionSection, joinUsSection, updateJoinUsSection, carouselSection } = require('../controllers/homeControllers');
const router = express.Router();


router.route('/create-highlight').post(highlightSection);
router.route('/create-about').post(aboutSection);
router.route('/create-services').post(servicesSection);
router.route('/create-vision').post(visionSection);
router.route('/create-joinus').post(joinUsSection);
router.route('/create-carousel').post(carouselSection);



router.route('/update-highlight/:id').put(updatehighlightSection);
router.route('/update-about/:id').put(updateAboutSection);
router.route('/update-services/:id').put(updateServices);
router.route('/update-vision/:id').put(updateVisionSection)
router.route('/update-joinus/:id').put(updateJoinUsSection);

router.route("/get-home").get(getHomeSection);


module.exports = router; 