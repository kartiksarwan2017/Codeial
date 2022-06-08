const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users_controller');
const homeController = require('../controllers/home_controller');
const { application } = require('express');


console.log('Contact router loaded');

router.get('/account', homeController.account);
router.get('/update', usersController.update);

module.exports = router;