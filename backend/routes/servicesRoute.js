const express = require('express');
const { servicesHeaderSection, updateServicesHeaderSection, servicesBodySection, updateServicesBodySection } = require('../controllers/servicesControllers');
const router = express.Router();


router.route('/create-servicesHeader').post(servicesHeaderSection);
router.route('/create-servicesBody').post(servicesBodySection);


router.route('/update-servicesHeader/:id').put(updateServicesHeaderSection);
router.route('/update-servicesBody/:id').put(updateServicesBodySection);


module.exports = router;