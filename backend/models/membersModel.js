const mongoose = require('mongoose');


const membersSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    details:{
        type: String,
    },
    membersImage:{
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

module.exports = mongoose.model("Members", membersSchema);