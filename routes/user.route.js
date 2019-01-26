const express = require('express');

const controller = require('../controllers/users.controller');
const authMiddelware = require('../middlewares/auth.middleware');

let router = express.Router();

router.get('/', authMiddelware.requireAuth, controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:userId', controller.get);

//post request
router.post('/create', controller.postCreate);

module.exports = router;