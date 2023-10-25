const {Router} = require("express")
const router = Router();
const CryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post("/register", async (req, res) => {
    
    const {username, email, password } = req.body
    // // check if all credentials are sent 
    // if (!username || !password || !email ) {
    //     res.status(401).json('Credetial missing');
    // }

    // encrypt password before registering in database
    const encrypted_pw = CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET).toString();

    const newUser = new User( { 
        username: username,
        email: email,
        password: encrypted_pw, 
    })

    const accessToken = jwt.sign( 
        { id: newUser._id, isAdmin: newUser.isAdmin},
        process.env.JWT_SECRET,
        { expiresIn: '3d'}
    )

    try {
        const savedUser = await newUser.save();


        res.status(200).json({...savedUser._doc, accessToken});

    } catch (err) {
        res.status(500).json(err);
    }

});

//LOGIN
router.post('/login', async (req, res) => {

    const {username, password } = req.body
    // if (!username || !password || !email ) {
    //     res.status(401).json('Credetial missing');
    // }

    try {
       // check user presence in database
       const user = await User.findOne( {username: username });   

        if (!user) { 
            throw Error('User not found');
        }

        // if user found, check password
        const decripted_pw = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SECRET).toString(CryptoJS.enc.Utf8);
        if (password !== decripted_pw) {
            throw Error('Password not matching');
        }

        // generate access token
        const accessToken = jwt.sign( 
            { id: user._id, isAdmin: user.isAdmin},
            process.env.JWT_SECRET,
            { expiresIn: '3d'}
        )

        //exclude password from content 
        // const {password, ...others} = user._doc;

        res.status(200).json({...user._doc, accessToken})
    } catch (err) {
        res.status(400).json({error : err.message})
    } 
 })



module.exports = router;