const express = require('express');
const router = express.Router();

const association = require('../controllers/association');

module.exports = app => {

    router.post('/apply', association.apply);

    app.use('/', router);

}