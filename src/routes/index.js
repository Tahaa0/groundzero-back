const express = require('express');
const router = express.Router();

const association = require('../controllers/association');
const village = require('../controllers/village');
const missingPerson = require('../controllers/missingperson');

module.exports = app => {

    router.post('/village', village.create);
    router.get('/village', village.index);

    router.post('/missingperson', missingPerson.create);
    router.get('/missingperson', missingPerson.index);
    
    app.use('/', router);

}