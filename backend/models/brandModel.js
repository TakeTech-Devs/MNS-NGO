const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brandName:{
        type: String,
    },
    brandImage:{
        public_id: {
            type: String,
            default: null,
        },
        url: {
            type: String,
            default: null,
        }
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Brand", brandSchema);