const express = require('express')

const router = express.Router()

const {
    getAllWorkout,
    getOneWorkout,
    createWorkout,
    deleteOneWorkout,
    modifyOneWorkout
} = require('../controllers/controller_workout')


router.get("/", getAllWorkout)

router.get('/:id', getOneWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteOneWorkout)

router.patch('/:id', modifyOneWorkout)

module.exports = router