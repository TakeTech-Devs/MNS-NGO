const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
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
    images: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }
        }
    ],
    ourValuesHeader: {
        type: String,
    },
    ourValuesContent: {
        type: String,
    },
    getInvolvedHeader: {
        type: String,
    },
    getInvolvedCaption: {
        type: String,
    },
    getInvolvedImage: {
        public_id: {
            type: String,

            default: null
        },
        url: {
            type: String,

            default: null
        },
    },
});

module.exports = mongoose.model("About", aboutSchema);