const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    highlightHeaderFirst: {
        type: String,
        //required: true
    },
    highlightCaptionFirst: {
        type: String,
        //required: true
    },
    highlightHeaderSecond: {
        type: String,
        //required: true
    },
    highlightCaptionSecond: {
        type: String,
        //required: true
    },
    highlightHeaderThird: {
        type: String,
        //required: true
    },
    highlightCaptionThird: {
        type: String,
        //required: true
    },
    aboutHeader: {
        type: String,
        //required: true,
    },
    aboutCaption: {
        type: String,
        //required: true,
    },
    aboutContent: {
        type: String,
        //required: true,
    },
    aboutImage: {
        public_id: {
            type: String,
            //required: true,
            default: null
        },
        url: {
            type: String,
            //required: true,
            default: null
        },
    },
    servicesHeader: {
        type: String,
        //required: true,
    },
    servicesCaption: {
        type: String,
        //required: true,
    },
    visionHeader:{
        type: String,
        //required: true,
    },
    visionCaption:{
        type: String,
        //required: true,
    },
    visionImageFirst:{
        public_id: {
            type: String,
            //required: true,
            default: null
        },
        url: {
            type: String,
            //required: true,
            default: null
        },
    },
    visionHeaderFirst:{
        type: String,
        //required: true,
    },
    visionCaptionFirst:{
        type: String,
        //required: true,
    },
    visionImageSecond:{
        public_id: {
            type: String,
            //required: true,
            default: null
        },
        url: {
            type: String,
            //required: true,
            default: null
        },
    },
    visionHeaderSecond:{
        type: String,
        //required: true,
    },
    visionCaptionSecond:{
        type: String,
        //required: true,
    },
    visionImageThird:{
        public_id: {
            type: String,
            //required: true,
            default: null
        },
        url: {
            type: String,
            //required: true,
            default: null
        },
    },
    visionHeaderThird:{
        type: String,
        //required: true,
    },
    visionCaptionThird:{
        type: String,
        //required: true,
    },
    joinUsHeader:{
        type: String,
        //required: true,
    },
    joinUsCaption:{
        type: String,
        //required: true,
    },
    joinUsImage:{
        public_id: {
            type: String,
            //required: true,
            default: null
        },
        url: {
            type: String,
            //required: true,
            default: null
        },
    }
})

module.exports = mongoose.model("Home", homeSchema);