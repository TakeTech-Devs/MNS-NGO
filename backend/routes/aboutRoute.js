const express = require('express');
const { headerSection, updateHeaderSection, updateOurStorySection, ourValuesSection, updateOurValuesSection, getInvolvedSection, updateGetInvolvedSection, getAboutPage, aboutImageSection } = require('../controllers/aboutControllers');
const router = express.Router();

router.route('/create-aboutHeader').post(headerSection);
router.route('/create-aboutImage').post(aboutImageSection);
router.route('/create-ourValues').post(ourValuesSection);
router.route('/create-involved').post(getInvolvedSection);


router.route('/update-aboutHeader/:id').put(updateHeaderSection);
// router.route('/update-ourStory/:id').put(updateOurStorySection);
router.route('/update-ourValues/:id').put(updateOurValuesSection);
router.route('/update-involved/:id').put(updateGetInvolvedSection);

router.route('/get-about').get(getAboutPage);



module.exports = router;