const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/country/:name', (req, res) => {
  if (req.params.name === 'uk') {
    return res.json({ safeTapWater: true });
  } if (req.params.name === 'albania') {
    return res.json({ safeTapWater: false });
  }
  return res.send('Hello World!');
});

module.exports = app;
