// YOU CANNOT SEND EMAILS FROM AZURE WITHOUT THIRD PARTY APPS
// https://stackoverflow.com/questions/58246398/how-do-i-send-email-from-an-azure-function-app

// SEND EMAILS WITH SENDGRID
// https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-sendgrid?tabs=javascript




// this will work only locally
require('dotenv').config();
const nodemailer = require("nodemailer");


// step 1
// transporter to connect to mail services

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// step 2
// mail option

let mailOptions = {
    from: process.env.EMAILFROM,
    to: process.env.EMAILTO,
    subject: "Test test",
    text: "It's a luck"
};

// step 3

// function(err, data) is a callback
transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log("Error occurs", err);
    } else {
        console.log("Email sent!!");
    }
});
