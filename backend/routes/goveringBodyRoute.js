const express = require('express');
const { headerSection, GoveringBodySection, getGoveringBodyPage } = require('../controllers/goveringBodyControllers');

const router = express.Router();

router.route('/create-goveringHeader').post(headerSection);
router.route('/create-goveringBody').post(GoveringBodySection);

router.route('/get-goveringBody').get(getGoveringBodyPage);




module.exports = router;