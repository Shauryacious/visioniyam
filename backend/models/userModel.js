const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: 8,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            validator: function (ele) {
                return ele === this.password;
            },
            message: "Confirm Password does not match",
        },
    },
});

//The middleware will run 'pre' to the 'save' action, i.e. before placing the data into db
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;

    next();
});



userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;