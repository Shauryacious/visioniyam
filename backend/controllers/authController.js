const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");



const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};


const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

    res.cookie("jwt", token, cookieOptions);

    // Remove password from output
    user.password = undefined;
    if (statusCode == 200) {
        res.status(statusCode).json({
            status_msg: "success",
            status_code: statusCode,
            token,
            data: {
                user,
            },
        });
    }
};


exports.signup = async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    })

    const jwt_token = signToken(newUser._id);
    res.status(200).json({
        status: 'success',
        data: {
            newUser
        },
        jwt_token
    })
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    // Checking for existence of email and password
    if (!email || !password) {
        return next(new AppError("Please provide Email and Password!", 400));
    }

    // Checking if user exists and credentials are correct
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError("Incorrect email or password", 400));
    }
    // if everything is okay, send the token to client
    createSendToken(user, 200, res);
};