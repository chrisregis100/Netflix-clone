/* eslint-disable no-undef */
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { sendMail } = require("../utils/Sendmail");

// connexion des utilisateurs

module.exports.SignIn = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "User not found"});
        }

        const ismatch = await bcrypt.compare(password, user.password);
        if(!ismatch) {
            console.log("password incorrect");
            return res.status(400).json({message: "Password incorrect"});
            
        }
        req.user = user;
        console.log(user);
        
        return res.status(200).json({message: "User connected"});
    } catch (error) {
        return res.status(500).json({message: "Server error", error});
    }
  
};

// inscription dess nouveaux utilisateurs

module.exports.SignUp = async (req, res) => {
    let {email, password} = req.body;
    console.log(email, password);
    
    try {
        if(!email || !password) {
            return res.status(400).json({message: "Please provide email and password"});
        }
        if(password){
            const hashPassword = await bcrypt.hash(password, 10);
            password = hashPassword;
        }
        const user = new User({email, password});
        const token = await user.GenerateTokenAndSave();
        sendMail(email, token);
        console.log("mail envoyé");
        
        await user.save();

        return res.status(200).json({message: "Inscription Successful. Please check your email for confirmation", token});
    } catch (error) {
        return res.status(500).json({message: "Server error", error});
    }
  
};


module.exports.ConfirmMail = async (req, res) => {
    try {
      console.log(req.params);
  
      const user = await User.findOne({
        authTokens: { $elemMatch: { authToken: req.params.token } },
      });
  
      console.log(user);
  
      if (!user) {
        return res.status(400).send({ message: "Invalid link" });
      }
  
      user.ismailVerified = true; 
      await user.save(); 
  
      console.log(user);
  
      return res.status(200).send({ message: "Email verified successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  };
  

/* module.exports.ResetPassword = async (req, res) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "User not found"});
        }
        const token = await user.GenerateTokenAndSave();
        await user.save();
        const info = await sendMail(email);
        return res.status(200).json({message: "Mail sent", token});
    } catch (error) {
        return res.status(500).json({message: "Server error", error});
    }
}; */

// change password

module.exports.ChangePassword = async (req, res) => {
    const {email, password, newPassword} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "User not found"});
        }
        if(password !== newPassword) {
            return res.status(400).json({message: "Passwords do not match"});
        }
        const hashPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashPassword;
        await user.save();
        return res.status(200).json({message: "Password changed"});
    } catch (error) {
        return res.status(500).json({message: "Server error", error});
    }
  
};