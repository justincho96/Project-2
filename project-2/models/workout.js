const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
	
const workoutSchema = new Schema({
  title: String,
  Reps: Number,
  Excercise: String,
});

module.exports = mongoose.model('Workout', workoutSchema);
