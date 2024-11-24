/* eslint-disable no-undef */
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ismailVerified:{
     type:Boolean,
      default:false,
      required:true
  },
  authTokens:[{
    authToken:{
    type:String,
    required:true}
  }]
});

userSchema.methods.GenerateTokenAndSave = async function () {
 const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET);
  this.authTokens.push({ authToken: token });
  await this.save();
  return token;
};


module.exports = mongoose.model("User", userSchema);