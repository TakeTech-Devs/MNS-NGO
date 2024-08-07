const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
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
    servicesBodyHeader:{
        type: String,
    },
    servicesBodyContent:{
        type: String,
    },
    ourServicesHeader:{
        type: String,
    },
})

module.exports = mongoose.model("Services", servicesSchema);