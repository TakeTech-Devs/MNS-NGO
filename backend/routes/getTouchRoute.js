const express = require('express');
const { getTouch, getMessages } = require('../controllers/getTouchControllers');
const router = express.Router();


router.route('/create-touch').post(getTouch);
router.route('/get-touch').get(getMessages);


module.exports = router;