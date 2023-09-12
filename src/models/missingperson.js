const mongoose = require('mongoose');

const missingPersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    villageName: {
        type: String,
    },
    location: {
        type: String,
    },
    age: {
        type: String,
    },
    sex: {
        type: String,
    },
    phone : {
        type: String,
        required: true,
    },
    whatsapp : {
        type: String,
    },
    info: {
        type: String,
    },
}, {timestamps: true});

module.exports = mongoose.model('MissingPerson', missingPersonSchema);