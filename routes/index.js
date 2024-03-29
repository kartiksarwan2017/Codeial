const express = require('express');


const router = express.Router();

const homeController = require('../controllers/home_controller');


console.log('router loaded');


router.get('/', homeController.home);
// router.get('/about', homeController.about);
router.use('/users', require('./users'));
router.use('/contact', require('./contact'));

// for any further routes, access from here
// router.use('/routerName', require('./routerFile'));

module.exports = router;