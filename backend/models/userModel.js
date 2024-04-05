const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please tell us your email"],
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;