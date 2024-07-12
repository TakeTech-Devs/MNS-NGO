const express = require('express');
const { grievanceHeaderSection, getGrievancePage, sendGrievance, getMessages, updateGrievanceRequest } = require('../controllers/grievanceControllers');
const router = express.Router();


router.route('/create-grievanceHeader').post( grievanceHeaderSection);
router.route('/create-grievance').post( sendGrievance);



router.route('/update-grievance/:id').put( updateGrievanceRequest);



router.route('/get-grievance').get(getGrievancePage);
router.route('/get-grievanceMessages').get(getMessages);


module.exports = router;