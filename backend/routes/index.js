const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

// GET /users
router.use('/api/v1', require('./api'));

module.exports = router;
