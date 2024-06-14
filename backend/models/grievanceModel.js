const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
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
    grievanceBodyHeader:{
        type: String,
    },
    grievanceBodyContent:{
        type: String,
    }
})

module.exports = mongoose.model("Grievance", grievanceSchema);