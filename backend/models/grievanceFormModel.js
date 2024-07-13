const mongoose = require('mongoose');

const grievanceFormSchema = new mongoose.Schema({
    issue:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message: {
        type: String,
        required: true
    },
    status:{
        type:String,
        default: "Not Contact"
    },
    grievanceId:{
        type:String,
        required:true
    }
},{
    timestamps: true,
})

module.exports = mongoose.model("GrievanceForm", grievanceFormSchema);