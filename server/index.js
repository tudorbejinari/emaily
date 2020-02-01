const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Im a new WebPage');
});
app.get('/about', (req, res) => {
  res.send('about page here');
});
const PORT = process.env.PORT || 5000

app.listen(PORT);
