const express = require('express');
const router = express.Router();
const parentController = require('../controllers/parent.controller');

// Registration
router.post('/register', parentController.register);
// OTP Verification
router.post('/verify-otp', parentController.verifyOtp);
// Login
router.post('/login', parentController.login);
// Get Parent Profile (protected route)
router.get('/profile', parentController.getProfile);

module.exports = router;
