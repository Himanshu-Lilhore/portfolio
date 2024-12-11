const express = require('express');
const router = express.Router();
const {sendMessage, viewMessages} = require('../controllers/messageController')

router.get('/getAll', viewMessages)
router.post('/send', sendMessage)

module.exports = router; 