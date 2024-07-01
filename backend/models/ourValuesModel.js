const mongoose = require('mongoose');

const ourValuesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
})

module.exports = mongoose.model("ourValues", ourValuesSchema);