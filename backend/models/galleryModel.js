const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
    header: {
        type: String,
    },
    caption: {
        type: String,
    },
    headerImage: {
        public_id: {
            type: String,
            default: null
        },
        url: {
            type: String,
            default: null
        },
    },
    galleryHeader:{
        type: String,
    },
    galleryContent:{
        type: String,
    }
});

module.exports = mongoose.model("Gallery", GallerySchema);