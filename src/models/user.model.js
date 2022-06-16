const { default: mongoose } = require('mongoose');

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique:true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            ]
        }
    },
    { timestamps: true }
);