
const jwt = require('jsonwebtoken');



const checkToken = (req, res, next) => {
    const authHeader = req.headers.token;
    
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, user) => {
                if (err) {
                    res.status(403).json("Unvalid token");
                }

                // if token valid, assign user to request
                req.user = user;
                console.log(`Authentication successful for user`)
                next();
            }
        );
    } else {
        res.status(401).json("Authentication failed");
    }
}

const checkAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        next();
    } else {
        res.status(403).json("Admin authorisation required");
    }
}

// checkIdentity must always follow checkToken
const checkIdentity = (req, res, next) => {
    if (!req.user) {
        res.status(403).json("Unchecked authentication");
    }

    if (req.user.id == req.params.id) {
        console.log('User identity matched')
        next();
    } else {
        res.status(403).json("Unauthorisation due to identity mismatch");
    }
}

module.exports ={checkToken, checkAdmin, checkIdentity};