const express = require('express');
const { servicesHeaderSection, updateServicesHeaderSection, servicesBodySection, updateServicesBodySection, ourServicesSection, updateOurServicesSection } = require('../controllers/servicesControllers');
const router = express.Router();


router.route('/create-servicesHeader').post(servicesHeaderSection);
router.route('/create-servicesBody').post(servicesBodySection);
router.route('/create-ourservices').post(ourServicesSection);


router.route('/update-servicesHeader/:id').put(updateServicesHeaderSection);
router.route('/update-servicesBody/:id').put(updateServicesBodySection);
router.route('/update-ourservices/:id').put(updateOurServicesSection);


module.exports = router;