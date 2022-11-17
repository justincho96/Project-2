// controllers/workout.js
const Workout = require('../models/workout');

module.exports = {
    new: newWorkout,
    create,
    index,
    show,
    delete: deleteWorkout,
};

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'New Workout'});
}

function create (req, res) {
  console.log(req.body);
    const workout = new Workout(req.body);
   workout.save(function(err) {
    if (err) return res.redirect('/workouts/new');
    console.log(workout);
    res.redirect('/workouts');
  });
}

function index(req, res) {
    Workout.find({}, function(err, workouts) {
      if (err) {
        console.log(err);
        res.redirect('/');
      } 
        res.render("workouts/index", { title: 'My Workouts', workouts });
    });
}

function show(req, res) {
    Workout.findById(req.params.id, function(err, workout) {
      res.render('workouts/show', { title: 'Workout', workout });
    });
  }

  function deleteWorkout(req, res) {
    Workout.deleteStuff(req.params.id);
    res.redirect('/workouts');
  }
 