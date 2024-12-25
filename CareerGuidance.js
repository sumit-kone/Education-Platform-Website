const express = require('express');
const router = express.Router();
const path = require('path');

// Render Career Guidance Page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'career.html'));
});

module.exports = router;
