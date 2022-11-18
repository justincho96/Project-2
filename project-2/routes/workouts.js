var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
router.get('/new', isLoggedIn, workoutsCtrl.new);

//post
router.post('/', isLoggedIn, workoutsCtrl.create);

router.get('/', isLoggedIn, workoutsCtrl.index);

router.get('/:id', isLoggedIn, workoutsCtrl.show);

router.delete('/:id', workoutsCtrl.delete);

module.exports = router;