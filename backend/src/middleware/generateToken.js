/* eslint-disable no-undef */

const jwt = require("jsonwebtoken");
// function to generate token 

module.exports.GenerateToken = async (req, res, next) => {
    const token = jwt.sign({ user: req.user._id }, process.env.JWT_SECRET);
    console.log(token);
    
    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    next();
};