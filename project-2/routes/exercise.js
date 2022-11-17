const express = require('express');
var router = express.Router();
var exerciseCtrl = require('../controllers/exercise');

router.post('/workouts/:id/exercise', exerciseCtrl.create);

module.exports = router;
