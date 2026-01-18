const express = require('express');
const router = express.Router();
const content = require('../controllers/content.controller');

router.get('/', content.listContent);
router.get('/:id', content.getContent);
router.post('/', content.createContent);

module.exports = router;
