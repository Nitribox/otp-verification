require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let otpStore = {}; // Store OTPs for each email

// Email setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// Route to send OTP
app.post('/sendOTP', (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate 4-digit OTP

  otpStore[email] = otp; // Store OTP in-memory

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Your OTP for Email Verification',
    html: `<h2>Your OTP is: ${otp}</h2>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, message: 'Error sending OTP' });
    }
    res.status(200).json({ success: true, message: 'OTP sent successfully' });
  });
});

// Route to verify OTP
app.post('/verifyOTP', (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] === otp) {
    delete otpStore[email]; // Clear OTP after successful verification
    return res.status(200).json({ success: true, message: 'OTP verified successfully' });
  }

  res.status(400).json({ success: false, message: 'Invalid OTP' });
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
