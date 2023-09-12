const express = require('express');
const router = express.Router();

const association = require('../controllers/association');
const village = require('../controllers/village');

module.exports = app => {

    router.post('/village', village.create);
    router.get('/village', village.index);
    
    app.use('/', router);

}