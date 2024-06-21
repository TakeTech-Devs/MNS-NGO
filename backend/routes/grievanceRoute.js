const express = require('express');
const { grievanceHeaderSection, updateGrievanceHeaderSection, grievanceBodySection, updateGrievanceBodySection, getGrievancePage } = require('../controllers/grievanceControllers');
const router = express.Router();


router.route('/create-grievanceHeader').post( grievanceHeaderSection);
router.route('/create-grievanceBody').post( grievanceBodySection);


router.route('/update-grievanceHeader/:id').put(updateGrievanceHeaderSection);
router.route('/update-grievanceBody/:id').put(updateGrievanceBodySection);

router.route('/get-grievance').get(getGrievancePage);


module.exports = router;