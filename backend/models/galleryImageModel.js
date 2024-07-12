const mongoose = require('mongoose');

const gelleryImageSchema = new mongoose.Schema({
    image:{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model("GelleryImage", gelleryImageSchema)