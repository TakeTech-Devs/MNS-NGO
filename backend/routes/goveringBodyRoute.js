const express = require('express');
const { headerSection, GoveringBodySection } = require('../controllers/goveringBodyControllers');

const router = express.Router();

router.route('/create-goveringHeader').post(headerSection);
router.route('/create-goveringBody').post(GoveringBodySection);

;



module.exports = router;