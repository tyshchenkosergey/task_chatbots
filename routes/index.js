const express = require('express');
const router = express.Router();

// landing
router.get('/', async (req, res) => {
  await res.send('Welcome to the main page');
});

module.exports = router;
