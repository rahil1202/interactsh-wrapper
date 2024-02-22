const express = require('express');
const interactshApi = require('./api/interactsh');

const app = express();
const port = 3000;

let currentSessionURL = '';

app.get('/api/getURL', async (req, res) => {
  try {
    currentSessionURL = await interactshApi.getNewURL();
    res.json({ url: currentSessionURL });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get URL' });
  }
});

app.get('/api/getInteractions', async (req, res) => {
  const { timestamp } = req.query;

  if (!currentSessionURL) {
    return res.status(400).json({ error: 'No session URL available' });
  }

  try {
    const interactions = await interactshApi.getInteractions(currentSessionURL, timestamp);
    res.json({ interactions });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get interactions' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
