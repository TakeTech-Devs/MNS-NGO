const express = require('express');
const { headerSection, GalleryBodySection, galleryImageSection, updateGalleryImage, getGalleryPage } = require('../controllers/galleryControllers');

const router = express.Router();

router.route('/create-galleryHeader').post(headerSection);
router.route('/create-galleryBody').post(GalleryBodySection);
router.route('/create-galleryImage').post(galleryImageSection);

router.route('/update-galleryImage/:id').put(updateGalleryImage);

router.route('/get-gallery').get(getGalleryPage );




module.exports = router;