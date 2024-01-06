const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) =>{
    const JWT_SECRECT = 'manuss'
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({message:'Access denied. Token not provided'});
    }

    try {
        const decoded = jwt.verify(token,JWT_SECRECT);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({message:'Invalid token'})
    }

}

module.exports = verifyToken;