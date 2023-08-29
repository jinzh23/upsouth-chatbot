const express = require('express');
const chatbotController = require('../Controllers/ChatbotController');

const router = express.Router();

router.post('/api/NesiaChatBot', chatbotController.postChatbotMessage);

module.exports = router;
