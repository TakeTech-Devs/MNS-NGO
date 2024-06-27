const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
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
    phone:{
        type: String,
    },
    email:{
        type: String,
    }
});

module.exports = mongoose.model("Contact", ContactSchema);