const express = require('express');
const UserController = require('../../controllers/UserController');
const router = express.Router();
const userRouter = require('./users');
// GET /users
router.get('/', UserController.index);
router.get('/search', UserController.search);

module.exports = router;
