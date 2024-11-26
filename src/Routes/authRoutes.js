/*const express = require('express');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const pool = require('../config/db');

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword],
      (err, result) => {
        if (err) return res.status(500).json({ success: false, message: 'Error registering user.' });
        res.status(200).json({ success: true, message: 'User registered successfully.' });
      }
    );
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error during registration.' });
  }
});

// User login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  pool.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    async (err, result) => {
      if (err) return res.status(500).json({ success: false, message: 'Error logging in.' });

      if (result.length === 0) {
        return res.status(400).json({ success: false, message: 'User not found.' });
      }

      const isPasswordCorrect = await bcrypt.compare(password, result[0].password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ success: false, message: 'Invalid password.' });
      }

      res.status(200).json({ success: true, message: 'Login successful.' });
    }
  );
});

// Forgot password (send OTP via email)
router.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  pool.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error finding user.' });

    if (result.length === 0) {
      return res.status(400).json({ success: false, message: 'User not found.' });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Password Reset OTP',
      text: `Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ success: false, message: 'Error sending OTP.' });
      }
      res.status(200).json({ success: true, message: 'OTP sent to your email.' });
    });
  });
});

module.exports = router;*/



const express = require('express');
const { register, login, forgotPassword, resetPassword } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
