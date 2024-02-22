const axios = require('axios');

async function getNewURL() {
  try {
    const response = await axios.get('https://interact.sh/api/new');
    return response.data.URL;
  } catch (error) {
    throw new Error('Failed to get URL from interact.sh');
  }
}

async function getInteractions(sessionURL, timestamp) {
  // Implement the logic to fetch interactions based on your requirements
  // You can use interactsh-client or interact with interact.sh API
  // Return the interactions
}

module.exports = { getNewURL, getInteractions };
