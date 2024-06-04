const express = require('express');
const { aboutSection, updateAboutSection, getAboutSection } = require('../controllers/aboutControllers');
const router = express.Router();

router.route('/create-about').post(aboutSection);
router.route("/get-about").get(getAboutSection);
router.route('/update-about/:id').put(updateAboutSection);



module.exports = router;