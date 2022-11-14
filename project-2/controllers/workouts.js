// controllers/workout.js
const Workout = require('../models/workout');

module.exports = {
    new: newWorkout,
    create,
    index,
};

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'New Workout'});
}

function create (req, res) {
req.body.complete = !!req.body.complete;
  if (req.body.exercise) req.body.exercise = req.body.exercise.split(/\s*,\s*/);
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

