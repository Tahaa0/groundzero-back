const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema({
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
    associationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Association',
        required: true
    },
    feed:{
        type: Array,
        default: []
    },
}, {timestamps: true});

module.exports = mongoose.model('Operation', operationSchema);