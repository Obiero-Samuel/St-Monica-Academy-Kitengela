const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

// Add rate limiting to auth endpoints
router.post('/register', auth.authLimiter, auth.register);
router.post('/login', auth.authLimiter, auth.login);

module.exports = router;
