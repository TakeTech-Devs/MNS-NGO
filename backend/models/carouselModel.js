const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
    items: [
        {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            myFile: {
               type: String,
               required: true
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Carousel', carouselSchema);