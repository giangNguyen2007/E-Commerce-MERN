const WorkoutModel = require('../models/model_workout')
const mongoose = require('mongoose');

// function to get all workouts
const getAllWorkout = async (req, res) => {
    try {
        workouts = await WorkoutModel.find()
        if (!workouts) {
            throw Error('No workout found')
        }
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// function to get all workouts
const getOneWorkout = async (req, res) => {
    // extraction
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'unvalid id'})
    }

    console.log(id)
    try {
        workout = await WorkoutModel.findById(id)
        if (!workouts) {
            throw Error('No workout found')
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// function to add workout
const createWorkout = async (req, res) => {
    console.log(req.body)
    try {
        const workout = await WorkoutModel.create(req.body)

        if (!workout) {
            throw Error('Insertion fail, input data format not valide')
        }

        console.log("Insertion success, new member added in workout database")
        res.status(200).json(workout)

    } catch (error){
        res.status(400).json({error: error.message})
    }
}

const deleteOneWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'unvalid id'})
    }
   
    try {
        workout = await WorkoutModel.findByIdAndRemove(req.params.id)

        if (!workout) {
            throw Error('Workout not found')
        }

        res.status(200).json(workout)
        console.log(`Deletion successful for workout:`)
        console.log(workout)


    } catch (error){
        res.status(400).json({error: error.message})
    }
}

const modifyOneWorkout = async (req, res) => {
    const {id} = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'unvalid id'})
    }

    try {
        workout = await WorkoutModel.findByIdAndUpdate({_id : id}, {...req.body})

        if (!workout) {
            throw Error('Modification failed')
        }
        res.status(200).json(workout)
        console.log(`Update successful for workout:`)
        console.log(workout)
        
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getAllWorkout,
    getOneWorkout,
    createWorkout,
    deleteOneWorkout,
    modifyOneWorkout
}