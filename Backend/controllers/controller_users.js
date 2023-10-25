// const bcrypt = require("bcrypt")
// const jsonWebToken = require("jsonwebtoken")
// const validator = require("validator")
const UserModel = require("../1_model/userModel")


const loginController = async (req, res) => {
    res.json({msg: ' login user'})
}

const signupController = async (req, res) => {
    res.json({msg: 'signup user'})
}

module.exports = {loginController, signupController}