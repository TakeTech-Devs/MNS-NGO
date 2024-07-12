const express = require('express');
const { headerSection, ContactSection, getContactPage } = require('../controllers/contactController');


const router = express.Router();

router.route('/create-contactHeader').post(headerSection);
router.route('/create-contact').post(ContactSection);


router.route('/get-contact').get(getContactPage );




module.exports = router;