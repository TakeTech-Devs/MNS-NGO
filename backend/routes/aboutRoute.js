const express = require('express');
const { headerSection, ourValuesSection, getInvolvedSection, getAboutPage, aboutImageSection, ourValuesImages, updateourValuesImages } = require('../controllers/aboutControllers');
const router = express.Router();

router.route('/create-aboutHeader').post(headerSection);
router.route('/create-aboutImage').post(aboutImageSection);
router.route('/create-ourValues').post(ourValuesSection);
router.route('/create-ourValuesImage').post(ourValuesImages);
router.route('/create-involved').post(getInvolvedSection);


router.route('/update-ourValuesImage/:id').put(updateourValuesImages);


router.route('/get-about').get(getAboutPage);



module.exports = router;