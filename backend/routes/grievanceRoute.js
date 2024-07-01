const express = require('express');
const { grievanceHeaderSection, getGrievancePage } = require('../controllers/grievanceControllers');
const router = express.Router();


router.route('/create-grievanceHeader').post( grievanceHeaderSection);


// router.route('/update-grievanceHeader/:id').put(updateGrievanceHeaderSection);

router.route('/get-grievance').get(getGrievancePage);


module.exports = router;