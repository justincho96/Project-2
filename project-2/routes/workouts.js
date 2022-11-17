var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

/* GET users listing. */
router.get('/new', workoutsCtrl.new);

//post
router.post('/', workoutsCtrl.create);

router.get('/', workoutsCtrl.index);

router.get('/:id', workoutsCtrl.show);

router.delete('/:id', workoutsCtrl.delete);

module.exports = router;