const express = require('express');
const { addPolicy, addTerms, addMetaData, addSocialLinks, getOther } = require('../controllers/otherControllers.js');
const router = express.Router();

router.route('/create-policy').post(addPolicy);
router.route('/create-terms').post(addTerms);
router.route('/create-metadata').post(addMetaData);
router.route('/create-social').post(addSocialLinks);


router.route('/get-other').get(getOther);



module.exports = router;