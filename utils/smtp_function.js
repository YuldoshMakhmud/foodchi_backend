const nodemailer = require('nodemailer');
const dotenv  = require('dotenv').config();

async function sendEmail(userEmail, message){

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASSWORD,
        }
    });

    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: userEmail,
        subject: "Foodchi Verification Code",
        html: `<h1>Foodchi Email Verification</h1>
               <p>Your verification code is:</p>
               <h2 style="color: blue;">${message}</h2>
               <p>Please enter this code on the verification page to complete your registration process.</p>
               <p>If you did not request this, please ignore this email.</p>`

    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Verification email sent");
    } catch (error) {
        console.log("Email sending failed with an error: ", error);
    }
}

module.exports = sendEmail;