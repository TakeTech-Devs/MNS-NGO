const mongoose = require('mongoose');

const otherSchema  = new mongoose.Schema({
    policyHead:{
        type:String,
    },
    policy:{
        type:String,
    },
    termsHead:{
        type:String,
    },
    terms:{
        type:String,
    },
    metaTitle:{
        type:String,
    },
    metaIcon:{
        public_id: {
            type: String,
            default: null
        },
        url: {
            type: String,
            default: null
        },
    },
    facebookLink:{
        type:String,
    },
    instagramLink:{
        type:String,
    },
    linkedinLink:{
        type:String,
    },
    whatsAppLink:{
        type:String,
    },

})

module.exports = mongoose.model("Other", otherSchema);