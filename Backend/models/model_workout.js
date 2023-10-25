const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    reps: {
        type: Number,
        required: true
    },

    load: {
        type: Number,
        required: true
    },

}, { timestamps: true}
  
)

WorkoutModel = mongoose.model('Workout', workoutSchema);

module.exports = WorkoutModel