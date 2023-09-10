const mongoose = require('mongoose');

const associationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    bankDetails:{
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
    },
    whatsapp:{
        type: String,
    },
    website:{
        type: String,
    },
    paypalLink:{
        type: String,
    },
    approved:{
        type: Boolean,
        default: false
    },
}, {timestamps: true});

module.exports = mongoose.model('Association', associationSchema);
