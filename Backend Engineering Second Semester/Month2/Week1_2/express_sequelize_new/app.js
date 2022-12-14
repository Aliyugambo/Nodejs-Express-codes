const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})