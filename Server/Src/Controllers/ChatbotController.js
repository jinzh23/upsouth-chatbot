// const lexService = require('../services/lexService');

// const postChatbotMessage = async (req, res) => {
//   try {
//     const userInput = req.body.userInput;
//     const response = await lexService.sendChatbotMessage(userInput);
//     res.send(response);
//   } catch (err) {
//     console.error('Chatbot message error:', err);
//     res.status(500).send({ error: 'An error occurred while processing the chatbot message.' });
//   }
// };

// module.exports = {
//   postChatbotMessage,
// };

// const postChatbotMessage = async (req, res) => {
//   try {
//     const userInput = req.body.userInput;
//     const response = await lexService.sendChatbotMessage(userInput);

//     // Extract custom payload responses
//     const customPayloadMessages = response.messages.filter(
//       (message) => message.contentType === 'CustomPayload'
//     );

//     // Extract regular text responses
//     const textMessages = response.messages.filter(
//       (message) => message.contentType === 'PlainText'
//     );

//     // Process and extract content from custom payload responses
//     const customPayloadResponses = customPayloadMessages.map(
//       (message) => JSON.parse(message.content).messages
//     );

//     // Extract content from regular text responses
//     const textResponses = textMessages.map((message) => message.content);

//     res.send({
//       customPayloadResponses,
//       textResponses,
//     });
//   } catch (err) {
//     console.error('Chatbot message error:', err);
//     res.status(500).send({ error: 'An error occurred while processing the chatbot message.' });
//   }
// };

// module.exports = {
//   postChatbotMessage,
// };

// chatbotController.js

// const postChatbotMessage = async (req, res) => {
//   const { userInput } = req.body;

//   try {
//     const chatbotResponse = await fetchChatbotResponse(userInput);
//     const json = parseJSON(chatbotResponse);

//     const customPayloadResponses = json.messages.filter(
//       (message) => message.contentType === 'CustomPayload'
//     );

//     const textResponses = json.messages.filter(
//       (message) => message.contentType === 'PlainText'
//     );

//     res.json({ customPayloadResponses, textResponses });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while processing the chatbot message.' });
//   }
// };

// const parseJSON = (response) => {
//   try {
//     return JSON.parse(response);
//   } catch (error) {
//     console.error('Error parsing JSON response:', error);
//     throw error;
//   }
// };




// const postChatbotMessage = async (req, res) => {
//   const { userInput } = req.body;

//   try {
//     const chatbotResponse = await lexService.postText(userInput); // Use the lexService to send a request to the Lex runtime
//     const json = parseJSON(chatbotResponse);

//     const customPayloadResponses = json.messages.filter(
//       (message) => message.contentType === 'CustomPayload'
//     );

//     const textResponses = json.messages.filter(
//       (message) => message.contentType === 'PlainText'
//     );

//     res.json({ customPayloadResponses, textResponses });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while processing the chatbot message.' });
//   }
// };

// const parseJSON = (response) => {
//   try {
//     return JSON.parse(response);
//   } catch (error) {
//     console.error('Error parsing JSON response:', error);
//     throw error;
//   }
// };

const lexService = require('../Services/LexService'); 

const postChatbotMessage = async (req, res) => {
  const { userInput } = req.body;

  try {
    const chatbotResponse = await lexService.sendChatbotMessage(userInput); // Use the lexService to send a request to the Lex runtime

    const customPayloadResponses = chatbotResponse.messages.filter(
      (message) => message.contentType === 'CustomPayload'
    );

    const textResponses = chatbotResponse.messages.filter(
      (message) => message.contentType === 'PlainText'
    );

    res.json({ customPayloadResponses, textResponses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the chatbot message.' });
  }
};

module.exports = {
  postChatbotMessage,
};

