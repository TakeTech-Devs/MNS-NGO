const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    carouselImage:[
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    carouselText:{
        type: String,
    },
    highlightHeaderFirst: {
        type: String
    },
    highlightCaptionFirst: {
        type: String
    },
    highlightHeaderSecond: {
        type: String
    },
    highlightCaptionSecond: {
        type: String
    },
    highlightHeaderThird: {
        type: String
    },
    highlightCaptionThird: {
        type: String
    },
    aboutHeader: {
        type: String,
    },
    aboutCaption: {
        type: String,
    },
    aboutContent: {
        type: String,
    },
    aboutImage: {
        public_id: {
            type: String,

            default: null
        },
        url: {
            type: String,

            default: null
        },
    },
    servicesHeader: {
        type: String,
    },
    servicesCaption: {
        type: String,
    },
    visionHeader:{
        type: String,
    },
    visionCaption:{
        type: String,
    },
    visionImageFirst:{
        public_id: {
            type: String,

            default: null
        },
        url: {
            type: String,

            default: null
        },
    },
    visionHeaderFirst:{
        type: String,
    },
    visionCaptionFirst:{
        type: String,
    },
    visionImageSecond:{
        public_id: {
            type: String,

            default: null
        },
        url: {
            type: String,

            default: null
        },
    },
    visionHeaderSecond:{
        type: String,
        //required: true,
    },
    visionCaptionSecond:{
        type: String,
    },
    visionImageThird:{
        public_id: {
            type: String,

            default: null
        },
        url: {
            type: String,

            default: null
        },
    },
    visionHeaderThird:{
        type: String,
    },
    visionCaptionThird:{
        type: String,
    },
    joinUsHeader:{
        type: String,
    },
    joinUsCaption:{
        type: String,
    },
    joinUsImage:{
        public_id: {
            type: String,

            default: null
        },
        url: {
            type: String,

            default: null
        },
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Home", homeSchema);