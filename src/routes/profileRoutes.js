// routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/profileController');

router.get('/user/profile', getUserProfile);

module.exports = router;