// controllers/workout.js
const Workout = require('../models/workout');

module.exports = {
    new: newWorkout,
    create,
    index,
};

function newWorkout(req, res) {
    res.render('workouts/new');
}

function create (req, res) {

}

function index(req, res) {
    Workout.find({}, function(err, movies) {
      if (err) {
        res.redirect("/");
      } 
        res.render("workouts/index", { workouts});
    });
}

