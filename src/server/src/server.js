const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 5000;

app.get('/api/games', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, './steam-db.json');
    const rawData = await fs.readFile(dataPath, 'utf-8');
    const games = JSON.parse(rawData);

    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch games data' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});