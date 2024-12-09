const auth = require("../models/auth.model");
const bcrypt = require("bcrypt");
const generatePassword = require("../utils/password");
const sendMailToUser = require("../utils/email");
const { generateToken } = require("../middleware/authToken");



const signup = async (req, res) => {
    try {
        let userData = req.body;
        let checkEmail = await auth.findOne({ email: userData.email });
        if (checkEmail) {
            return res.status(409).json({
                message: "Email Already Exists.."
            })
        };
        const password = '123';
        const hash = await bcrypt.hash(password, 10);
        let data = {
            password: hash,
            ...userData
        }
        const createUser = await auth.create(data);
        await sendMailToUser(userData.email, password, userData.userName);
        res.json(createUser);
    } catch (error) {
        res.json({
            Error: error.message
        })
    }
};


const signIn = async (req, res) => {
    try {
        let userData = req.body;
        let findEmail = await auth.findOne({ email: userData.email });
        if (!findEmail) return res.status(404).json({ message: "user not registred.." });
        let findPassword = bcrypt.compare(userData.password, findEmail.password);
        if (!findPassword) return res.status(404).json({ message: "Incorrect password.." })
        let token = generateToken(findEmail);
        res.json({ token, message:'Login successfully' });
    } catch (error) {
        res.json({
            Error: error.message
        })
    }
}



module.exports = {
    signup,
    signIn
}