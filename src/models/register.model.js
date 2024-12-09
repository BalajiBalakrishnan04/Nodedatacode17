const mongoose = require("mongoose");


const registerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        default: "78621737"
    },
    mobileNo: {
        type: Number
    },
    userId: {
        type: String
    }
},
    {
        timestamps: true
    }
);

const register = mongoose.model("register", registerSchema);


module.exports = register;