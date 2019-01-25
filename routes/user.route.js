const express = require('express');

const controller = require('../controllers/users.controller');

let router = express.Router();

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:userId', controller.get);

//post request
router.post('/create', controller.postCreate);

module.exports = router;