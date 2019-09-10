const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/country/:name', (req, res) => res.send(req.params.name));
//   if (req.params.name === 'uk') {
//     return res.send('Hello World!'); }
//   } elseif(name === 'albania') {
//     return res.send('Hello World!'); }
//   } else {
//       return res.send('Hello World!'); }

module.exports = app;
