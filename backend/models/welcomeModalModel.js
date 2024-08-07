const mongoose = require('mongoose');

const welcomeSchema  = new mongoose.Schema({
    title:{
        type: String
    },
    announcement:{
        type: String
    },
    show: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Welcome", welcomeSchema);