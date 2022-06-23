const express = require('express');
const { route } = require('.');
const router = express.Router();
const actorsController = require('../controllers/actorsController');


router.get('/actors/list', actorsController.list)
router.get('/actors/detail/:id', actorsController.detail)


module.exports = router;