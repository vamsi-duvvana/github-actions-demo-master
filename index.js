const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello World');
});

module.exports = app.listen(8080, () => {
  console.log('listening on PORT 8080');
});
