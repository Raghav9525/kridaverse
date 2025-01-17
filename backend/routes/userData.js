
const express = require('express')
const router = express.Router();

const userDataControllers = require('../controllers/userData')

// routes/userData.js
router.post('/store_user_data', userDataControllers.storeUserData);

router.post('/generate_pdf', userDataControllers.generatePDF);

module.exports = router