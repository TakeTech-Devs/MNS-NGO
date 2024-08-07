const express = require('express');
const { addPolicy, addTerms, addMetaData, addSocialLinks, getOther, addWelcomeModal, getWelcomeModal, showWelcomeModal } = require('../controllers/otherControllers.js');
const router = express.Router();

router.route('/create-policy').post(addPolicy);
router.route('/create-terms').post(addTerms);
router.route('/create-metadata').post(addMetaData);
router.route('/create-social').post(addSocialLinks);
router.route('/create-announcement').post(addWelcomeModal);


router.route('/show-announcement/:id').put(showWelcomeModal);


router.route('/get-other').get(getOther);
router.route('/get-announcement').get(getWelcomeModal);



module.exports = router;