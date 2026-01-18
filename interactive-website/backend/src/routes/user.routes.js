const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');

router.get('/me', user.getProfile);
router.get('/', user.listUsers);

module.exports = router;
