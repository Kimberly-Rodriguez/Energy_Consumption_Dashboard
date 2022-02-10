const express = require('express');
var fs = require('fs');
var cors = require('cors');

const path = require('path');

const port = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get ('/getdata', (req, res) => {
  var obj = JSON.parse(fs.readFileSync('./seeders/data.json', 'utf8'));
  res.json(obj)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

