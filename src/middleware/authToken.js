const jwt = require("jsonwebtoken");
const auth = require("../models/auth.model");

const generateToken = (data) => {
    return jwt.sign({ data }, '6edruftsdgyud6w3w5r4e76t73294y23wgievhy', { expiresIn: '1h' }); 
};


const verifyToken =  async (req, res, next) => {
    const token = req.headers.authorization;
     if(!token) return res.status(409).json({message: "token need to login"}) 
    const withoutBearer = token.split(" ")[1];
    try {
        let payload = jwt.verify(withoutBearer, '6edruftsdgyud6w3w5r4e76t73294y23wgievhy');
        const checkUser = await auth.findById(payload.data._id);
        if(!checkUser) return res.status(404).json({message: "user not registred."})
        req.user = checkUser;
        next();
    } catch (error) {
        res.json({
            Error: error.message
        })
    }

}


module.exports = {
    generateToken,
    verifyToken
}