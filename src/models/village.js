const mongoose = require('mongoose');

const villageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    geolocation: {
        type: String,
        required: true,
    },
    phone : {
        type: String,
        required: true,
    },
    whatsapp : {
        type: String,
    },
    needs: {
        type: String,
    },
    approved:{
        type: Boolean,
        default: false
    },
}, {timestamps: true});

module.exports = mongoose.model('Village', villageSchema);