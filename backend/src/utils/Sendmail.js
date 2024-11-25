/* eslint-disable no-undef */
const nodemailer = require("nodemailer");


module.exports.sendMail = async (email, token) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APPLI_PASS,
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "Netflix Clone <chrisregiskiki.com>", // sender address
      to: email,
      subject: "Comfirm your email", // Subject line
      text: "Welcome to Netflix Clone. Please confirm your email", // plain text body
      html: `<p style="display:flex ; flex-direction: column" gap: 10px >Please confirm your email</p><p>Click on the link to confirm your email</p><a href="http://localhost:5173/confirmation/${token}" style=" background-color: #f1c40f; padding: 10px 30px; font-size: 20px; border-radius: 30px;">Confirm your email</a>`, // html body
    });

    console.log("Mail send succesfully");
    
  
    return info;
  };