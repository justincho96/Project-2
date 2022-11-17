const mongoose = require ('mongoose');
const workouts = require('../controllers/workouts');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
        content: String,
        reps: Number,
        sets: Number,
    });
	
const workoutSchema = new Schema({
  title: String,
  description: String,
  workoutName: String,
  exercise: [exerciseSchema],
});

module.exports = mongoose.model('Workout', workoutSchema);

module.exports = {
    deleteStuff,
}

function deleteStuff(id) {
id = parseInt(id);
const idx = workouts.findIndex(workout => workout.id === id);
workouts.splice(idx, 1);
}