const mongoose = require('mongoose');

const GoveringBodySchema = new mongoose.Schema({
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
    goveringBodyHeader:{
        type: String,
    },
    goveringBodyContent:{
        type: String,
    }
});

module.exports = mongoose.model("GoveringBody", GoveringBodySchema);