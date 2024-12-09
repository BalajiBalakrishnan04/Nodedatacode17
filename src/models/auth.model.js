const mongoose = require("mongoose");
const { v4 } = require("uuid");

const authSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String
    },
    userId: {
        type: String,
        default: v4
    },
    mobileNo: {
        type: Number
    }
}, 
{
    timestamps: true
}
);


const auth = mongoose.model("auth", authSchema);

module.exports = auth;