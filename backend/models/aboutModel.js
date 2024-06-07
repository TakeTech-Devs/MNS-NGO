const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    header: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        public_id: {
            type: String,
            required: true,
            default: null
        },
        url: {
            type: String,
            required: true,
            default: null
        },
    },
});

module.exports = mongoose.model("About", aboutSchema);