const express = require('express');
const { servicesHeaderSection, servicesBodySection, ourServicesSection, updateOurServicesSection, getServicesPage } = require('../controllers/servicesControllers');
const router = express.Router();


router.route('/create-servicesHeader').post(servicesHeaderSection);
router.route('/create-servicesBody').post(servicesBodySection);
router.route('/create-ourservices').post(ourServicesSection);

router.route('/update-ourservices/:id').put(updateOurServicesSection);

router.route('/get-services').get(getServicesPage);


module.exports = router;