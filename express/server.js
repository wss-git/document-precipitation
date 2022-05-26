const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'))
});

app.listen(9000, () => {
  console.log('start success: http://0.0.0.0:9000');
}).on('error', (e) => {
  console.error(e.code, e.message)
});